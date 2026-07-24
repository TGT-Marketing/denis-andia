import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { VideoModal } from "@/components/site/VideoModal";
import { TopicsCarousel } from "@/components/site/TopicsCarousel";
import { useState } from "react";
import { Play } from "lucide-react";
import cityImg from "@/assets/denis-city.jpg";
import peopleImg from "@/assets/denis-people.jpg";
import brasilImg from "@/assets/denis-brasil.jpg";
import walkImg from "@/assets/denis-walk.jpg";

export const Route = createFileRoute("/sua-cidade")({
  head: () => ({
    meta: [
      { title: "Por sua cidade — Denis Andia" },
      { name: "description", content: "O que Denis Andia fez pela sua cidade: legado em SBO, fim da favela, SUS zerado e a melhor nota da educação." },
      { property: "og:title", content: "Por sua cidade — Denis Andia" },
      { property: "og:description", content: "Vídeo do Denis e o legado em Santa Bárbara d'Oeste." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: SuaCidade,
});

const TOPICOS = [
  { title: "Fim da favela", description: "Programa de habitação que retirou famílias de áreas de risco.", image: cityImg },
  { title: "SUS zerado", description: "Fila de cirurgias eletivas zerada com gestão e investimento.", image: peopleImg },
  { title: "Melhor nota da educação", description: "SBO conquistou a melhor nota da região em avaliações públicas.", image: walkImg },
  { title: "Mobilidade e obras", description: "Ruas recapeadas, novos corredores e mais acesso.", image: brasilImg },
];

function SuaCidade() {
  const [open, setOpen] = useState(false);
  return (
    <Layout>
      <section className="bg-ink text-white py-16 md:py-24" style={{ backgroundColor: "var(--ink)" }}>
        <div className="mx-auto max-w-[1200px] px-4 md:px-10 grid gap-10 lg:grid-cols-[1.1fr_1fr] items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-accent">Por sua cidade</p>
            <h1 className="mt-4 text-5xl md:text-6xl font-black leading-[0.95]">
              Legado em <span className="text-accent italic font-serif font-normal">SBO</span>
            </h1>
            <p className="mt-6 max-w-xl text-white/85">
              Um breve resumo do trabalho de Denis pela sua cidade. (Texto definitivo a enviar.)
              Assista ao vídeo com as principais entregas para Santa Bárbara d'Oeste.
            </p>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="group relative overflow-hidden rounded-3xl aspect-video shadow-brand"
          >
            <img src={walkImg} alt="Vídeo Denis Andia" className="absolute inset-0 h-full w-full object-cover" />
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
            Nossas conquistas.
          </h2>
          <div className="mt-10">
            <TopicsCarousel topics={TOPICOS} />
          </div>
        </div>
      </section>

      <VideoModal open={open} onOpenChange={setOpen} title="Legado em SBO" description="Denis Andia conta o trabalho pela sua cidade." />
    </Layout>
  );
}
