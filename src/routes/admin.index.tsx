import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Route = createFileRoute("/admin/")({
  component: AdminDashboard,
});

async function fetchCounts() {
  const [news, published, banners, gallery] = await Promise.all([
    supabase.from("news").select("id", { count: "exact", head: true }),
    supabase.from("news").select("id", { count: "exact", head: true }).eq("status", "published"),
    supabase.from("banners").select("id", { count: "exact", head: true }).eq("active", true),
    supabase.from("gallery_images").select("id", { count: "exact", head: true }),
  ]);
  return {
    news: news.count ?? 0,
    published: published.count ?? 0,
    drafts: (news.count ?? 0) - (published.count ?? 0),
    banners: banners.count ?? 0,
    gallery: gallery.count ?? 0,
  };
}

function AdminDashboard() {
  const { data } = useQuery({ queryKey: ["admin", "counts"], queryFn: fetchCounts });

  const cards = [
    { label: "Notícias publicadas", value: data?.published ?? 0, to: "/admin/noticias" as const },
    { label: "Rascunhos", value: data?.drafts ?? 0, to: "/admin/noticias" as const },
    { label: "Banners ativos", value: data?.banners ?? 0, to: "/admin/banners" as const },
    { label: "Imagens na galeria", value: data?.gallery ?? 0, to: "/admin/galeria" as const },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Visão geral</h2>
        <p className="text-sm text-muted-foreground">Resumo do conteúdo publicado no site.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((c) => (
          <Link key={c.label} to={c.to}>
            <Card className="transition-shadow hover:shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{c.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{c.value}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
