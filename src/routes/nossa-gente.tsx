import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { CityCard } from "@/components/site/CityCard";
import cityImg from "@/assets/denis-city.jpg";
import peopleImg from "@/assets/denis-people.jpg";
import brasilImg from "@/assets/denis-brasil.jpg";

export const Route = createFileRoute("/nossa-gente")({
  head: () => ({
    meta: [
      { title: "O que Denis fez pela nossa gente" },
      { name: "description", content: "Comunidades, movimentos e pessoas atendidas pelo mandato de Denis." },
      { property: "og:title", content: "O que Denis fez pela nossa gente" },
      { property: "og:description", content: "Gente que conhece gente. Escuta e ação nas comunidades." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: NossaGente,
});

const GROUPS = [
  { title: "Trabalhadores rurais", subtitle: "Programa de apoio ao pequeno produtor", image: peopleImg },
  { title: "Mulheres", subtitle: "Casa da Mulher e capacitação", image: cityImg },
  { title: "Juventude", subtitle: "Primeiro emprego e cultura", image: brasilImg },
  { title: "Terceira idade", subtitle: "Centros de convivência", image: peopleImg },
  { title: "Autistas e famílias", subtitle: "Apoio, diagnóstico e inclusão", image: cityImg },
  { title: "Trabalhadores da saúde", subtitle: "Valorização e infraestrutura", image: brasilImg },
];

function NossaGente() {
  return (
    <Layout>
      <section className="bg-gradient-hero text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-20">
          <p className="text-sm font-bold uppercase tracking-widest text-accent">O que Denis fez por</p>
          <h1 className="mt-3 text-5xl md:text-6xl font-black">Nossa gente</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/85">
            Cada grupo, cada história. Conheça os programas e ações voltados para quem constrói o dia a dia.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 md:px-8 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((g) => (
            <CityCard key={g.title} {...g} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
