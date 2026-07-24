import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { HeroVideo } from "@/components/site/HeroVideo";
import { ProjectCarousel } from "@/components/site/ProjectCarousel";
import cityImg from "@/assets/denis-city.jpg";
import peopleImg from "@/assets/denis-people.jpg";
import brasilImg from "@/assets/denis-brasil.jpg";
import walkImg from "@/assets/denis-walk.jpg";
import heroImg from "@/assets/denis-hero.jpg";
import rallyImg from "@/assets/rally-bg.jpg";

export const Route = createFileRoute("/pelo-brasil")({
  head: () => ({
    meta: [
      { title: "Pelo Brasil — Denis Andia" },
      { name: "description", content: "Macroprojetos, atuação como Secretário Nacional de Mobilidade e a visão de Denis Andia para o país." },
      { property: "og:title", content: "Pelo Brasil — Denis Andia" },
      { property: "og:description", content: "Do local ao nacional: presença e resultado." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: PeloBrasil,
});

const SECTIONS = [
  {
    id: "macro",
    eyebrow: "01",
    title: "Macroprojetos",
    text: "Grandes projetos estruturantes que conectam cidades, geram emprego e destravam o desenvolvimento regional.",
    images: [
      { src: brasilImg, alt: "Obra estruturante" },
      { src: cityImg, alt: "Infraestrutura viária" },
      { src: rallyImg, alt: "Assinatura de convênio" },
      { src: peopleImg, alt: "Trabalhadores em obra" },
    ],
  },
  {
    id: "mobilidade",
    eyebrow: "02",
    title: "Secretário Nacional de Mobilidade",
    text: "À frente da mobilidade urbana no país, coordenou programas de transporte coletivo e requalificação de corredores em capitais e regiões metropolitanas.",
    images: [
      { src: walkImg, alt: "Reunião de trabalho" },
      { src: heroImg, alt: "Denis em evento nacional" },
      { src: cityImg, alt: "Corredor urbano" },
      { src: brasilImg, alt: "Transporte coletivo" },
    ],
  },
  {
    id: "sobre",
    eyebrow: "03",
    title: "Sobre Denis",
    text: "Três mandatos como prefeito, gestão nacional na mobilidade urbana e uma trajetória construída na base do diálogo e da entrega.",
    images: [
      { src: heroImg, alt: "Retrato de Denis" },
      { src: peopleImg, alt: "Encontros com lideranças" },
      { src: walkImg, alt: "Denis nas ruas" },
      { src: rallyImg, alt: "Comício" },
    ],
  },
] as const;

function PeloBrasil() {
  return (
    <Layout>
      <section className="relative bg-ink text-white overflow-hidden" style={{ backgroundColor: "var(--ink)" }}>
        <div className="absolute inset-0 opacity-30">
          <img src={brasilImg} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 pt-32 pb-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-accent">Pelo Brasil</p>
            <h1 className="mt-4 text-5xl md:text-7xl font-black leading-none uppercase">
              De <span className="text-accent">Norte</span> a Sul, <br />
              o mesmo compromisso.
            </h1>
            <p className="mt-6 max-w-xl text-white/85 text-lg">
              Uma trajetória construída de perto, do município à esfera nacional, entregando obras
              que mudam a vida das pessoas.
            </p>
            <div className="mt-8">
              <HeroVideo buttonLabel="Assista à mensagem" modalTitle="O Brasil que queremos" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 h-3">
          <span style={{ backgroundColor: "var(--brand-green)" }} />
          <span style={{ backgroundColor: "var(--brand-yellow)" }} />
          <span style={{ backgroundColor: "var(--brand-blue)" }} />
        </div>
      </section>

      <div className="bg-background">
        {SECTIONS.map((sec, i) => (
          <section key={sec.id} id={sec.id} className={`py-20 ${i % 2 === 1 ? "bg-secondary/30" : ""}`}>
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
