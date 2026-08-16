import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Play } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { RegionMap } from "@/components/site/RegionMap";
import { VideoModal } from "@/components/site/VideoModal";
import { NewsCarousel } from "@/components/site/NewsCarousel";
import bgAsset from "@/assets/hero-denis-senhor.jpg.asset.json";
import denisCapacete from "@/assets/denis-capacete.png.asset.json";

const heroBg = bgAsset.url;



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Denis Andia — Gente que conhece gente" },
      { name: "description", content: "Site oficial do candidato Denis Andia. Um novo jeito de fazer política em São Paulo e no Brasil." },
      { property: "og:title", content: "Denis Andia — Gente que conhece gente" },
      { property: "og:description", content: "Site oficial do candidato Denis Andia. Um novo jeito de fazer política em São Paulo e no Brasil." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <Layout transparentHeader>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-white" style={{ backgroundColor: "var(--ink)" }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />

        <div className="relative mx-auto max-w-[1400px] px-4 md:px-10 pt-28 md:pt-40 pb-8 md:pb-12">
          <div className="relative flex justify-center min-h-[55vh] sm:min-h-[65vh] md:min-h-[80vh] items-end">
          </div>

          {/* Buttons over hero image */}
          <div className="relative flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 pt-6 md:pt-10">
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="group flex items-center gap-3 md:gap-4 justify-center rounded-full border-2 border-white/80 bg-black/20 px-6 md:px-8 py-3 md:py-4 hover:bg-black/30 transition-colors"
              aria-label="Reproduzir vídeo: Gente que conhece gente"
            >
              <span className="relative flex h-10 w-10 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-brand transition-transform duration-300 group-hover:scale-110">
                <span className="absolute inset-0 rounded-full bg-primary/50 animate-ping" />
                <Play className="relative h-3 w-3 md:h-5 md:w-5 fill-current" />
              </span>
              <span className="text-sm md:text-xl font-black uppercase leading-tight tracking-tight text-white">
                Gente que conhece gente
              </span>
            </button>
          </div>
        </div>

        <VideoModal
          open={videoOpen}
          onOpenChange={setVideoOpen}
          title="Gente que conhece gente"
          description="Conheça a história de Denis Andia"
        />

        {/* keyframes local */}
        <style>{`
          @keyframes denis-rise {
            0%   { transform: translateY(60%); opacity: 0; }
            60%  { opacity: 1; }
            100% { transform: translateY(0);   opacity: 1; }
          }
          @keyframes andia-in {
            0%   { opacity: 0; transform: translateX(calc(-50% - 8vw)) rotate(-6deg) scale(0.85); }
            100% { opacity: 1; transform: translateX(calc(-50% - 8vw)) rotate(-6deg) scale(1); }
          }
        `}</style>

        {/* Tricolor bar */}
        <div className="flex h-2 md:h-3 w-full relative">
          <div className="flex-1 bg-primary" />
          <div className="flex-1 bg-accent" />
          <div className="flex-1 bg-brand-blue-dark" />
        </div>
      </section>

      {/* TRABALHO — Mapa */}
      <section id="trabalho" className="relative bg-background overflow-hidden">
        <div className="w-full px-2 md:px-6 pt-16 md:pt-24 pb-6 md:pb-8">
          {/* Título gigante ao fundo */}
          <h2 className="relative z-10 text-center lg:text-left font-black uppercase tracking-tighter leading-[0.95] text-[clamp(2rem,8vw,5rem)] px-4">
            <span className="text-primary">O TRABALHO</span>{" "}
            <span className="text-foreground">JÁ CHEGOU!</span>
          </h2>

          {/* Mapa ocupando a tela toda, com a foto surgindo por trás à direita */}
          <div className="relative mt-2 md:mt-[-4rem] w-full flex flex-col md:block overflow-hidden md:overflow-visible min-h-[500px] md:min-h-0">
            {/* Mapa: No mobile ele fica MUITO grande, width > 100% e centralizado com overflow lateral */}
            <div className="relative z-0 w-[160%] left-[-30%] md:w-full md:left-0 scale-[1.3] md:scale-[1.35] lg:scale-[1.45] transition-transform duration-500 order-1 md:order-none mt-8 md:mt-0">
              <RegionMap mapOnly />
            </div>

            {/* Denis: No mobile à esquerda, grande e sobreposto ao mapa */}
            <div className="absolute z-10 bottom-[10%] left-[-15%] md:bottom-[20%] lg:bottom-[25%] md:left-[2%] w-[85%] md:w-[35%] lg:w-[28%] max-w-[580px] pointer-events-none md:pointer-events-auto">
              <img
                src={denisCapacete.url}
                alt="Denis Andia segurando capacete de obra"
                loading="lazy"
                className="w-full h-auto object-contain object-bottom drop-shadow-2xl"
                style={{
                  maskImage: 'linear-gradient(to right, black 85%, transparent 100%), linear-gradient(to top, transparent 0%, black 15%)',
                  WebkitMaskImage: 'linear-gradient(to right, black 85%, transparent 100%), linear-gradient(to top, transparent 0%, black 15%)',
                  maskComposite: 'intersect',
                  WebkitMaskComposite: 'source-in'
                }}
              />
            </div>
          </div>

          <div className="relative z-20 mt-6 flex flex-wrap gap-3 justify-center lg:justify-start lg:pl-6">
            <Legend color="#FEF08A" label="RMC — Região Metropolitana de Campinas" />
            <Legend color="#86EFAC" label="RMP — Região Metropolitana de Piracicaba" />
            <Legend color="#B9CEE8" label="Demais Regiões" />
          </div>

        </div>
      </section>







      {/* NOTÍCIAS */}
      <section id="noticias" className="bg-background pt-16 pb-16 md:pt-24 md:pb-20">
        <div className="mx-auto max-w-[1400px] px-4 md:px-10">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <h2 className="relative z-10 font-black uppercase tracking-tighter leading-[0.85] text-[clamp(2rem,6vw,5rem)]">
                <span className="text-foreground">ACONTECEU E É</span>{" "}
                <span className="text-primary">NOTÍCIA</span>
              </h2>
            </div>
          </div>
          <NewsCarousel />
        </div>
      </section>
    </Layout>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground">
      <span className="h-3 w-3 rounded-sm" style={{ background: color }} />
      {label}
    </span>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <p className="text-3xl md:text-4xl font-black text-primary">{n}</p>
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mt-1">{label}</p>
    </div>
  );
}


function BigStat({ n, label }: { n: string; label: string }) {
  return (
    <div className="border-t-2 border-accent pt-4">
      <p className="text-5xl md:text-6xl font-black text-accent leading-none">{n}</p>
      <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-white/70">{label}</p>
    </div>
  );
}
