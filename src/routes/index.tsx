import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Play } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { SPMap } from "@/components/site/SPMap";
import { NewsCarousel } from "@/components/site/NewsCarousel";
import { VideoModal } from "@/components/site/VideoModal";
import chapeuImg from "@/assets/denis-chapeu.png";
import meninaImg from "@/assets/denis-menina.png";
import obraImg from "@/assets/denis-obra.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Denis Andia — Gente que conhece gente" },
      { name: "description", content: "Site oficial de Denis Andia. Escuta, presença e resultado — um novo jeito de fazer política." },
      { property: "og:title", content: "Denis Andia — Gente que conhece gente" },
      { property: "og:description", content: "Abrace o novo. Conheça o trabalho de Denis pelas cidades, pelo Brasil e pela nossa gente." },
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
      <section
        className="relative overflow-hidden text-white"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, #103a2a 0%, #0a1e17 55%, #05100c 100%)",
        }}
      >
        <div className="relative mx-auto max-w-[1400px] px-4 md:px-10 pt-28 md:pt-32 pb-0">
          {/* Top bar: left phrase / right video button */}
          <div className="relative grid grid-cols-2 gap-6 md:gap-10 items-center min-h-[80px] md:min-h-[110px]">
            <div className="text-left">
              <p className="text-2xl md:text-4xl font-black uppercase tracking-tight text-accent leading-none">
                Abrace <span className="text-white">o novo</span>
              </p>
              <p className="mt-2 text-xs md:text-sm font-semibold tracking-[0.35em] uppercase text-white/70">
                #DenisAndia
              </p>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setVideoOpen(true)}
                className="group inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/5 backdrop-blur px-4 py-2 md:px-5 md:py-3 hover:bg-white/15 transition-colors"
              >
                <span className="flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-brand transition-transform group-hover:scale-105">
                  <Play className="h-5 w-5 fill-current" />
                </span>
                <span className="text-left leading-tight">
                  <span className="block text-[10px] md:text-xs uppercase tracking-[0.25em] text-white/70">
                    Assista
                  </span>
                  <span className="block text-sm md:text-base font-black uppercase tracking-wide">
                    A história do Denis
                  </span>
                </span>
              </button>
            </div>
          </div>

          {/* Photos row with soft gradient transition between them */}
          <div className="relative mt-8 md:mt-10">
            <div className="relative grid grid-cols-2 items-end min-h-[52vh] md:min-h-[72vh]">
              <div className="relative h-full flex items-end justify-center">
                <img
                  src={chapeuImg}
                  alt="Denis Andia dando a mão para o Sr. Chapéu"
                  className="relative z-10 h-[46vh] md:h-[70vh] w-auto object-contain object-bottom drop-shadow-2xl"
                  style={{
                    WebkitMaskImage:
                      "radial-gradient(ellipse at 70% 60%, #000 55%, transparent 90%)",
                    maskImage:
                      "radial-gradient(ellipse at 70% 60%, #000 55%, transparent 90%)",
                  }}
                />
              </div>

              {/* Center soft blend */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-40 md:w-64"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(16,58,42,0.9) 0%, rgba(10,30,23,0) 70%)",
                }}
              />

              <div className="relative h-full flex items-end justify-center">
                <img
                  src={meninaImg}
                  alt="Denis Andia com uma menina em evento"
                  className="relative z-10 h-[46vh] md:h-[70vh] w-auto object-contain object-bottom drop-shadow-2xl"
                  style={{
                    WebkitMaskImage:
                      "radial-gradient(ellipse at 30% 60%, #000 55%, transparent 90%)",
                    maskImage:
                      "radial-gradient(ellipse at 30% 60%, #000 55%, transparent 90%)",
                  }}
                />
              </div>
            </div>

            {/* Name reveal centered at hand-height */}
            <div className="pointer-events-none absolute inset-x-0 bottom-[10%] md:bottom-[14%] flex flex-col items-center">
              <h1 className="text-center leading-[0.85]">
                <span
                  className="block font-black tracking-tighter text-white text-[14vw] md:text-[9vw] animate-name-reveal"
                  style={{
                    background:
                      "linear-gradient(90deg, #FEEE02 0%, #ffffff 40%, #B9CEE8 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  DENIS
                </span>
                <span
                  className="block mt-1 md:mt-2 text-3xl md:text-6xl text-secondary"
                  style={{
                    fontFamily: '"Brush Script MT", "Lucida Handwriting", cursive',
                    color: "var(--brand-blue)",
                    textShadow: "0 4px 20px rgba(0,0,0,.5)",
                  }}
                >
                  Andia
                </span>
              </h1>
              <p className="mt-3 text-[10px] md:text-xs font-black tracking-[0.5em] uppercase text-white/70">
                Gente que conhece gente
              </p>
            </div>
          </div>
        </div>

        {/* Tri-color strip: verde / amarelo / azul */}
        <div className="relative mt-4">
          <div className="grid grid-cols-3">
            <div className="h-3 md:h-4" style={{ background: "var(--brand-green)" }} />
            <div className="h-3 md:h-4" style={{ background: "var(--brand-yellow)" }} />
            <div className="h-3 md:h-4" style={{ background: "var(--brand-blue)" }} />
          </div>
        </div>
      </section>

      <VideoModal
        open={videoOpen}
        onOpenChange={setVideoOpen}
        title="Gente que conhece gente"
        description="Denis Andia conta sua história."
      />

      {/* TRABALHO — SP Map */}
      <section id="trabalho" className="relative bg-background overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-4 md:px-10 pt-20 md:pt-28 pb-8 grid gap-10 lg:grid-cols-[1.15fr_1fr] items-end">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-black text-primary uppercase tracking-[0.3em]">N°01</span>
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                Emendas · São Paulo
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
              <span className="text-primary">O TRABALHO</span>
              <br />
              <span className="italic font-light text-foreground/70 text-3xl md:text-5xl normal-case tracking-tight">
                já chegou nas cidades.
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-muted-foreground">
              Emendas que viraram obra, escola, saúde e oportunidade. Denis leva o resultado
              onde a gente mora — sem palanque, com resultado.
            </p>
            <div className="mt-8 grid grid-cols-3 max-w-md gap-6 border-y border-border py-6">
              <Stat n="645" label="Municípios" />
              <Stat n="15" label="Regiões" />
              <Stat n="100%" label="de SP" />
            </div>
          </div>

          <div className="relative flex justify-end">
            <img
              src={obraImg}
              alt="Denis Andia de capacete inspecionando uma obra"
              className="h-[300px] md:h-[420px] w-auto object-contain drop-shadow-2xl"
            />
            <span className="absolute -bottom-2 right-6 rotate-[-4deg] rounded-full bg-primary px-5 py-2 text-primary-foreground text-sm font-black uppercase tracking-wider shadow-brand">
              Já mandou
            </span>
          </div>
        </div>

        <div className="mx-auto max-w-[1400px] px-4 md:px-10 pb-20">
          <SPMap />
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
              Banner rotativo com as notícias mais recentes. (Textos e fotos definitivos a enviar.)
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
