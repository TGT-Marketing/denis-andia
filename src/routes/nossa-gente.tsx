import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { SaoPauloMap } from "@/components/site/SaoPauloMap";

export const Route = createFileRoute("/nossa-gente")({
  head: () => ({
    meta: [
      { title: "Por Nossa Gente — Denis Andia" },
      { name: "description", content: "O trabalho de Denis Andia junto às comunidades e regiões do estado de São Paulo." },
      { property: "og:title", content: "Por Nossa Gente — Denis Andia" },
      { property: "og:description", content: "Escuta e ação em cada canto do estado." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: NossaGente,
});

function NossaGente() {
  return (
    <Layout>
      <section className="relative bg-ink text-white pt-32 pb-14" style={{ backgroundColor: "var(--ink)" }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <p className="text-xs font-bold tracking-[0.4em] uppercase text-accent">Por Nossa Gente</p>
          <h1 className="mt-4 text-5xl md:text-7xl font-black leading-none uppercase">
            Gente que <span className="text-accent">conhece</span> gente.
          </h1>
          <p className="mt-6 max-w-2xl text-white/85 text-lg">
            Cada região do estado tem seu jeito, sua história e sua gente. Clique no mapa para conhecer
            o trabalho realizado em cada uma delas.
          </p>
        </div>
        <div className="grid grid-cols-3 h-3 mt-14">
          <span style={{ backgroundColor: "var(--brand-green)" }} />
          <span style={{ backgroundColor: "var(--brand-yellow)" }} />
          <span style={{ backgroundColor: "var(--brand-blue)" }} />
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <SaoPauloMap />
        </div>
      </section>
    </Layout>
  );
}
