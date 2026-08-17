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
import denisConversaIdosa2 from "@/assets/denis-conversa-idosa-2.jpeg.asset.json";
import denisAbracoMulher from "@/assets/denis-abraco-mulher.jpeg.asset.json";
import denisConversaCadeirante from "@/assets/denis-conversa-cadeirante.jpeg.asset.json";
import denisPintandoCrianca from "@/assets/denis-pintando-crianca.jpeg.asset.json";
import denisBancoHomem from "@/assets/denis-banco-homem.jpeg.asset.json";
import denisAbracoCriancas2 from "@/assets/denis-abraco-criancas-2.jpeg.asset.json";
import denisCumprimentoCriancas from "@/assets/denis-cumprimento-criancas.jpeg.asset.json";
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
    title: "LEGADO",
    description:
      "Com autoestima, o cidadão passou a enxergar uma cidade mais moderna, organizada e preparada para o futuro.",
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
      { image: denisConversaIdosa2.url, caption: "" },
      { image: denisAbracoMulher.url, caption: "" },
      { image: denisConversaCadeirante.url, caption: "" },
      { image: denisPintandoCrianca.url, caption: "" },
      { image: denisBancoHomem.url, caption: "" },
      { image: denisAbracoCriancas2.url, caption: "" },
      { image: denisCumprimentoCriancas.url, caption: "" },
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
      <section className="bg-[#0D9344] text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-24 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#FEEE02]">O que Denis fez</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-black leading-tight">Por sua cidade</h1>
            <p className="mt-5 max-w-xl text-base md:text-lg text-white">
              Como prefeito de Santa Bárbara d´Oeste por oito anos, Denis Andia transformou a cidade e resgatou o orgulho do barbarense.
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
            <ProjetoBlock key={p.id} projeto={p} reverse={i % 2 === 1} showCaptions={false} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

function ProjetoBlock({ projeto, reverse, showCaptions = true }: { projeto: Projeto; reverse: boolean; showCaptions?: boolean }) {
  return (
    <article className="space-y-8">
      <div>
        <h2 className="mt-2 text-sm font-medium text-[#0D9344] uppercase tracking-widest">{projeto.title}</h2>
        <p className="mt-4 text-lg text-foreground">{projeto.description}</p>
        {projeto.topics && projeto.topics.length > 0 && (
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {projeto.topics.map((topic) => (
              <li key={topic} className="flex items-start gap-3 text-foreground">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#0D9344]" />
                <span className="text-base leading-relaxed">{topic}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <GalleryCarousel items={projeto.gallery} showCaptions={showCaptions} />
    </article>
  );
}


