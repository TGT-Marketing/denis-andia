import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { GalleryCarousel } from "@/components/site/GalleryCarousel";
import { Layout } from "@/components/site/Layout";
import { VideoModal } from "@/components/site/VideoModal";
import denisCriancaFavela from "@/assets/denis-crianca-favela.jpg.asset.json";
import denisFeira from "@/assets/denis-feira.jpg.asset.json";
import denisConversaIdosa from "@/assets/denis-conversa-idosa.jpg.asset.json";
import denisMeninaNoite from "@/assets/denis-menina-noite.jpg.asset.json";
import denisAbracosCriancas from "@/assets/denis-abracos-criancas.jpg.asset.json";
import denisBancoCasal from "@/assets/denis-banco-casal.jpg.asset.json";
import trabalhoImg from "@/assets/denis-trabalho.jpg";

export const Route = createFileRoute("/sua-cidade")({
  head: () => ({
    meta: [
      { title: "Por Sua Cidade — Denis Andia" },
      { name: "description", content: "O legado de Denis Andia por Santa Bárbara d'Oeste: fim da favela, SUS zerado e a melhor nota da educação." },
      { property: "og:title", content: "Por Sua Cidade — Denis Andia" },
      { property: "og:description", content: "Legado em Santa Bárbara d'Oeste: Fim da Favela, SUS Zerado e Melhor Nota da Educação." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: SuaCidade,
});

type Projeto = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  topics?: string[];
  gallery: { image: string; caption: string }[];
};


const PROJETOS: Projeto[] = [
  {
    id: "legado",
    eyebrow: "Legado",
    title: "Legado em Santa Bárbara d'Oeste",
    description:
      "Como prefeito de Santa Bárbara d'Oeste por oito anos, Denis Andia transformou a cidade e resgatou o orgulho do barbarense! Com autoestima, o cidadão passou a enxergar uma cidade mais moderna, organizada e preparada para o futuro.",
    topics: [
      "Fim da única favela existente na cidade",
      "Alas pediátricas nos prontos-socorros",
      "Leitos de UTI duplicados",
      "ISO 9001 na rede municipal de Saúde",
      "Fila de vagas de creche zerada",
      "Maior nota da Educação na história",
      "100% do esgoto tratado e ampliação no abastecimento de água",
      "Implantação de videomonitoramento na Segurança Pública",
    ],
    gallery: [
      { image: denisCriancaFavela.url, caption: "" },
      { image: denisFeira.url, caption: "" },
      { image: denisConversaIdosa.url, caption: "" },
      { image: denisMeninaNoite.url, caption: "" },
      { image: denisAbracosCriancas.url, caption: "" },
      { image: denisBancoCasal.url, caption: "" },
    ],
  },
];


function SuaCidade() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <Layout>
      <VideoModal
        open={videoOpen}
        onOpenChange={setVideoOpen}
        title="Por Sua Cidade — Denis Andia"
        description="Conheça o legado de Denis em Santa Bárbara d'Oeste."
      />

      {/* HERO */}
      <section className="bg-gradient-hero text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-20 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-accent">O que Denis fez</p>
            <h1 className="mt-3 text-5xl md:text-6xl font-black leading-tight">Por sua cidade</h1>
            <p className="mt-5 max-w-xl text-lg text-white/85">
              Santa Bárbara d'Oeste virou referência em habitação, saúde e educação. Um legado construído com trabalho, presença e compromisso com as pessoas.
            </p>
            <button
              onClick={() => setVideoOpen(true)}
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3 text-primary-foreground font-bold shadow-brand hover:opacity-90 transition-opacity"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
                <Play className="h-4 w-4 fill-current" />
              </span>
              Assista ao vídeo
            </button>
          </div>
          <button
            onClick={() => setVideoOpen(true)}
            className="relative aspect-video w-full overflow-hidden rounded-3xl shadow-card group"
            aria-label="Reproduzir vídeo"
          >
            <img src={trabalhoImg} alt="Denis Andia" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-brand">
                <Play className="h-8 w-8 fill-current" />
              </span>
            </span>
          </button>
        </div>
      </section>

      {/* PROJETOS */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-20 space-y-24">
          {PROJETOS.map((p, i) => (
            <ProjetoBlock key={p.id} projeto={p} reverse={i % 2 === 1} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

function ProjetoBlock({ projeto, reverse }: { projeto: Projeto; reverse: boolean }) {
  return (
    <article className="space-y-8">
      <div className={`grid gap-10 lg:grid-cols-2 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-primary">{projeto.eyebrow}</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-black text-foreground">{projeto.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{projeto.description}</p>
          {projeto.topics && projeto.topics.length > 0 && (
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {projeto.topics.map((topic) => (
                <li key={topic} className="flex items-start gap-3 text-foreground">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span className="text-base leading-relaxed">{topic}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="rounded-3xl overflow-hidden shadow-card">
          <img src={projeto.gallery[0]?.image} alt={projeto.title} className="h-72 w-full object-cover" />
        </div>
      </div>
      <GalleryCarousel items={projeto.gallery} showCaptions={false} />
    </article>
  );
}


