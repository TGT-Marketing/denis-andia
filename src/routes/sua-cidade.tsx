import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { CityCard } from "@/components/site/CityCard";
import cityImg from "@/assets/denis-city.jpg";
import peopleImg from "@/assets/denis-people.jpg";
import brasilImg from "@/assets/denis-brasil.jpg";

export const Route = createFileRoute("/sua-cidade")({
  head: () => ({
    meta: [
      { title: "O que Denis fez pela sua cidade" },
      { name: "description", content: "Ações, obras e conquistas de Denis nas cidades do estado de São Paulo." },
      { property: "og:title", content: "O que Denis fez pela sua cidade" },
      { property: "og:description", content: "Cidade por cidade, o trabalho de Denis feito de perto." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: SuaCidade,
});

const CITIES = [
  { title: "Campinas", subtitle: "Saúde e mobilidade urbana", image: cityImg },
  { title: "Piracicaba", subtitle: "Educação e cultura", image: peopleImg },
  { title: "Sumaré", subtitle: "Segurança pública", image: brasilImg },
  { title: "Americana", subtitle: "Geração de empregos", image: cityImg },
  { title: "Limeira", subtitle: "Infraestrutura", image: peopleImg },
  { title: "Indaiatuba", subtitle: "Esporte e lazer", image: brasilImg },
  { title: "Jundiaí", subtitle: "Inovação e tecnologia", image: cityImg },
  { title: "Hortolândia", subtitle: "Programas sociais", image: peopleImg },
  { title: "Valinhos", subtitle: "Meio ambiente", image: brasilImg },
];

function SuaCidade() {
  return (
    <Layout>
      <PageHero
        eyebrow="O que Denis fez por"
        title="Sua cidade"
        description="Investimento, presença e resultado em cada município. Escolha uma cidade e assista ao vídeo."
      />
      <section className="mx-auto max-w-7xl px-4 md:px-8 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CITIES.map((c) => (
            <CityCard key={c.title} {...c} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="bg-gradient-hero text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-accent">{eyebrow}</p>
        <h1 className="mt-3 text-5xl md:text-6xl font-black">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-white/85">{description}</p>
      </div>
    </section>
  );
}
