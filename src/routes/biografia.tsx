import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import heroImg from "@/assets/denis-hero.jpg";
import walkImg from "@/assets/denis-walk.jpg";
import chapeuAsset from "@/assets/denis-chapeu.jpg.asset.json";
import meninaAsset from "@/assets/denis-menina.jpg.asset.json";
import trabalhoAsset from "@/assets/denis-trabalho.jpg.asset.json";
import rallyImg from "@/assets/rally-bg.jpg";
import peopleImg from "@/assets/denis-people.jpg";

export const Route = createFileRoute("/biografia")({
  head: () => ({
    meta: [
      { title: "Biografia — Denis Andia" },
      { name: "description", content: "Conheça a trajetória de Denis Andia: da infância ao serviço público, os marcos e as pessoas que o formaram." },
      { property: "og:title", content: "Biografia — Denis Andia" },
      { property: "og:description", content: "Uma história feita de gente, escuta e realizações." },
      { property: "og:type", content: "profile" },
    ],
  }),
  component: Biografia,
});

const TIMELINE = [
  {
    year: "1980s",
    title: "Infância e formação",
    text: "Nascido no interior paulista, cresceu entre a família e a comunidade — uma escola de escuta e serviço que carregaria para toda a vida.",
    image: chapeuAsset.url,
  },
  {
    year: "2000s",
    title: "Vida pública começa",
    text: "Primeiras atuações em movimentos comunitários, associações de bairro e projetos sociais na região.",
    image: peopleImg,
  },
  {
    year: "2009",
    title: "Prefeito de Santa Bárbara d'Oeste",
    text: "Assume a prefeitura pela primeira vez, iniciando um ciclo de transformação em saúde, educação e habitação.",
    image: walkImg,
  },
  {
    year: "2013",
    title: "Reeleição e consolidação",
    text: "Segunda gestão marcada pelo programa Fim da Favela e pela reorganização do SUS municipal.",
    image: trabalhoAsset.url,
  },
  {
    year: "2020",
    title: "Terceiro mandato",
    text: "Consolida Santa Bárbara d'Oeste entre as referências do estado em qualidade de vida e educação.",
    image: rallyImg,
  },
  {
    year: "2023",
    title: "Secretário Nacional de Mobilidade",
    text: "Convocado para o governo federal, coordena programas de mobilidade urbana em capitais e regiões metropolitanas.",
    image: meninaAsset.url,
  },
] as const;

const VALUES = [
  { title: "Escuta", text: "Política começa com ouvido no chão e olho no olho." },
  { title: "Presença", text: "Estar onde a vida acontece — na rua, na escola, no posto." },
  { title: "Resultado", text: "Entregar o que foi prometido, com transparência e método." },
  { title: "Coragem", text: "Enfrentar o difícil sem terceirizar responsabilidade." },
];

function Biografia() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative bg-ink text-white overflow-hidden" style={{ backgroundColor: "var(--ink)" }}>
        <div className="absolute inset-0 opacity-40">
          <img src={heroImg} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, color-mix(in oklab, var(--ink) 85%, transparent), transparent 70%)" }} />
        <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 pt-36 pb-24">
          <p className="text-xs font-bold tracking-[0.4em] uppercase text-accent">Biografia</p>
          <h1 className="mt-4 text-5xl md:text-8xl font-black leading-[0.9] uppercase">
            Uma vida <br />
            <span className="text-accent italic font-serif font-normal normal-case">construída</span>
            <br /> com gente.
          </h1>
          <p className="mt-8 max-w-2xl text-white/85 text-lg">
            De estudante em uma cidade do interior a Secretário Nacional de Mobilidade Urbana.
            Uma trajetória feita de escuta, entrega e amor pela terra que o formou.
          </p>
        </div>
        <div className="grid grid-cols-3 h-3">
          <span style={{ backgroundColor: "var(--brand-green)" }} />
          <span style={{ backgroundColor: "var(--brand-yellow)" }} />
          <span style={{ backgroundColor: "var(--brand-blue)" }} />
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-4xl px-6 md:px-12 text-center">
          <p className="text-xs font-bold tracking-[0.4em] uppercase text-primary">Quem é Denis</p>
          <h2 className="mt-4 text-3xl md:text-5xl font-black tracking-tight">
            Três mandatos como prefeito. Uma gestão nacional. <span className="text-primary italic font-serif font-normal">Um jeito só de fazer política:</span> de perto.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Denis Andia é, antes de tudo, um cara da cidade. Alguém que aprendeu que os problemas se
            resolvem chegando junto — e que política de verdade se faz olho no olho.
          </p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <div className="mb-12">
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-primary">Linha do tempo</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight">Marcos da trajetória</h2>
          </div>
          <ol className="relative border-l-2 border-primary/30 ml-4 md:ml-8 space-y-14">
            {TIMELINE.map((t) => (
              <li key={t.year} className="relative pl-8 md:pl-12">
                <span className="absolute -left-[11px] top-1 h-5 w-5 rounded-full bg-primary ring-4 ring-background" />
                <div className="grid md:grid-cols-[1fr_240px] gap-6 items-start">
                  <div>
                    <p className="text-sm font-black tracking-widest text-primary uppercase">{t.year}</p>
                    <h3 className="mt-1 text-2xl md:text-3xl font-black tracking-tight text-foreground">
                      {t.title}
                    </h3>
                    <p className="mt-3 text-muted-foreground text-base md:text-lg max-w-xl">{t.text}</p>
                  </div>
                  <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-card">
                    <img src={t.image} alt={t.title} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-primary">Valores</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight">O que nos move</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                className="rounded-2xl border border-border p-6 bg-card hover:shadow-brand transition-shadow"
              >
                <span className="text-4xl font-black text-primary/30">0{i + 1}</span>
                <h3 className="mt-3 text-xl font-black tracking-tight">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
