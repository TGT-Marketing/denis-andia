import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { CityCard } from "@/components/site/CityCard";
import cityImg from "@/assets/denis-city.jpg";
import peopleImg from "@/assets/denis-people.jpg";
import brasilImg from "@/assets/denis-brasil.jpg";

export const Route = createFileRoute("/pelo-brasil")({
  head: () => ({
    meta: [
      { title: "O que Denis fez pelo Brasil" },
      { name: "description", content: "Ações nacionais, projetos e conquistas do mandato de Denis pelo Brasil." },
      { property: "og:title", content: "O que Denis fez pelo Brasil" },
      { property: "og:description", content: "Presença nacional, compromisso com todo o país." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: PeloBrasil,
});

const STATES = [
  { title: "Minas Gerais", subtitle: "Parcerias no cerrado mineiro", image: brasilImg },
  { title: "Bahia", subtitle: "Cultura e turismo", image: peopleImg },
  { title: "Pernambuco", subtitle: "Agricultura familiar", image: cityImg },
  { title: "Rio de Janeiro", subtitle: "Segurança e mobilidade", image: brasilImg },
  { title: "Paraná", subtitle: "Educação técnica", image: peopleImg },
  { title: "Rio Grande do Sul", subtitle: "Reconstrução pós-enchentes", image: cityImg },
];

function PeloBrasil() {
  return (
    <Layout>
      <section className="bg-gradient-hero text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-20">
          <p className="text-sm font-bold uppercase tracking-widest text-accent">O que Denis fez</p>
          <h1 className="mt-3 text-5xl md:text-6xl font-black">Pelo Brasil</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/85">
            De Norte a Sul, o compromisso de Denis com um país mais justo, produtivo e humano.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 md:px-8 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STATES.map((s) => (
            <CityCard key={s.title} {...s} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
