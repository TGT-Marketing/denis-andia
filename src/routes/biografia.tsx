import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import walkAsset from "@/assets/denis-chapeu.jpg";
import rallyBgAsset from "@/assets/denis-menina.jpg";
import cutoutAsset from "@/assets/denis-trabalho.jpg";
import cityImg from "@/assets/denis-city.jpg";
import peopleImg from "@/assets/denis-people.jpg";
import brasilImg from "@/assets/denis-brasil.jpg";

const walkImg = walkAsset;
const rallyBg = rallyBgAsset;
const cutout = cutoutAsset;

export const Route = createFileRoute("/biografia")({
  head: () => ({
    meta: [
      { title: "Biografia — Denis Andia" },
      { name: "description", content: "A história, a linha do tempo e as conquistas de Denis Andia — do interior paulista à atuação nacional." },
      { property: "og:title", content: "Biografia — Denis Andia" },
      { property: "og:description", content: "Conheça a trajetória de Denis Andia em fotos, marcos e histórias." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Biografia,
});

const TIMELINE = [
  { year: "1970", title: "Origem no interior", text: "Nasce em uma família de trabalhadores no interior paulista, onde aprende o valor do esforço e do cuidado com o próximo." },
  { year: "1990", title: "Militância comunitária", text: "Começa a atuar em movimentos de bairro, associações e coletivos, ouvindo de perto as demandas da população." },
  { year: "2005", title: "Primeiro mandato", text: "Eleito para sua primeira função pública, leva ao parlamento a voz das cidades do interior." },
  { year: "2013", title: "Prefeito de Santa Bárbara d'Oeste", text: "Assume a prefeitura e entrega marcos históricos: Fim da Favela, SUS Zerado e a melhor nota da educação." },
  { year: "2019", title: "Secretário Nacional de Mobilidade", text: "À frente da secretaria, coordena políticas de mobilidade urbana e integração entre modais em todo o país." },
  { year: "Hoje", title: "Presente nas ruas", text: "Segue caminhando, escutando e transformando — perto de gente, com trabalho honesto." },
];

const NUMEROS = [
  { n: "645", l: "Municípios alcançados" },
  { n: "+120", l: "Projetos entregues" },
  { n: "15", l: "Regiões atendidas" },
  { n: "20+", l: "Anos de serviço público" },
];

function Biografia() {
  return (
    <Layout transparentHeader>
      {/* HERO */}
      <section className="relative overflow-hidden text-white" style={{ backgroundColor: "var(--ink)" }}>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${rallyBg})` }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, color-mix(in oklab, var(--ink) 80%, transparent), color-mix(in oklab, var(--ink) 40%, transparent), var(--ink))" }}
        />
        <div className="relative mx-auto max-w-[1400px] px-4 md:px-10 pt-40 pb-24 grid gap-10 lg:grid-cols-[1.1fr_1fr] items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-accent">Biografia</p>
            <h1 className="mt-4 text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">
              A história
              <span className="block text-accent italic font-serif font-normal my-2">de um jeito</span>
              de fazer política.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/85">
              Do interior paulista ao Brasil. Uma trajetória construída ouvindo, andando e entregando — com quem faz o país acontecer todos os dias.
            </p>
          </div>
          <div className="relative hidden lg:block">
            <img src={cutout} alt="Denis Andia" className="w-full h-auto object-contain drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-10 grid gap-14 lg:grid-cols-[1fr_1.1fr] items-center">
          <div className="relative">
            <img
              src={walkImg}
              alt="Denis Andia"
              className="relative rounded-[1.5rem] shadow-brand w-full h-auto object-cover aspect-[4/5]"
            />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">A história</p>
            <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tight">
              De onde vem
              <span className="block text-primary italic font-serif font-normal my-1">esse jeito.</span>
            </h2>
            <div className="mt-6 space-y-5 text-lg text-muted-foreground">
              <p>
                Denis nasceu no interior paulista, filho de trabalhadores que ensinaram, no dia a dia, o valor da palavra dada e do esforço honesto. Aprendeu cedo que política é, antes de tudo, cuidado com as pessoas.
              </p>
              <p>
                Militou em movimentos comunitários, foi líder de bairro e vereador antes de assumir a prefeitura de Santa Bárbara d'Oeste — cidade que transformou com marcos históricos em habitação, saúde e educação.
              </p>
              <p>
                Depois, levou essa forma de fazer para o país inteiro, como Secretário Nacional de Mobilidade. Segue com a mesma bandeira de sempre: gente que conhece gente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LINHA DO TEMPO */}
      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Linha do tempo</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight">
            Marcos de uma
            <span className="text-primary italic font-serif font-normal"> jornada.</span>
          </h2>

          <ol className="relative mt-14 border-l-2 border-primary/30 pl-8 space-y-10">
            {TIMELINE.map((item) => (
              <li key={item.year} className="relative">
                <span className="absolute -left-[42px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-brand">
                  <span className="h-2 w-2 rounded-full bg-primary-foreground" />
                </span>
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="text-2xl md:text-3xl font-black text-primary">{item.year}</span>
                  <h3 className="text-xl md:text-2xl font-black text-foreground">{item.title}</h3>
                </div>
                <p className="mt-2 text-base md:text-lg text-muted-foreground max-w-3xl">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* GALERIA */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-[1400px] px-4 md:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Fotos</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight">
            Instantes
            <span className="text-primary italic font-serif font-normal"> da caminhada.</span>
          </h2>

          <div className="mt-12 grid gap-4 md:gap-6 grid-cols-2 md:grid-cols-4 md:grid-rows-2 md:h-[560px]">
            <figure className="relative overflow-hidden rounded-2xl shadow-card col-span-2 md:col-span-2 md:row-span-2 h-56 md:h-auto">
              <img src={rallyBg} alt="Denis com apoiadores" className="h-full w-full object-cover" />
            </figure>
            <figure className="relative overflow-hidden rounded-2xl shadow-card h-40 md:h-auto">
              <img src={walkImg} alt="Denis nas ruas" className="h-full w-full object-cover" />
            </figure>
            <figure className="relative overflow-hidden rounded-2xl shadow-card h-40 md:h-auto">
              <img src={cutout} alt="Denis em campanha" className="h-full w-full object-cover" />
            </figure>
            <figure className="relative overflow-hidden rounded-2xl shadow-card h-40 md:h-auto">
              <img src={cityImg} alt="Cidade" className="h-full w-full object-cover" />
            </figure>
            <figure className="relative overflow-hidden rounded-2xl shadow-card h-40 md:h-auto">
              <img src={peopleImg} alt="Pessoas" className="h-full w-full object-cover" />
            </figure>
          </div>
        </div>
      </section>

      {/* NÚMEROS */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="mx-auto max-w-[1200px] px-4 md:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.3em] opacity-80">Números</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight">
            Uma trajetória em dados.
          </h2>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {NUMEROS.map((n) => (
              <div key={n.l} className="border-t-2 border-primary-foreground/30 pt-4">
                <div className="text-5xl md:text-6xl font-black leading-none">{n.n}</div>
                <div className="mt-2 text-sm font-bold uppercase tracking-wider opacity-90">{n.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CITAÇÃO */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-[1000px] px-4 md:px-10 text-center">
          <div className="text-6xl md:text-7xl font-serif text-primary leading-none">"</div>
          <blockquote className="text-2xl md:text-4xl font-black tracking-tight text-foreground leading-tight">
            Política de verdade se faz perto de gente. É andando, ouvindo e entregando que a gente muda a vida das pessoas.
          </blockquote>
          <div className="mt-6 text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground">
            Denis Andia
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-white" style={{ backgroundColor: "var(--ink)" }}>
        <div className="mx-auto max-w-[1000px] px-4 md:px-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Vamos juntos <span className="text-accent italic font-serif font-normal">abraçar o novo?</span>
          </h2>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              to="/sua-cidade"
              className="inline-flex items-center rounded-full bg-primary px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-brand hover:opacity-90 transition"
            >
              Ver trabalho por cidade
            </Link>
            <Link
              to="/pelo-brasil"
              className="inline-flex items-center rounded-full border-2 border-white/80 px-8 py-3.5 text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-ink transition"
            >
              Pelo Brasil
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Biografia;
