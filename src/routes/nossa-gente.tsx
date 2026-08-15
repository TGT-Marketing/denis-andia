import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { RegionMap } from "@/components/site/RegionMap";
import { GalleryCarousel } from "@/components/site/GalleryCarousel";
import cityImg from "@/assets/denis-city.jpg";
import peopleImg from "@/assets/denis-people.jpg";
import brasilImg from "@/assets/denis-brasil.jpg";
import chapeuImg from "@/assets/denis-chapeu.jpg";
import trabalhoImg from "@/assets/denis-trabalho.jpg";

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

const GALLERY = [
  { image: peopleImg, caption: "Denis ouvindo a nossa gente" },
  { image: chapeuImg, caption: "Presença nas comunidades" },
  { image: trabalhoImg, caption: "Diálogo constante" },
  { image: cityImg, caption: "Liderança regional" },
  { image: brasilImg, caption: "Intermediação de recursos" },
];

function NossaGente() {
  return (
    <Layout>
      <section className="bg-gradient-hero text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-20">
          <p className="text-sm font-bold uppercase tracking-widest text-accent">O que Denis fez</p>
          <h1 className="mt-3 text-5xl md:text-6xl font-black">Por nossa gente</h1>
          <div className="mt-8 max-w-3xl">
            <p className="text-xl md:text-2xl font-bold leading-tight">
              Líder regional, Denis Andia construiu uma relação de trabalho e confiança em esferas superiores, como o Governo do Estado de São Paulo e o Governo Federal. Seu trabalho abriu portas aos gestores, atuando diretamente na intermediação de recursos para obras e programas.
            </p>
            <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-8 text-lg text-white/90 font-medium">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> Postos de saúde</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> Escolas</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> Habitação</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> Estações de tratamento de água e de esgoto</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> Pavimentações e recapeamentos</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> Aneis viários</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> Pontes e viadutos</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> Iluminação pública</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> Auxílio às entidades</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-[1400px] px-4 md:px-10 mb-8">
          <p className="text-xs font-bold text-primary uppercase tracking-[0.3em]">O Trabalho Já Chegou</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight">
            Escolha uma região no mapa
          </h2>
        </div>
        <div className="mx-auto max-w-[1400px] px-4 md:px-10">
          <RegionMap />
        </div>
      </section>

      <section className="bg-background pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <GalleryCarousel items={GALLERY} />
        </div>
      </section>
    </Layout>
  );
}
