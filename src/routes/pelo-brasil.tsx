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
    id: "macroprojetos",
    eyebrow: "Nacional",
    title: "Macroprojetos",
    description:
      "Grandes iniciativas estruturantes que conectam cidades, fortalecem regiões e destravam o desenvolvimento do país. Projetos pensados para transformar a vida de milhões de brasileiros.",
    gallery: [
      { image: brasilImg, caption: "Integração regional" },
      { image: trabalhoImg, caption: "Obras estruturantes" },
      { image: cityImg, caption: "Desenvolvimento urbano" },
      { image: peopleImg, caption: "Impacto nacional" },
    ],
  },
  {
    id: "mobilidade",
    eyebrow: "Governo Federal",
    title: "Atuação como Secretário Nacional de Mobilidade",
    description:
      "À frente da Secretaria Nacional de Mobilidade, Denis coordenou políticas públicas para transporte urbano, mobilidade ativa e integração entre modais em todo o Brasil.",
    gallery: [
      { image: trabalhoImg, caption: "Reuniões técnicas em Brasília" },
      { image: chapeuImg, caption: "Visitas a projetos regionais" },
      { image: cityImg, caption: "Mobilidade urbana" },
      { image: brasilImg, caption: "Articulação com estados" },
    ],
  },
  {
    id: "sobre",
    eyebrow: "Trajetória",
    title: "Sobre Denis",
    description:
      "Uma vida dedicada ao serviço público, ao diálogo e à construção de pontes. Denis carrega no jeito de fazer política a marca de quem escuta, decide e entrega.",
    gallery: [
      { image: chapeuImg, caption: "Perto das pessoas" },
      { image: meninaImg, caption: "Escuta nas comunidades" },
      { image: peopleImg, caption: "Presença ativa" },
      { image: trabalhoImg, caption: "Trabalho contínuo" },
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
            <p className="text-sm font-bold uppercase tracking-widest text-accent">O que Denis fez</p>
            <h1 className="mt-3 text-5xl md:text-6xl font-black leading-tight">Pelo Brasil</h1>
            <p className="mt-5 max-w-xl text-lg text-white/85">
              De macroprojetos estruturantes à Secretaria Nacional de Mobilidade, a atuação de Denis leva o jeito de fazer do interior para todo o país.
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
