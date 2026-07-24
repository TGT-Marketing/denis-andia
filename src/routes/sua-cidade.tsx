import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { HeroVideo } from "@/components/site/HeroVideo";
import { ProjectCarousel } from "@/components/site/ProjectCarousel";
import cityImg from "@/assets/denis-city.jpg";
import peopleImg from "@/assets/denis-people.jpg";
import brasilImg from "@/assets/denis-brasil.jpg";
import walkImg from "@/assets/denis-walk.jpg";
import heroImg from "@/assets/denis-hero.jpg";
import rallyImg from "@/assets/rally-bg.jpg";

export const Route = createFileRoute("/sua-cidade")({
  head: () => ({
    meta: [
      { title: "Por Sua Cidade — Denis Andia" },
      { name: "description", content: "Legado de Denis Andia em Santa Bárbara d'Oeste: Fim da Favela, SUS Zerado e a melhor nota da educação." },
      { property: "og:title", content: "Por Sua Cidade — Denis Andia" },
      { property: "og:description", content: "Programas que transformaram Santa Bárbara d'Oeste." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: SuaCidade,
});

const SECTIONS = [
  {
    id: "legado",
    eyebrow: "01",
    title: "Legado em Santa Bárbara d'Oeste",
    text: "Três mandatos de gestão dedicada, colocando a cidade entre as referências do estado em qualidade de vida, saúde e educação.",
    images: [
      { src: cityImg, alt: "Santa Bárbara d'Oeste — vista da cidade" },
      { src: walkImg, alt: "Denis conversando com moradores" },
      { src: peopleImg, alt: "Ação comunitária" },
      { src: brasilImg, alt: "Obra pública" },
    ],
  },
  {
    id: "favela",
    eyebrow: "02",
    title: "Fim da Favela",
    text: "Programa habitacional que reassentou centenas de famílias, transformando áreas de risco em bairros dignos com infraestrutura completa.",
    images: [
      { src: peopleImg, alt: "Entrega de moradias" },
      { src: heroImg, alt: "Nova comunidade" },
      { src: cityImg, alt: "Bairro urbanizado" },
      { src: rallyImg, alt: "Cerimônia de entrega" },
    ],
  },
  {
    id: "sus",
    eyebrow: "03",
    title: "SUS Zerado",
    text: "Fila de espera zerada em consultas, exames e cirurgias eletivas — um marco na saúde pública municipal.",
    images: [
      { src: walkImg, alt: "Visita a UBS" },
      { src: brasilImg, alt: "Equipe de saúde" },
      { src: peopleImg, alt: "Atendimento à população" },
      { src: cityImg, alt: "Nova unidade" },
    ],
  },
  {
    id: "educacao",
    eyebrow: "04",
    title: "Melhor Nota da Educação",
    text: "Rede municipal reconhecida entre as melhores do estado nos principais indicadores, com valorização de professores e novas escolas.",
    images: [
      { src: heroImg, alt: "Escola municipal" },
      { src: peopleImg, alt: "Estudantes em sala" },
      { src: rallyImg, alt: "Formatura" },
      { src: cityImg, alt: "Investimento em educação" },
    ],
  },
] as const;

function SuaCidade() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative bg-ink text-white overflow-hidden" style={{ backgroundColor: "var(--ink)" }}>
        <div className="absolute inset-0 opacity-30">
          <img src={cityImg} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 pt-32 pb-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-accent">Por Sua Cidade</p>
            <h1 className="mt-4 text-5xl md:text-7xl font-black leading-none uppercase">
              Aqui, <br />
              <span className="text-accent">as pessoas</span>
              <br /> vêm primeiro.
            </h1>
            <p className="mt-6 max-w-xl text-white/85 text-lg">
              Uma gestão que não espera pedir. Conheça o trabalho que colocou Santa Bárbara d'Oeste
              como referência em saúde, educação e habitação.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <HeroVideo
                buttonLabel="Assista ao vídeo da cidade"
                modalTitle="O trabalho que transforma"
              />
              <Link
                to="/biografia"
                className="inline-flex items-center rounded-full border border-white/30 px-6 h-14 text-sm font-bold uppercase tracking-wider hover:bg-white/10 transition-colors"
              >
                Conheça a trajetória
              </Link>
            </div>
          </div>
          <div className="hidden md:block" />
        </div>
        <div className="grid grid-cols-3 h-3">
          <span style={{ backgroundColor: "var(--brand-green)" }} />
          <span style={{ backgroundColor: "var(--brand-yellow)" }} />
          <span style={{ backgroundColor: "var(--brand-blue)" }} />
        </div>
      </section>

      {/* PROJECT SECTIONS */}
      <div className="bg-background">
        {SECTIONS.map((sec, i) => (
          <section
            key={sec.id}
            id={sec.id}
            className={`py-20 ${i % 2 === 1 ? "bg-secondary/30" : ""}`}
          >
            <div className="mx-auto max-w-[1400px] px-6 md:px-12">
              <div className="grid gap-8 md:grid-cols-[auto_1fr] items-start mb-8">
                <span className="text-6xl md:text-7xl font-black text-primary/20 leading-none">
                  {sec.eyebrow}
                </span>
                <div>
                  <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
                    {sec.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-muted-foreground text-lg">{sec.text}</p>
                </div>
              </div>
              <ProjectCarousel images={sec.images.slice()} />
            </div>
          </section>
        ))}
      </div>
    </Layout>
  );
}
