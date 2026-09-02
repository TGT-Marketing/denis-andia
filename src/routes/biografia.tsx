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
import heroVideo from "@/assets/gente-que-conhece-gente-video.mp4.asset.json";
import videoCover from "@/assets/gente-que-conhece-gente-cover.jpg.asset.json";
import bio00 from "@/assets/bio/bio-00.jpg.asset.json";
import bio01 from "@/assets/bio/bio-01.jpg.asset.json";
import bio02 from "@/assets/bio/bio-02.png.asset.json";
import bio03 from "@/assets/bio/bio-03.jpg.asset.json";
import bio04 from "@/assets/bio/bio-04.jpg.asset.json";
import bio06 from "@/assets/bio/bio-06.jpg.asset.json";
import bio07 from "@/assets/bio/bio-07.jpg.asset.json";
import bio08 from "@/assets/bio/bio-08.jpg.asset.json";

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
  { image: bio00.url },
  { image: bio01.url },
  { image: bio02.url },
  { image: bio03.url },
  { image: bio04.url },
  { image: bio06.url },
  { image: bio07.url },
  { image: bio08.url },
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
        videoSrc={heroVideo.url}
        portrait
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
              Do interior para todo o Brasil. Trabalho honesto, feito com amor.
            </p>
          </div>
          <div className="relative">
            <button
              onClick={() => setVideoOpen(true)}
              className="relative aspect-[9/16] w-full max-w-[420px] mx-auto overflow-hidden rounded-3xl shadow-card group"
              aria-label="Reproduzir vídeo"
            >
              <img src={videoCover.url} alt="Denis Andia" className="h-full w-full object-cover" />
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
      <section className="bg-background pt-20 pb-12">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div>
            <h2 className="mt-2 text-sm font-bold text-[var(--brand-green)] uppercase tracking-widest">A HISTÓRIA</h2>
            <div className="mt-4 space-y-4 text-lg text-muted-foreground">

              <p>Que o Denis foi um bom prefeito, muita gente sabe e até comenta.</p>
              <p>Que é dedicado e trabalha sério, basta ver tudo o que já fez.</p>
              <p>E quem conhece esse cara que olha no olho percebe logo: ele é gente simples e sabe ouvir.</p>
              <p>Mas é bom demais descobrir que sua história se parece com a de tanta gente.</p>
              <p>
                Denis nasceu e sempre viveu em Santa Bárbara d'Oeste. É o caçula de três irmãos. Sua mãe foi professora primária em escolas de sítio. Seu pai veio da roça ainda menino, estudou por correspondência e entrou jovem na empresa onde se aposentaria 30 anos depois.
              </p>
              <p>
                Em 1998, o Denis conheceu uma moça na praça da cidade. Começaram a namorar e depois se casaram. E de lá pra cá, são muitos anos ao lado da Roberta.
              </p>
              <p>
                O Denis estudou em escola pública e as professoras até hoje contam que ele não era de dar trabalho. Aos 17 anos, cursou matemática na Unicamp e depois formou-se em comunicação social na PUC Campinas. Antes mesmo de se formar, deu início à empresa que administra até os dias de hoje.
              </p>
              <p>Bom, já deu pra ver que a política veio bem depois na vida dele.</p>
              <p>
                Em 2012, venceu a primeira eleição que disputou para prefeito. Em 2016, tornou-se o primeiro prefeito reeleito da história de sua cidade. Ao concluir os oito anos de mandato, seu trabalho teve a aprovação de 82% dos barbarenses.
              </p>
              <p>
                Neste período foi duas vezes presidente da Região Metropolitana de Campinas, recebeu quatro vezes o prêmio de Prefeito Empreendedor do Sebrae e seis vezes de Prefeito VerdeAzul. Um trabalho reconhecido muito além de sua cidade.
              </p>
              <p>
                Foi tão longe que chegou a Brasilia, onde foi Secretario Nacional de Mobilidade Urbana. Trabalhou nas principais obras de transporte público do Brasil, com atenção especial aos investimentos realizados no Estado de São Paulo.
              </p>
              <p>
                Na última eleição para deputado federal, Denis foi eleito suplente com 75.082 votos - recebidos com muita gratidão. Com mais um pouquinho, a gente chegava direto à capital do Brasil.
              </p>
              <p>
                Agora, mais um capitulo está sendo escrito, com muita dedicação, determinação e Fé. Uma caminhada que a nossa gente já conhece muito bem, porque sempre caminhamos lado a lado.
              </p>
              <p>Por isso, aperta o passo que chegou a hora.</p>
              <p>A gente juntos vai fazer historia!</p>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section className="bg-background pb-6">
        <div className="mx-auto max-w-7xl px-4 md:px-8">

          <GalleryCarousel items={GALLERY} showCaptions={false} />
        </div>
      </section>

      {/* CITAÇÃO */}
      <section className="bg-background pt-0 pb-24">
        <div className="mx-auto max-w-[1000px] px-4 md:px-10 text-center">

          <div className="text-6xl md:text-7xl font-serif text-primary leading-none">"</div>
          <blockquote className="text-2xl md:text-4xl font-black tracking-tight text-foreground leading-tight">
            “Nada melhor do que uma ideia cujo o tempo chegou”.
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
