import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { SPMap } from "@/components/site/SPMap";

export const Route = createFileRoute("/nossa-gente")({
  head: () => ({
    meta: [
      { title: "Por nossa gente — Denis Andia" },
      { name: "description", content: "O trabalho de Denis Andia por nossa gente, cidade por cidade do Estado de São Paulo." },
      { property: "og:title", content: "Por nossa gente — Denis Andia" },
      { property: "og:description", content: "Mapa interativo com o trabalho pelas cidades." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: NossaGente,
});

function NossaGente() {
  return (
    <Layout>
      <section className="bg-ink text-white py-16 md:py-20" style={{ backgroundColor: "var(--ink)" }}>
        <div className="mx-auto max-w-[1400px] px-4 md:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-accent">Por nossa gente</p>
          <h1 className="mt-4 text-5xl md:text-6xl font-black leading-[0.95]">
            O trabalho <span className="text-accent italic font-serif font-normal">já chegou</span>
          </h1>
          <p className="mt-6 max-w-2xl text-white/85">
            Clique nas regiões para ver os vídeos das cidades atendidas. (Vídeos e cidades definitivos a enviar.)
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-[1400px] px-4 md:px-10">
          <SPMap />
        </div>
      </section>
    </Layout>
  );
}
