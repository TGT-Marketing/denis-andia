import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { uploadMedia, type BannerRow } from "@/lib/cms";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";
import { Pencil, Plus, Trash2 } from "lucide-react";

export const Route = createFileRoute("/admin/banners")({
  component: AdminBanners,
});

type Draft = {
  id?: string;
  title: string;
  text: string;
  image_url: string;
  link_url: string;
  active: boolean;
  sort_order: number;
};

const EMPTY: Draft = { title: "", text: "", image_url: "", link_url: "", active: true, sort_order: 0 };

function AdminBanners() {
  const qc = useQueryClient();
  const [draft, setDraft] = useState<Draft | null>(null);
  const [uploading, setUploading] = useState(false);

  const { data: banners = [] } = useQuery({
    queryKey: ["admin", "banners"],
    queryFn: async () => {
      const { data, error } = await supabase.from("banners").select("*").order("sort_order");
      if (error) throw error;
      return (data ?? []) as BannerRow[];
    },
  });

  const save = useMutation({
    mutationFn: async (item: Draft) => {
      const payload = {
        title: item.title || null,
        text: item.text || null,
        image_url: item.image_url || null,
        link_url: item.link_url || null,
        active: item.active,
        sort_order: Number(item.sort_order) || 0,
      };
      const { error } = item.id
        ? await supabase.from("banners").update(payload).eq("id", item.id)
        : await supabase.from("banners").insert(payload);
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("Banner salvo.");
      setDraft(null);
      void qc.invalidateQueries({ queryKey: ["admin"] });
    },
    onError: (e) => toast.error(e instanceof Error ? e.message : "Erro ao salvar."),
  });

  const remove = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("banners").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("Banner excluído.");
      void qc.invalidateQueries({ queryKey: ["admin"] });
    },
  });

  const onUpload = async (file: File) => {
    setUploading(true);
    try {
      const url = await uploadMedia(file, "banners");
      setDraft((d) => (d ? { ...d, image_url: url } : d));
      toast.success("Imagem enviada.");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Falha no envio.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold">Banners</h2>
          <p className="text-sm text-muted-foreground">Imagens e chamadas para destaques do site.</p>
        </div>
        <Button onClick={() => setDraft({ ...EMPTY })}>
          <Plus className="mr-2 h-4 w-4" /> Novo banner
        </Button>
      </div>

      {banners.length === 0 ? (
        <p className="text-sm text-muted-foreground">Nenhum banner cadastrado.</p>
      ) : (
        <div className="space-y-3">
          {banners.map((b) => (
            <Card key={b.id}>
              <CardContent className="flex flex-wrap items-center gap-4 p-4">
                {b.image_url ? (
                  <img src={b.image_url} alt="" className="h-16 w-28 rounded object-cover" />
                ) : (
                  <div className="h-16 w-28 rounded bg-muted" />
                )}
                <div className="min-w-0 flex-1">
                  <p className="truncate font-semibold">{b.title || "Sem título"}</p>
                  <p className="text-xs text-muted-foreground">{b.active ? "Ativo" : "Inativo"}</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setDraft({
                        id: b.id,
                        title: b.title ?? "",
                        text: b.text ?? "",
                        image_url: b.image_url ?? "",
                        link_url: b.link_url ?? "",
                        active: b.active,
                        sort_order: b.sort_order,
                      })
                    }
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => remove.mutate(b.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <Dialog open={Boolean(draft)} onOpenChange={(o) => !o && setDraft(null)}>
        <DialogContent className="max-h-[90vh] max-w-xl overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{draft?.id ? "Editar banner" : "Novo banner"}</DialogTitle>
          </DialogHeader>
          {draft && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Título</Label>
                <Input value={draft.title} maxLength={120} onChange={(e) => setDraft({ ...draft, title: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Texto</Label>
                <Textarea rows={3} maxLength={400} value={draft.text} onChange={(e) => setDraft({ ...draft, text: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Link (opcional)</Label>
                <Input value={draft.link_url} maxLength={300} onChange={(e) => setDraft({ ...draft, link_url: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Imagem</Label>
                <Input
                  type="file"
                  accept="image/*"
                  disabled={uploading}
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) void onUpload(file);
                  }}
                />
                {draft.image_url && <img src={draft.image_url} alt="" className="h-32 rounded object-cover" />}
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Ordem</Label>
                  <Input
                    type="number"
                    value={draft.sort_order}
                    onChange={(e) => setDraft({ ...draft, sort_order: Number(e.target.value) })}
                  />
                </div>
                <div className="flex items-center gap-2 pt-6">
                  <Switch checked={draft.active} onCheckedChange={(v) => setDraft({ ...draft, active: v })} />
                  <Label>Ativo</Label>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setDraft(null)}>
              Cancelar
            </Button>
            <Button disabled={save.isPending || uploading} onClick={() => draft && save.mutate(draft)}>
              Salvar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
