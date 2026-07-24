import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { RegionMap } from "@/components/site/RegionMap";

export const Route = createFileRoute("/nossa-gente")({
  head: () => ({
    meta: [
      { title: "O que Denis fez pela nossa gente" },
      { name: "description", content: "Comunidades, movimentos e pessoas atendidas pelo mandato de Denis." },
      { property: "og:title", content: "O que Denis fez pela nossa gente" },
      { property: "og:description", content: "Gente que conhece gente. Escuta e ação nas comunidades." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: NossaGente,
});

function NossaGente() {
  return (
    <Layout>
      <section className="bg-gradient-hero text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-20">
          <p className="text-sm font-bold uppercase tracking-widest text-accent">O que Denis fez por</p>
          <h1 className="mt-3 text-5xl md:text-6xl font-black">Nossa gente</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/85">
            Cada região, cada história. Explore o mapa e conheça as ações de Denis por perto de você.
          </p>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-[1400px] px-4 md:px-10 mb-8">
          <p className="text-xs font-bold text-primary uppercase tracking-[0.3em]">O Trabalho Já Chegou</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight">
            Escolha uma região no mapa
          </h2>
        </div>
        <div className="mx-auto max-w-[1400px] px-4 md:px-10">
          <RegionMap />
        </div>
      </section>
    </Layout>
  );
}
