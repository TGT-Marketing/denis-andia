import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import walkImg from "@/assets/denis-walk.jpg";
import peopleImg from "@/assets/denis-people.jpg";
import cityImg from "@/assets/denis-city.jpg";

export const Route = createFileRoute("/bio")({
  head: () => ({
    meta: [
      { title: "Bio — Denis Andia" },
      { name: "description", content: "A história de Denis Andia: origem, trajetória e valores." },
      { property: "og:title", content: "Bio — Denis Andia" },
      { property: "og:description", content: "A história por trás do candidato Denis Andia." },
      { property: "og:type", content: "profile" },
    ],
  }),
  component: Bio,
});

function Bio() {
  return (
    <Layout>
      <section className="bg-ink text-white py-20 md:py-28" style={{ backgroundColor: "var(--ink)" }}>
        <div className="mx-auto max-w-[1200px] px-4 md:px-10 grid gap-10 lg:grid-cols-[1fr_1.1fr] items-center">
          <img
            src={walkImg}
            alt="Denis Andia"
            className="w-full h-auto object-cover rounded-3xl aspect-[4/5] shadow-brand"
          />
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-accent">Bio</p>
            <h1 className="mt-4 text-5xl md:text-6xl font-black leading-[0.95]">
              A história do <span className="text-accent italic font-serif font-normal">Denis</span>
            </h1>
            <p className="mt-6 text-white/85">
              (Texto biográfico e fotos definitivos a enviar.) Placeholder para a linha do tempo
              da trajetória pessoal, familiar e política de Denis Andia.
            </p>
            <Link
              to="/sobre-mim"
              className="mt-8 inline-flex items-center rounded-full bg-primary px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-brand hover:opacity-90 transition"
            >
              Sobre o Denis
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-[1200px] px-4 md:px-10 grid gap-6 md:grid-cols-2">
          <figure className="rounded-3xl overflow-hidden shadow-card">
            <img src={peopleImg} alt="Denis com apoiadores" className="w-full h-full object-cover aspect-[4/3]" loading="lazy" />
          </figure>
          <figure className="rounded-3xl overflow-hidden shadow-card">
            <img src={cityImg} alt="Denis pela cidade" className="w-full h-full object-cover aspect-[4/3]" loading="lazy" />
          </figure>
        </div>
      </section>
    </Layout>
  );
}
