import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { uploadMedia, type GalleryRow } from "@/lib/cms";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";

export const Route = createFileRoute("/admin/galeria")({
  component: AdminGallery,
});

function AdminGallery() {
  const qc = useQueryClient();
  const [album, setAlbum] = useState("geral");
  const [caption, setCaption] = useState("");
  const [uploading, setUploading] = useState(false);

  const { data: images = [] } = useQuery({
    queryKey: ["admin", "gallery"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("gallery_images")
        .select("*")
        .order("album")
        .order("sort_order");
      if (error) throw error;
      return (data ?? []) as GalleryRow[];
    },
  });

  const add = useMutation({
    mutationFn: async (file: File) => {
      const url = await uploadMedia(file, `galeria/${album || "geral"}`);
      const { error } = await supabase.from("gallery_images").insert({
        album: album || "geral",
        image_url: url,
        caption: caption || null,
        sort_order: images.length,
      });
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("Imagem adicionada.");
      setCaption("");
      void qc.invalidateQueries({ queryKey: ["admin"] });
    },
    onError: (e) => toast.error(e instanceof Error ? e.message : "Erro no envio."),
  });

  const remove = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("gallery_images").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("Imagem removida.");
      void qc.invalidateQueries({ queryKey: ["admin"] });
    },
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Galeria</h2>
        <p className="text-sm text-muted-foreground">Envie fotos e organize por álbum.</p>
      </div>

      <Card>
        <CardContent className="space-y-4 p-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label>Álbum</Label>
              <Input value={album} maxLength={60} onChange={(e) => setAlbum(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label>Legenda (opcional)</Label>
              <Input value={caption} maxLength={200} onChange={(e) => setCaption(e.target.value)} />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Nova imagem</Label>
            <Input
              type="file"
              accept="image/*"
              disabled={uploading || add.isPending}
              onChange={async (e) => {
                const file = e.target.files?.[0];
                if (!file) return;
                setUploading(true);
                try {
                  await add.mutateAsync(file);
                } finally {
                  setUploading(false);
                  e.target.value = "";
                }
              }}
            />
          </div>
        </CardContent>
      </Card>

      {images.length === 0 ? (
        <p className="text-sm text-muted-foreground">Nenhuma imagem enviada.</p>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {images.map((img) => (
            <div key={img.id} className="overflow-hidden rounded-lg border bg-card">
              <img src={img.image_url} alt={img.caption ?? ""} className="h-32 w-full object-cover" />
              <div className="flex items-center justify-between gap-2 p-2">
                <div className="min-w-0">
                  <p className="truncate text-xs font-medium">{img.caption || "Sem legenda"}</p>
                  <p className="text-[11px] text-muted-foreground">{img.album}</p>
                </div>
                <Button variant="ghost" size="sm" onClick={() => remove.mutate(img.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
