import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { RegionMap } from "@/components/site/RegionMap";
import { NewsCarousel } from "@/components/site/NewsCarousel";
import heroImg from "@/assets/denis-hero.jpg";
import cityImg from "@/assets/denis-city.jpg";
import peopleImg from "@/assets/denis-people.jpg";
import brasilImg from "@/assets/denis-brasil.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Denis — Gente que conhece gente" },
      { name: "description", content: "Site oficial do candidato Denis. Conheça o trabalho pelo estado, pelas pessoas e pelo Brasil." },
      { property: "og:title", content: "Denis — Gente que conhece gente" },
      { property: "og:description", content: "Um novo jeito de fazer política: com escuta, presença e resultado." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const highlights = [
    { to: "/sua-cidade", label: "Sua cidade", image: cityImg },
    { to: "/nossa-gente", label: "Nossa gente", image: peopleImg },
    { to: "/pelo-brasil", label: "Pelo Brasil", image: brasilImg },
  ] as const;

  return (
    <Layout>
      {/* HERO */}
      <section id="hero" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-95" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-8 pt-16 pb-24 grid gap-10 lg:grid-cols-2 items-center">
          <div className="text-white">
            <span className="inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent-foreground">
              Campanha oficial
            </span>
            <h1 className="mt-6 text-5xl md:text-7xl font-black leading-[0.95]">
              Gente que <br />
              <span className="text-accent">conhece gente</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/85">
              Denis anda pelas ruas, escuta as pessoas e transforma cada história em ação.
              Um mandato feito de perto, cidade por cidade.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#trabalho"
                className="inline-flex items-center rounded-full bg-accent px-7 py-3.5 text-base font-bold text-accent-foreground shadow-brand hover:opacity-90 transition"
              >
                Abrace o novo
              </a>
              <a
                href="#noticias"
                className="inline-flex items-center rounded-full border-2 border-white/40 px-7 py-3.5 text-base font-bold text-white hover:bg-white/10 transition"
              >
                Ver notícias
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-accent/30 rounded-[3rem] rotate-3" />
            <img
              src={heroImg}
              alt="Denis, candidato"
              width={1600}
              height={1200}
              className="relative rounded-[2.5rem] shadow-brand w-full h-auto object-cover aspect-[4/5]"
            />
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS - "O que Denis fez por" */}
      <section className="mx-auto max-w-7xl px-4 md:px-8 -mt-12 relative z-10">
        <div className="grid gap-5 md:grid-cols-3">
          {highlights.map((h) => (
            <Link
              key={h.to}
              to={h.to}
              className="group relative overflow-hidden rounded-2xl shadow-card"
            >
              <img
                src={h.image}
                alt={h.label}
                loading="lazy"
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-accent">
                  O que Denis fez por
                </p>
                <h3 className="mt-1 text-2xl font-bold text-white">{h.label}</h3>
                <span className="mt-3 inline-flex items-center text-sm font-semibold text-white group-hover:text-accent">
                  Conheça →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* TRABALHO */}
      <section id="trabalho" className="mx-auto max-w-7xl px-4 md:px-8 py-24">
        <RegionMap />
      </section>

      {/* NOTICIAS */}
      <section id="noticias" className="bg-secondary/50 py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">Notícias</p>
              <h2 className="mt-2 text-4xl md:text-5xl font-bold">Acontece agora</h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Fique por dentro das ações, agendas e conquistas do mandato.
            </p>
          </div>
          <NewsCarousel />
        </div>
      </section>
    </Layout>
  );
}
