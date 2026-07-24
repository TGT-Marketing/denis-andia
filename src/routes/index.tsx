import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Play } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { RegionMap } from "@/components/site/RegionMap";
import { VideoModal } from "@/components/site/VideoModal";
import { NewsCarousel } from "@/components/site/NewsCarousel";
import cutout from "@/assets/denis-menina-cutout.png";
import walkImg from "@/assets/denis-chapeu.jpg";
import bgAsset from "@/assets/02-capa-fundo.jpg.asset.json";

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
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, color-mix(in oklab, var(--ink) 55%, transparent), color-mix(in oklab, var(--ink) 25%, transparent), color-mix(in oklab, var(--ink) 70%, transparent))" }} />




        <div className="relative mx-auto max-w-[1400px] px-4 md:px-10 pt-28 md:pt-40 pb-0">
          <div className="relative flex justify-center min-h-[65vh] sm:min-h-[75vh] md:min-h-[92vh] items-end">
            {/* CUTOUT PHOTO — on top */}
            <img
              src={cutout}
              alt="Denis Andia"
              width={1600}
              height={2000}
              className="pointer-events-none relative z-20 h-[60vh] sm:h-[70vh] md:h-[92vh] w-auto object-contain object-bottom drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)] animate-fade-in"
            />

            {/* GIANT NAME BEHIND — DENIS on top, ANDIA tight below */}
            <div className="pointer-events-none absolute inset-x-0 bottom-[55%] md:bottom-[60%] z-10 flex flex-col items-center overflow-hidden">
              <span
                className="font-black tracking-tighter text-white leading-[0.8] text-[22vw] select-none"
                style={{ animation: "denis-rise 1.1s cubic-bezier(0.22,1,0.36,1) 0.15s both" }}
              >
                DENIS
              </span>
              <span
                className="font-black text-white leading-none select-none -mt-[1vw] md:-mt-[1.2vw]"
                style={{
                  fontSize: "clamp(1rem, 3.05vw, 3.5rem)",
                  letterSpacing: "0.55em",
                  paddingLeft: "0.55em",
                  animation: "andia-in 1s ease-out 0.9s both",
                }}
              >
                ANDIA
              </span>
            </div>
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


        {/* Color band */}
        <div className="relative">
          <div className="bg-accent">
            <div className="mx-auto max-w-[1400px] px-4 md:px-10 py-6 md:py-8 flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-10">
              <div className="bg-secondary text-secondary-foreground px-6 md:px-8 py-5 md:py-8 shadow-brand text-center md:text-left">
                <p className="text-xl sm:text-2xl md:text-3xl font-black leading-tight tracking-tight uppercase">
                  Gente que <br />
                  <span>conhece gente</span>
                </p>
              </div>
              <a
                href="#trabalho"
                className="inline-flex justify-center items-center rounded-full border-2 border-primary bg-transparent px-6 md:px-10 py-3 md:py-4 text-base md:text-lg font-black uppercase tracking-wider text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Abrace o novo
              </a>
              <button
                type="button"
                onClick={() => setVideoOpen(true)}
                className="group md:ml-auto flex items-center gap-3 md:gap-4 justify-center md:justify-start"
                aria-label="Reproduzir vídeo: Gente que conhece gente"
              >
                <span className="relative flex h-12 w-12 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-brand transition-transform duration-300 group-hover:scale-110">
                  <span className="absolute inset-0 rounded-full bg-primary/50 animate-ping" />
                  <Play className="relative h-4 w-4 md:h-6 md:w-6 fill-current" />
                </span>
                <span className="flex flex-col text-left min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-foreground/70">Assista</span>
                  <span className="text-xs md:text-base font-black uppercase leading-tight text-accent-foreground max-w-[220px]">
                    Conheça a história de Denis Andia
                  </span>
                </span>
              </button>

            </div>
          </div>
          <div className="flex h-2 md:h-3 w-full">
            <div className="flex-1 bg-primary" />
            <div className="flex-1 bg-secondary" />
            <div className="flex-1" style={{ backgroundColor: "var(--brand-blue)" }} />
          </div>
        </div>
      </section>

      {/* TRABALHO — Mapa */}
      <section id="trabalho" className="relative bg-background">
        <div className="mx-auto max-w-[1400px] px-4 md:px-10 pt-20 md:pt-28 pb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-black text-primary uppercase tracking-[0.3em]">N°01</span>
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
              Mapa do Impacto · SP
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
            <span className="text-primary">TRABALHO</span>
            <br />
            <span className="italic font-light text-foreground/70 text-3xl md:text-5xl normal-case tracking-tight">
              cidade por cidade,
            </span>
            <br />
            <span className="text-foreground">impacto real.</span>
          </h2>

          <div className="mt-8 grid grid-cols-3 max-w-md gap-6 border-y border-border py-6">
            <Stat n="645" label="Municípios" />
            <Stat n="15" label="Regiões" />
            <Stat n="100%" label="de SP" />
          </div>
        </div>

        <div className="mx-auto max-w-[1400px] px-4 md:px-10 pb-20">
          <RegionMap />
        </div>
      </section>

      {/* SOBRE MIM */}
      <section id="sobre" className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-[1400px] px-4 md:px-10 grid gap-12 lg:grid-cols-[1fr_1.1fr] items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-primary rounded-[2rem] rotate-[-3deg]" />
            <img
              src={walkImg}
              alt="Denis Andia caminhando com apoiadores"
              width={1600}
              height={1200}
              loading="lazy"
              className="relative rounded-[1.5rem] shadow-brand w-full h-auto object-cover aspect-[4/5]"
            />
          </div>
          <div>
            <p className="text-xs font-bold text-primary uppercase tracking-[0.3em]">Biografia</p>
            <h2 className="mt-4 text-4xl md:text-5xl font-black leading-[1.05] tracking-tight">
              Um coração inquieto
              <span className="block text-primary italic font-serif font-normal my-2">diante das dificuldades</span>
              não pode ficar parado.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Denis nasceu no interior paulista, cresceu vendo de perto as lutas da sua gente e
              transformou a vontade de servir em compromisso público. Hoje anda pelas cidades,
              escuta, atua e leva resultado — sem palanque, sem pose.
            </p>
            <Link
              to="/biografia"
              className="mt-8 inline-flex items-center rounded-full bg-primary px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-brand hover:opacity-90 transition"
            >
              Ver biografia
            </Link>
          </div>
        </div>
      </section>

      {/* NÚMEROS */}
      <section id="numeros" className="bg-ink text-white py-24" style={{ backgroundColor: "var(--ink)" }}>
        <div className="mx-auto max-w-[1400px] px-4 md:px-10">
          <p className="text-xs font-bold text-accent uppercase tracking-[0.3em]">Números que importam</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight">
            Trabalho que se vê, resultado que se sente.
          </h2>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <BigStat n="8" label="anos de mandato" />
            <BigStat n="1.2M" label="apoiadores" />
            <BigStat n="+320" label="emendas" />
            <BigStat n="+45" label="projetos de lei" />
          </div>
        </div>
      </section>

      {/* NOTÍCIAS */}
      <section id="noticias" className="bg-background py-24">
        <div className="mx-auto max-w-[1400px] px-4 md:px-10">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <p className="text-xs font-bold text-primary uppercase tracking-[0.3em]">Notícias</p>
              <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight">
                Meus <span className="text-primary italic font-serif font-normal">projetos</span>
                <br />e acontece agora
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Propostas que refletem a voz da população e ações que estão mudando o dia a dia.
            </p>
          </div>
          <NewsCarousel />
        </div>
      </section>
    </Layout>
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
