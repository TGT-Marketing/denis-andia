import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { VideoModal } from "@/components/site/VideoModal";
import { TopicsCarousel } from "@/components/site/TopicsCarousel";
import { useState } from "react";
import { Play } from "lucide-react";
import brasilImg from "@/assets/denis-brasil.jpg";
import peopleImg from "@/assets/denis-people.jpg";
import cityImg from "@/assets/denis-city.jpg";
import walkImg from "@/assets/denis-walk.jpg";

export const Route = createFileRoute("/pelo-brasil")({
  head: () => ({
    meta: [
      { title: "Pelo Brasil — Denis Andia" },
      { name: "description", content: "Macros de projetos e a atuação de Denis Andia como Secretário Nacional de Mobilidade." },
      { property: "og:title", content: "Pelo Brasil — Denis Andia" },
      { property: "og:description", content: "Presença nacional, compromisso com todo o país." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: PeloBrasil,
});

const TOPICOS = [
  { title: "Macros de projetos", description: "Programas estruturantes com impacto nacional.", image: brasilImg },
  { title: "Secretário Nacional de Mobilidade", description: "Coordenação de políticas de mobilidade urbana em todo o país.", image: peopleImg },
  { title: "Parcerias federais", description: "Recursos e convênios articulados com o governo federal.", image: cityImg },
];

function PeloBrasil() {
  const [open, setOpen] = useState(false);
  return (
    <Layout>
      <section className="bg-ink text-white py-16 md:py-24" style={{ backgroundColor: "var(--ink)" }}>
        <div className="mx-auto max-w-[1200px] px-4 md:px-10 grid gap-10 lg:grid-cols-[1.1fr_1fr] items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-accent">Pelo Brasil</p>
            <h1 className="mt-4 text-5xl md:text-6xl font-black leading-[0.95]">
              Presença <span className="text-accent italic font-serif font-normal">nacional</span>
            </h1>
            <p className="mt-6 max-w-xl text-white/85">
              Um breve resumo da atuação de Denis pelo Brasil. (Texto definitivo a enviar.)
              Assista ao vídeo com os principais projetos e resultados.
            </p>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="group relative overflow-hidden rounded-3xl aspect-video shadow-brand"
          >
            <img src={brasilImg} alt="Vídeo Denis Andia pelo Brasil" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-brand transition-transform group-hover:scale-110">
                <Play className="h-8 w-8 fill-current" />
              </span>
            </span>
          </button>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-[1400px] px-4 md:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Tópicos</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight">
            Macros de projetos.
          </h2>
          <div className="mt-10">
            <TopicsCarousel topics={TOPICOS} />
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 items-center">
            <img src={walkImg} alt="Denis em agenda nacional" className="rounded-3xl shadow-card w-full h-auto object-cover aspect-[4/3]" loading="lazy" />
            <div>
              <h3 className="text-3xl md:text-4xl font-black tracking-tight">
                Enquanto Secretário Nacional de Mobilidade
              </h3>
              <p className="mt-4 text-muted-foreground">
                Coordenou políticas públicas com foco em transporte urbano, integração
                regional e infraestrutura para as cidades brasileiras.
              </p>
            </div>
          </div>
        </div>
      </section>

      <VideoModal open={open} onOpenChange={setOpen} title="Pelo Brasil" description="Atuação nacional de Denis Andia." />
    </Layout>
  );
}
