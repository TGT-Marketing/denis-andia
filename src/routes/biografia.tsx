import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Play } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { GalleryCarousel } from "@/components/site/GalleryCarousel";
import { VideoModal } from "@/components/site/VideoModal";
import walkAsset from "@/assets/denis-chapeu.jpg";
import rallyBgAsset from "@/assets/denis-menina.jpg";
import cutoutAsset from "@/assets/denis-trabalho.jpg";
import cityImg from "@/assets/denis-city.jpg";
import peopleImg from "@/assets/denis-people.jpg";
import brasilImg from "@/assets/denis-brasil.jpg";

const walkImg = walkAsset;
const rallyBg = rallyBgAsset;
const cutout = cutoutAsset;

export const Route = createFileRoute("/biografia")({
  head: () => ({
    meta: [
      { title: "Biografia — Denis Andia" },
      { name: "description", content: "A história, a linha do tempo e as conquistas de Denis Andia — do interior paulista à atuação nacional." },
      { property: "og:title", content: "Biografia — Denis Andia" },
      { property: "og:description", content: "Conheça a trajetória de Denis Andia em fotos, marcos e histórias." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Biografia,
});

const TIMELINE = [
  { year: "Origem", title: "Raízes em Santa Bárbara d'Oeste", text: "Nascido em Santa Bárbara d'Oeste (SP), é o caçula de uma família típica do interior paulista: filho de uma professora primária e de um trabalhador dedicado à mesma empresa por toda a carreira. É casado com a Roberta." },
  { year: "Formação", title: "Educação pública e universidades", text: "Estudou em escola pública, cursou Matemática Aplicada e Computacional na Unicamp e formou-se em Publicidade e Propaganda pela PUC-Campinas. Ainda jovem, fundou a empresa que administra até hoje." },
  { year: "2012", title: "Primeiro mandato como prefeito", text: "Eleito prefeito de Santa Bárbara d'Oeste pela primeira vez, levando para a gestão a experiência de quem conhece de perto a realidade do interior." },
  { year: "2016", title: "Reeleito pela primeira vez", text: "Tornou-se o primeiro prefeito reeleito da história do município, demonstrando a confiança da população em seu trabalho." },
  { year: "2020", title: "82% de aprovação", text: "Ao concluir o segundo mandato, alcançou 82% de aprovação popular, consolidando resultados expressivos para a cidade." },
  { year: "Reconhecimento", title: "RMC e Sebrae", text: "Presidiu a Região Metropolitana de Campinas (RMC) e recebeu o prêmio Prefeito Empreendedor do Estado de São Paulo, concedido pelo Sebrae." },
  { year: "2023", title: "Secretário Nacional de Mobilidade Urbana", text: "Assumiu o cargo no Ministério das Cidades, atuando na formulação e execução de projetos de infraestrutura e transporte em todo o Brasil, além de ampliar o acesso dos municípios a investimentos." },
];

const GALLERY = [
  { image: rallyBgAsset, caption: "Denis Andia com a nossa gente" },
  { image: walkAsset, caption: "Andando e ouvindo" },
  { image: cutoutAsset, caption: "Trabalho entregue" },
  { image: cityImg, caption: "Cidade transformada" },
  { image: peopleImg, caption: "Gente que conhece gente" },
];

function Biografia() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <Layout transparentHeader>
      <VideoModal
        open={videoOpen}
        onOpenChange={setVideoOpen}
        title="Gente que conhece gente"
        description="Conheça a história de Denis Andia"
      />

      {/* HERO */}
      <section className="relative overflow-hidden text-white" style={{ backgroundColor: "var(--ink)" }}>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${rallyBg})` }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, color-mix(in oklab, var(--ink) 80%, transparent), color-mix(in oklab, var(--ink) 40%, transparent), var(--ink))" }}
        />
        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 pt-32 md:pt-40 pb-16 md:pb-24 grid gap-10 lg:grid-cols-[1.1fr_1fr] items-center">
          <div>
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.35em] text-accent">Biografia</p>
            <h1 className="mt-4 text-4xl md:text-7xl font-black leading-[0.95] tracking-tight">
              Gente que
              <span className="block text-accent italic font-serif font-normal my-2">conhece gente!</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/85">
              Do interior paulista ao Brasil. Uma trajetória construída ouvindo, andando e entregando — com quem faz o país acontecer todos os dias.
            </p>
          </div>
          <div className="relative">
            <button
              onClick={() => setVideoOpen(true)}
              className="relative aspect-video w-full overflow-hidden rounded-3xl shadow-card group"
              aria-label="Reproduzir vídeo"
            >
              <img src={cutout} alt="Denis Andia" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-[var(--brand-yellow)] text-ink shadow-brand">
                  <Play className="h-6 w-6 md:h-8 md:w-8 fill-current" />
                </span>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section className="bg-background pt-24 pb-12">
        <div className="mx-auto max-w-[1200px] px-4 md:px-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">A história</p>
            <div className="mt-8 space-y-5 text-lg text-muted-foreground">
              <p>
                Nascido em Santa Bárbara d’Oeste (SP), Denis Eduardo Andia é o caçula de uma família típica do interior paulista. Filho de uma professora primária, que lecionou em escolas rurais, e de um trabalhador que dedicou toda a sua carreira à mesma empresa, onde ingressou ainda jovem. É casado com a Roberta.
              </p>
              <p>
                Estudou em escola pública, cursou Matemática Aplicada e Computacional na Unicamp e formou-se em Publicidade e Propaganda pela PUC-Campinas. Ainda jovem, fundou a empresa que administra até hoje.
              </p>
              <p>
                Em 2012, foi eleito prefeito de Santa Bárbara d’Oeste pela primeira vez. Quatro anos depois, tornou-se o primeiro prefeito reeleito da história do município. Ao concluir seu segundo mandato, em 2020, alcançou aprovação popular de 82%.
              </p>
              <p>
                Durante sua trajetória na vida pública, presidiu a Região Metropolitana de Campinas (RMC) e recebeu o prêmio Prefeito Empreendedor do Estado de São Paulo, concedido pelo Sebrae.
              </p>
              <p>
                Em 2023, assumiu o cargo de secretário nacional de Mobilidade Urbana no Ministério das Cidades, onde passou a atuar na formulação e execução de importantes projetos de infraestrutura e transporte em todo o Brasil. Sua atuação também fortaleceu o acesso dos municípios a programas e investimentos, ampliando oportunidades e facilitando a captação de recursos das esferas estadual e federal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section className="bg-background pb-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <GalleryCarousel items={GALLERY} showCaptions={false} />
        </div>
      </section>

      {/* CITAÇÃO */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-[1000px] px-4 md:px-10 text-center">
          <div className="text-6xl md:text-7xl font-serif text-primary leading-none">"</div>
          <blockquote className="text-2xl md:text-4xl font-black tracking-tight text-foreground leading-tight">
            “Nada melhor que uma ideia cujo o tempo chegou”.
          </blockquote>
          <div className="mt-6 text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground">
            DENIS ANDIA
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Biografia;
