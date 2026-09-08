import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { slugify, uploadMedia, type NewsRow } from "@/lib/cms";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { Pencil, Plus, Trash2 } from "lucide-react";

export const Route = createFileRoute("/admin/noticias")({
  component: AdminNews,
});

type Draft = {
  id?: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
  image_url: string;
  status: string;
  featured: boolean;
  sort_order: number;
};

const EMPTY: Draft = {
  title: "",
  slug: "",
  category: "",
  excerpt: "",
  content: "",
  image_url: "",
  status: "draft",
  featured: false,
  sort_order: 0,
};

function AdminNews() {
  const qc = useQueryClient();
  const [draft, setDraft] = useState<Draft | null>(null);
  const [deleting, setDeleting] = useState<NewsRow | null>(null);
  const [uploading, setUploading] = useState(false);

  const { data: news = [], isLoading } = useQuery({
    queryKey: ["admin", "news"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("news")
        .select("*")
        .order("sort_order", { ascending: true })
        .order("published_at", { ascending: false });
      if (error) throw error;
      return (data ?? []) as NewsRow[];
    },
  });

  const save = useMutation({
    mutationFn: async (item: Draft) => {
      const payload = {
        title: item.title,
        slug: item.slug || slugify(item.title),
        category: item.category || null,
        excerpt: item.excerpt || null,
        content: item.content,
        image_url: item.image_url || null,
        status: item.status,
        featured: item.featured,
        sort_order: Number(item.sort_order) || 0,
      };
      const { error } = item.id
        ? await supabase.from("news").update(payload).eq("id", item.id)
        : await supabase.from("news").insert(payload);
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("Notícia salva.");
      setDraft(null);
      void qc.invalidateQueries({ queryKey: ["admin"] });
      void qc.invalidateQueries({ queryKey: ["news", "published"] });
    },
    onError: (e) => toast.error(e instanceof Error ? e.message : "Erro ao salvar."),
  });

  const remove = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("news").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("Notícia excluída.");
      setDeleting(null);
      void qc.invalidateQueries({ queryKey: ["admin"] });
      void qc.invalidateQueries({ queryKey: ["news", "published"] });
    },
    onError: (e) => toast.error(e instanceof Error ? e.message : "Erro ao excluir."),
  });

  const onUpload = async (file: File) => {
    setUploading(true);
    try {
      const url = await uploadMedia(file, "noticias");
      setDraft((d) => (d ? { ...d, image_url: url } : d));
      toast.success("Imagem enviada.");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Falha no envio da imagem.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold">Notícias</h2>
          <p className="text-sm text-muted-foreground">Crie, edite, publique ou deixe como rascunho.</p>
        </div>
        <Button onClick={() => setDraft({ ...EMPTY })}>
          <Plus className="mr-2 h-4 w-4" /> Nova notícia
        </Button>
      </div>

      {isLoading ? (
        <p className="text-sm text-muted-foreground">Carregando…</p>
      ) : news.length === 0 ? (
        <p className="text-sm text-muted-foreground">Nenhuma notícia cadastrada.</p>
      ) : (
        <div className="space-y-3">
          {news.map((n) => (
            <Card key={n.id}>
              <CardContent className="flex flex-wrap items-center gap-4 p-4">
                {n.image_url ? (
                  <img src={n.image_url} alt="" className="h-16 w-24 rounded object-cover" />
                ) : (
                  <div className="h-16 w-24 rounded bg-muted" />
                )}
                <div className="min-w-0 flex-1">
                  <p className="truncate font-semibold">{n.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {n.status === "published" ? "Publicada" : "Rascunho"}
                    {n.featured ? " · Destaque" : ""} · {new Date(n.published_at).toLocaleDateString("pt-BR")}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setDraft({
                        id: n.id,
                        title: n.title,
                        slug: n.slug,
                        category: n.category ?? "",
                        excerpt: n.excerpt ?? "",
                        content: n.content,
                        image_url: n.image_url ?? "",
                        status: n.status,
                        featured: n.featured,
                        sort_order: n.sort_order,
                      })
                    }
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setDeleting(n)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <Dialog open={Boolean(draft)} onOpenChange={(o) => !o && setDraft(null)}>
        <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{draft?.id ? "Editar notícia" : "Nova notícia"}</DialogTitle>
          </DialogHeader>
          {draft && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="n-title">Título</Label>
                <Input
                  id="n-title"
                  value={draft.title}
                  maxLength={200}
                  onChange={(e) =>
                    setDraft({
                      ...draft,
                      title: e.target.value,
                      slug: draft.id ? draft.slug : slugify(e.target.value),
                    })
                  }
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="n-cat">Categoria (etiqueta)</Label>
                  <Input id="n-cat" value={draft.category} maxLength={60} onChange={(e) => setDraft({ ...draft, category: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="n-order">Ordem</Label>
                  <Input
                    id="n-order"
                    type="number"
                    value={draft.sort_order}
                    onChange={(e) => setDraft({ ...draft, sort_order: Number(e.target.value) })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="n-excerpt">Resumo</Label>
                <Textarea
                  id="n-excerpt"
                  rows={3}
                  maxLength={600}
                  value={draft.excerpt}
                  onChange={(e) => setDraft({ ...draft, excerpt: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="n-content">Conteúdo (um parágrafo por linha)</Label>
                <Textarea
                  id="n-content"
                  rows={12}
                  value={draft.content}
                  onChange={(e) => setDraft({ ...draft, content: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="n-image">Imagem</Label>
                <Input
                  id="n-image"
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
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <Switch
                    id="n-status"
                    checked={draft.status === "published"}
                    onCheckedChange={(v) => setDraft({ ...draft, status: v ? "published" : "draft" })}
                  />
                  <Label htmlFor="n-status">Publicada</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Switch id="n-featured" checked={draft.featured} onCheckedChange={(v) => setDraft({ ...draft, featured: v })} />
                  <Label htmlFor="n-featured">Destaque</Label>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setDraft(null)}>
              Cancelar
            </Button>
            <Button
              disabled={save.isPending || uploading || !draft?.title}
              onClick={() => draft && save.mutate(draft)}
            >
              {save.isPending ? "Salvando…" : "Salvar"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog open={Boolean(deleting)} onOpenChange={(o) => !o && setDeleting(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Excluir notícia?</AlertDialogTitle>
            <AlertDialogDescription>
              “{deleting?.title}” será removida do site. Esta ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={() => deleting && remove.mutate(deleting.id)}>Excluir</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
