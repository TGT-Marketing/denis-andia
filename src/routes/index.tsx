import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { SaoPauloMap } from "@/components/site/SaoPauloMap";
import { NewsCarousel } from "@/components/site/NewsCarousel";
import { HeroSlideshow } from "@/components/site/HeroSlideshow";
import { HeroVideo } from "@/components/site/HeroVideo";
import cutoutAsset from "@/assets/denis-cutout.png.asset.json";
import meninaAsset from "@/assets/denis-menina.jpg.asset.json";
import chapeuAsset from "@/assets/denis-chapeu.jpg.asset.json";

const cutout = cutoutAsset.url;
const menina = meninaAsset.url;
const chapeu = chapeuAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Denis Andia — Gente que conhece gente" },
      { name: "description", content: "Site oficial de Denis Andia. Um novo jeito de fazer política em São Paulo." },
      { property: "og:title", content: "Denis Andia — Gente que conhece gente" },
      { property: "og:description", content: "Escuta, presença e resultado. Conheça o trabalho de Denis Andia." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <Layout transparentHeader>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-white min-h-screen flex flex-col" style={{ backgroundColor: "var(--ink)" }}>
        <HeroSlideshow
          images={[
            { src: chapeu, alt: "Denis cumprimentando morador" },
            { src: menina, alt: "Denis conversando com uma menina" },
          ]}
        />

        <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 pt-32 md:pt-40 pb-40 md:pb-48 flex-1 grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT — headline + name */}
          <div>
            <p
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight uppercase"
              style={{ animation: "fade-in 800ms ease-out both" }}
            >
              Abrace
              <br />
              <span className="text-accent">o novo</span>
            </p>

            <div
              className="mt-10 md:mt-14 pl-4 border-l-4 border-accent"
              style={{ animation: "fade-in 900ms 500ms ease-out both" }}
            >
              <p className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-white/80">
                Candidato
              </p>
              <p className="mt-1 text-4xl md:text-6xl font-black tracking-tight leading-none">
                Denis <span className="text-accent">Andia</span>
              </p>
            </div>
          </div>

          {/* RIGHT — video CTA */}
          <div
            className="md:justify-self-end"
            style={{ animation: "fade-in 900ms 700ms ease-out both" }}
          >
            <HeroVideo
              buttonLabel="Conheça a história de Denis Andia"
              modalTitle="Gente que conhece gente"
              modalDescription="Assista à história de Denis Andia."
            />
          </div>
        </div>

        {/* TRICOLOR BAND */}
        <div className="relative grid grid-cols-3 h-4 md:h-5">
          <span style={{ backgroundColor: "var(--brand-green)" }} />
          <span style={{ backgroundColor: "var(--brand-yellow)" }} />
          <span style={{ backgroundColor: "var(--brand-blue)" }} />
        </div>
      </section>

      {/* TRABALHO JÁ CHEGOU */}
      <section id="trabalho" className="relative bg-background">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 pt-20 md:pt-28 pb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-black text-primary uppercase tracking-[0.3em]">N°01</span>
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
              Estado de São Paulo
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
            <span className="text-primary">O trabalho</span>
            <br />
            <span className="italic font-light text-foreground/70 text-3xl md:text-5xl normal-case tracking-tight">
              já chegou —
            </span>
            <br />
            <span className="text-foreground">cidade por cidade.</span>
          </h2>
        </div>

        <div className="mx-auto max-w-[1400px] px-6 md:px-12 pb-24 grid gap-10 lg:grid-cols-[minmax(260px,420px)_1fr] items-center">
          {/* Left column — cutout with helmet */}
          <div className="relative order-2 lg:order-1">
            <div
              className="absolute inset-0 rounded-[2rem] rotate-[-4deg]"
              style={{ backgroundColor: "var(--brand-blue)" }}
            />
            <img
              src={cutout}
              alt="Denis Andia com capacete em uma obra"
              className="relative w-full h-auto object-contain drop-shadow-2xl"
              loading="lazy"
            />
          </div>
          {/* Right column — SP map */}
          <div className="order-1 lg:order-2">
            <SaoPauloMap />
          </div>
        </div>
      </section>

      {/* NOTÍCIAS — fundo branco */}
      <section id="noticias" className="bg-white py-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <p className="text-xs font-bold text-primary uppercase tracking-[0.3em]">Notícias</p>
              <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight text-foreground">
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
