import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { VideoModal } from "@/components/site/VideoModal";
import cityImg from "@/assets/denis-city.jpg";
import peopleImg from "@/assets/denis-people.jpg";
import brasilImg from "@/assets/denis-brasil.jpg";
import chapeuImg from "@/assets/denis-chapeu.jpg";
import meninaImg from "@/assets/denis-menina.jpg";
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
  description: string;
  gallery: { image: string; caption: string }[];
};

const PROJETOS: Projeto[] = [
  {
    id: "transporte",
    eyebrow: "Pelo Brasil",
    title: "Marco Legal do Transporte Público",
    description:
      "Mais investimentos e possibilidade de tarifas mais acessíveis ao usuário.",
    gallery: [
      { image: brasilImg, caption: "Transporte público no Brasil" },
      { image: trabalhoImg, caption: "Planejamento de mobilidade" },
    ],
  },
  {
    id: "eletricos",
    eyebrow: "Pelo Brasil",
    title: "Ônibus elétricos e renovação das frotas",
    description:
      "Renovação das frotas em diversas cidades do País, com foco em sustentabilidade e modernização.",
    gallery: [
      { image: cityImg, caption: "Ônibus elétrico em operação" },
      { image: trabalhoImg, caption: "Mobilidade urbana sustentável" },
    ],
  },
  {
    id: "trem",
    eyebrow: "Pelo Brasil",
    title: "Trem Intercidades São Paulo – Campinas",
    description:
      "Apoio fundamental para a concretização do projeto que ligará as duas maiores regiões metropolitanas do estado.",
    gallery: [
      { image: brasilImg, caption: "Infraestrutura ferroviária" },
      { image: trabalhoImg, caption: "Desenvolvimento regional" },
    ],
  },
  {
    id: "rodoanel",
    eyebrow: "Pelo Brasil",
    title: "Trecho Norte do Rodoanel",
    description:
      "Conclusão de obra estratégica para o tráfego pesado e a logística nacional.",
    gallery: [
      { image: cityImg, caption: "Trecho Norte do Rodoanel" },
      { image: trabalhoImg, caption: "Logística e infraestrutura" },
    ],
  },
  {
    id: "brts",
    eyebrow: "Pelo Brasil",
    title: "BRTs de Campinas, Sorocaba e São José dos Campos",
    description:
      "Implantação de sistemas de transporte rápido por ônibus em polos regionais de São Paulo.",
    gallery: [
      { image: cityImg, caption: "BRT em operação" },
      { image: brasilImg, caption: "Transporte eficiente" },
    ],
  },
  {
    id: "metro",
    eyebrow: "Pelo Brasil",
    title: "Nove linhas do metrô paulistano",
    description:
      "Avanço na expansão e modernização da malha metroviária da capital paulista.",
    gallery: [
      { image: trabalhoImg, caption: "Obras do metrô" },
      { image: cityImg, caption: "Mobilidade na capital" },
    ],
  },
  {
    id: "vlt",
    eyebrow: "Pelo Brasil",
    title: "VLT Baixada Santista",
    description:
      "Expansão do Veículo Leve sobre Trilhos integrando as cidades do litoral.",
    gallery: [
      { image: brasilImg, caption: "VLT circulando" },
      { image: chapeuImg, caption: "Visita técnica ao litoral" },
    ],
  },
  {
    id: "tunel",
    eyebrow: "Pelo Brasil",
    title: "Túnel submerso Santos – Guarujá",
    description:
      "Projeto histórico de ligação entre as duas cidades, fundamental para o porto e para a população local.",
    gallery: [
      { image: brasilImg, caption: "Projeto do túnel" },
      { image: trabalhoImg, caption: "Desenvolvimento da Baixada" },
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
      <section className="bg-gradient-hero text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-20 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-accent">Pelo Brasil</p>
            <h1 className="mt-3 text-5xl md:text-6xl font-black leading-tight">PELO BRASIL</h1>
            <p className="mt-5 max-w-xl text-lg text-white/85 font-bold">
              Secretário Nacional de Mobilidade Urbana do Ministério das Cidades durante três anos, Denis Andia teve atuação fundamental na elaboração e avanço de importantes projetos de infraestrutura e transporte em todo o Brasil.
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
        </div>
        <div className="rounded-3xl overflow-hidden shadow-card">
          <img src={projeto.gallery[0]?.image} alt={projeto.title} className="h-72 w-full object-cover" />
        </div>
      </div>
      <GalleryCarousel items={projeto.gallery} />
    </article>
  );
}

function GalleryCarousel({ items }: { items: { image: string; caption: string }[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setSnaps(emblaApi.scrollSnapList());
    const onSel = () => setSelected(emblaApi.selectedScrollSnap());
    onSel();
    emblaApi.on("select", onSel);
    return () => {
      emblaApi.off("select", onSel);
    };
  }, [emblaApi]);

  return (
    <div className="relative">
      <div ref={emblaRef} className="overflow-hidden rounded-2xl">
        <div className="flex">
          {items.map((item, i) => (
            <div key={i} className="min-w-0 shrink-0 grow-0 basis-full sm:basis-1/2 lg:basis-1/3 pr-4">
              <figure className="rounded-2xl overflow-hidden bg-card shadow-card">
                <img src={item.image} alt={item.caption} loading="lazy" className="h-56 w-full object-cover" />
                <figcaption className="p-4 text-sm font-semibold text-foreground">{item.caption}</figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex gap-2">
          {snaps.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${i === selected ? "w-8 bg-primary" : "w-2 bg-muted-foreground/40"}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button onClick={prev} aria-label="Anterior" className="flex h-10 w-10 items-center justify-center rounded-full bg-card shadow-card hover:bg-accent hover:text-accent-foreground transition-colors">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={next} aria-label="Próximo" className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-brand hover:opacity-90 transition-opacity">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
