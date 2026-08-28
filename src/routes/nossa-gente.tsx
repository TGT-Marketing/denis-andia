import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Play } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { RegionMap } from "@/components/site/RegionMap";
import { VideoModal } from "@/components/site/VideoModal";
import { GalleryCarousel } from "@/components/site/GalleryCarousel";
import people2 from "@/assets/people/denis-people-2.jpeg.asset.json";
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
  { image: people2.url },
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
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <Layout>
      <VideoModal
        open={videoOpen}
        onOpenChange={setVideoOpen}
        title="O que Denis fez por nossa gente"
        description="Conheça o trabalho de Denis pela nossa gente."
      />

      <section className="bg-[var(--brand-green)] text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-24 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-[var(--brand-yellow)]">
              <span className="text-[var(--brand-yellow)]">O QUE O DENIS FEZ</span>
            </p>
            <h1 className="mt-3 text-4xl md:text-6xl font-black leading-tight">Por nossa gente</h1>
            <p className="mt-5 max-w-xl text-base md:text-lg text-white">
              Líder regional, Denis Andia construiu uma relação de trabalho e confiança com o Governo do Estado de São Paulo e o Governo Federal. Seu trabalho abriu portas aos gestores, atuando diretamente na intermediação de recursos para obras e programas.
            </p>
          </div>
          <button
            onClick={() => setVideoOpen(true)}
            className="relative aspect-video w-full overflow-hidden rounded-3xl shadow-card group"
            aria-label="Reproduzir vídeo"
          >
            <img src={trabalhoImg} alt="Denis Andia" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--brand-yellow)] text-ink shadow-brand">
                <Play className="h-8 w-8 fill-current" />
              </span>
            </span>
          </button>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-[1400px] px-4 md:px-10 mb-8">
          <p className="text-xs font-bold text-primary uppercase tracking-[0.3em]">
            O TRABALHO JÁ CHEGOU!
          </p>
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
