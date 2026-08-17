import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Play } from "lucide-react";
import { GalleryCarousel } from "@/components/site/GalleryCarousel";
import { Layout } from "@/components/site/Layout";
import { VideoModal } from "@/components/site/VideoModal";
import brasil1 from "@/assets/national/denis-brasil-1.jpeg.asset.json";
import brasil2 from "@/assets/national/denis-brasil-2.jpeg.asset.json";
import brasil3 from "@/assets/national/denis-brasil-3.jpeg.asset.json";
import brasil4 from "@/assets/national/denis-brasil-4.jpeg.asset.json";
import brasil5 from "@/assets/national/denis-brasil-5.jpeg.asset.json";
import brasil6 from "@/assets/national/denis-brasil-6.jpeg.asset.json";
import brasil7 from "@/assets/national/denis-brasil-7.jpeg.asset.json";
import brasil8 from "@/assets/national/denis-brasil-8.jpeg.asset.json";
import brasil9 from "@/assets/national/denis-brasil-9.jpeg.asset.json";
import brasil10 from "@/assets/national/denis-brasil-10.jpeg.asset.json";
import brasil11 from "@/assets/national/denis-brasil-11.jpeg.asset.json";
import brasil12 from "@/assets/national/denis-brasil-12.jpeg.asset.json";
import trabalhoImg from "@/assets/denis-trabalho.jpg";

export const Route = createFileRoute("/pelo-brasil")({
  head: () => ({
    meta: [
      { title: "Pelo Brasil — Denis Andia" },
      { name: "description", content: "Macroprojetos, atuação como Secretário Nacional de Mobilidade e a trajetória de Denis Andia pelo Brasil." },
      { property: "og:title", content: "Pelo Brasil — Denis Andia" },
      { property: "og:description", content: "Macroprojetos e atuação nacional de Denis Andia." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: PeloBrasil,
});

type Projeto = {
  id: string;
  eyebrow: string;
  title: string;
  description: string | React.ReactNode;
  gallery: { image: string; caption: string }[];
};

const PROJETOS: Projeto[] = [
  {
    id: "projetos",
    eyebrow: "Pelo Brasil",
    title: "PROJETOS",
    description: (
      <ul className="grid gap-3 sm:grid-cols-2">
        {[
          "Marco Legal do Transporte Público (mais investimentos e possibilidade de tarifas mais acessíveis ao usuário)",
          "Ônibus elétricos e renovação das frotas em diversas cidades do País",
          "Trem Intercidades São Paulo – Campinas",
          "Trecho Norte do Rodoanel",
          "BRTs de Campinas, Sorocaba e São José dos Campos",
          "Nove linhas do metrô paulistano",
          "VLT Baixada Santista",
          "Túnel submerso Santos – Guarujá",
        ].map((topic) => (
          <li key={topic} className="flex items-start gap-3 text-foreground">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--brand-green)]" />
            <span className="text-base leading-relaxed">{topic}</span>
          </li>
        ))}
      </ul>
    ),
    gallery: [
      { image: brasil1.url, caption: "" },
      { image: brasil2.url, caption: "" },
      { image: brasil3.url, caption: "" },
      { image: brasil4.url, caption: "" },
      { image: brasil5.url, caption: "" },
      { image: brasil6.url, caption: "" },
      { image: brasil7.url, caption: "" },
      { image: brasil8.url, caption: "" },
      { image: brasil9.url, caption: "" },
      { image: brasil10.url, caption: "" },
      { image: brasil11.url, caption: "" },
      { image: brasil12.url, caption: "" },
    ],
  },
];

function PeloBrasil() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <Layout>
      <VideoModal
        open={videoOpen}
        onOpenChange={setVideoOpen}
        title="Pelo Brasil — Denis Andia"
        description="A atuação nacional de Denis Andia."
      />

      {/* HERO */}
      <section className="bg-[var(--brand-green)] text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-24 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-[var(--brand-yellow)]">
              O QUE O DENIS FEZ
            </p>
            <h1 className="mt-3 text-4xl md:text-6xl font-black leading-tight uppercase">PELO BRASIL</h1>
            <p className="mt-5 max-w-xl text-base md:text-lg text-white">
              Secretário Nacional de Mobilidade Urbana do Ministério das Cidades durante três anos, Denis Andia teve atuação fundamental na elaboração e avanço de importantes projetos de infraestrutura e transporte em todo o Brasil.
            </p>
          </div>
          <button
            onClick={() => setVideoOpen(true)}
            className="relative aspect-video w-full overflow-hidden rounded-3xl shadow-card group"
            aria-label="Reproduzir vídeo"
          >
            <img src={trabalhoImg} alt="Denis Andia" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--brand-yellow)] text-ink shadow-brand">
                <Play className="h-8 w-8 fill-current" />
              </span>
            </span>
          </button>
        </div>
      </section>

      {/* PROJETOS */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-20 space-y-24">
          {PROJETOS.map((p) => (
            <ProjetoBlock key={p.id} projeto={p} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

function ProjetoBlock({ projeto }: { projeto: Projeto }) {
  return (
    <article className="space-y-8">
      <div>
        <h2 className="mt-2 text-sm font-bold text-[var(--brand-green)] uppercase tracking-widest">{projeto.title}</h2>
        <div className="mt-4 text-lg text-muted-foreground">{projeto.description}</div>
      </div>
      <GalleryCarousel items={projeto.gallery} showCaptions={false} />
    </article>
  );
}
