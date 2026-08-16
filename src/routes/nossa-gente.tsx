import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { RegionMap } from "@/components/site/RegionMap";
import { GalleryCarousel } from "@/components/site/GalleryCarousel";
import people1 from "@/assets/people/denis-people-1.jpeg.asset.json";
import people2 from "@/assets/people/denis-people-2.jpeg.asset.json";
import people3 from "@/assets/people/denis-people-3.jpeg.asset.json";
import people4 from "@/assets/people/denis-people-4.jpeg.asset.json";
import people5 from "@/assets/people/denis-people-5.jpeg.asset.json";
import people6 from "@/assets/people/denis-people-6.jpeg.asset.json";
import people7 from "@/assets/people/denis-people-7.jpeg.asset.json";
import people8 from "@/assets/people/denis-people-8.jpeg.asset.json";
import people9 from "@/assets/people/denis-people-9.jpeg.asset.json";
import people10 from "@/assets/people/denis-people-10.jpeg.asset.json";
import people11 from "@/assets/people/denis-people-11.jpeg.asset.json";
import people12 from "@/assets/people/denis-people-12.jpeg.asset.json";
import people13 from "@/assets/people/denis-people-13.jpeg.asset.json";

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
  { image: people1.url },
  { image: people2.url },
  { image: people3.url },
  { image: people4.url },
  { image: people5.url },
  { image: people6.url },
  { image: people7.url },
  { image: people8.url },
  { image: people9.url },
  { image: people10.url },
  { image: people11.url },
  { image: people12.url },
  { image: people13.url },
];

function NossaGente() {
  return (
    <Layout>
      <section className="bg-gradient-hero text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-24">
          <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-accent">O que Denis fez</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-black">Por nossa gente</h1>
          <div className="mt-8 max-w-3xl">
            <p className="text-lg md:text-2xl font-bold leading-tight">
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
          <GalleryCarousel items={GALLERY} showCaptions={false} />
        </div>
      </section>
    </Layout>
  );
}
