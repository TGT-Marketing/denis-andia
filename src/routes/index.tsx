import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { RegionMap } from "@/components/site/RegionMap";
import { NewsCarousel } from "@/components/site/NewsCarousel";
import cutout from "@/assets/denis-cutout.png";
import rallyBg from "@/assets/rally-bg.jpg";
import walkImg from "@/assets/denis-walk.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Denis Ferreira — Gente que conhece gente" },
      { name: "description", content: "Site oficial do candidato Denis Ferreira. Um novo jeito de fazer política em São Paulo e no Brasil." },
      { property: "og:title", content: "Denis Ferreira — Gente que conhece gente" },
      { property: "og:description", content: "Escuta, presença e resultado. Conheça o trabalho de Denis." },
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
      <section className="relative overflow-hidden bg-ink text-white" style={{ backgroundColor: "var(--ink)" }}>
        {/* backdrop */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url(${rallyBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/30 to-ink/60" style={{ background: "linear-gradient(to bottom, color-mix(in oklab, var(--ink) 75%, transparent), color-mix(in oklab, var(--ink) 20%, transparent), color-mix(in oklab, var(--ink) 65%, transparent))" }} />

        <div className="relative mx-auto max-w-[1400px] px-4 md:px-10 pt-32 md:pt-40 pb-0">
          <div className="relative flex justify-center min-h-[70vh] md:min-h-[85vh] items-end">
            {/* GIANT NAME BEHIND */}
            <h1 className="pointer-events-none absolute inset-x-0 top-6 md:top-8 flex justify-center">
              <span className="font-black tracking-tighter text-white leading-[0.8] text-[22vw] md:text-[18vw] select-none">
                DEN<span className="inline-block">IS</span>
              </span>
            </h1>
            {/* script overlay */}
            <span
              className="pointer-events-none absolute left-1/2 -translate-x-[45%] top-[38%] md:top-[42%] text-secondary text-4xl md:text-7xl"
              style={{ fontFamily: '"Brush Script MT", "Lucida Handwriting", cursive', color: "var(--brand-blue)", textShadow: "0 4px 30px rgba(0,0,0,.6)" }}
            >
              Ferreira
            </span>

            {/* CUTOUT PHOTO */}
            <img
              src={cutout}
              alt="Denis Ferreira"
              width={1200}
              height={1600}
              className="relative z-10 h-[60vh] md:h-[85vh] w-auto object-contain object-bottom"
            />
          </div>
        </div>

        {/* Color band */}
        <div className="relative">
          <div className="bg-accent">
            <div className="mx-auto max-w-[1400px] px-4 md:px-10 py-6 md:py-8 flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <div className="bg-secondary text-secondary-foreground px-8 py-6 md:py-8 shadow-brand">
                <p className="text-2xl md:text-3xl font-black leading-tight tracking-tight uppercase">
                  Gente que <br />
                  <span>conhece gente</span>
                </p>
              </div>
              <a
                href="#trabalho"
                className="inline-flex items-center rounded-full border-2 border-primary bg-transparent px-10 py-4 text-lg font-black uppercase tracking-wider text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Abrace o novo
              </a>
              <p className="md:ml-auto text-xs font-semibold text-accent-foreground/70 uppercase tracking-widest">
                #DenisFerreira · São Paulo
              </p>
            </div>
          </div>
          <div className="h-2 bg-primary" />
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
              alt="Denis Ferreira caminhando com apoiadores"
              width={1600}
              height={1200}
              loading="lazy"
              className="relative rounded-[1.5rem] shadow-brand w-full h-auto object-cover aspect-[4/5]"
            />
          </div>
          <div>
            <p className="text-xs font-bold text-primary uppercase tracking-[0.3em]">Sobre mim</p>
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
            <a
              href="#numeros"
              className="mt-8 inline-flex items-center rounded-full bg-primary px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-brand hover:opacity-90 transition"
            >
              Saiba mais
            </a>
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
