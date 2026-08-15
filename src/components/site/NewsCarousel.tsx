import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback } from "react";
import news1Asset from "@/assets/news/news_1.jpeg.asset.json";
import news2Asset from "@/assets/news/news_2.jpeg.asset.json";
import news3Asset from "@/assets/news/news_3.jpg.asset.json";
import news4Asset from "@/assets/news/news_4.jpg.asset.json";

const NEWS = [
  {
    image: news1Asset.url,
    date: "Eleições 2026",
    title: "Eleições 2026: Denis Andia desponta como principal nome da região",
    excerpt: "Nas eleições deste ano, Santa Bárbara d’Oeste, Americana e região podem voltar a ter um Deputado Federal em Brasília. Com poucos candidatos locais na disputa, destaca-se o nome do ex-prefeito Denis Andia.",
  },
  {
    image: news2Asset.url,
    date: "Mandato Real",
    title: "Denis Andia defende “mandato real” e coloca experiência a serviço dos Municípios",
    excerpt: "Pré-candidato a deputado federal, Denis Andia apresenta uma proposta baseada na proximidade com a população e na busca por soluções concretas para os desafios do dia a dia.",
  },
  {
    image: news3Asset.url,
    date: "Mobilidade Urbana",
    title: "Denis Andia trabalha por um transporte público mais acessível",
    excerpt: "Um programa nacional que visa reduzir as tarifas de ônibus é um dos trabalhos já iniciados por Denis Andia à frente da Secretaria Nacional de Mobilidade Urbana.",
  },
  {
    image: news4Asset.url,
    date: "Artigo",
    title: "O CAMINHO DE CASA - Por Denis Andia",
    excerpt: "Há caminhos que mudam de paisagem, mas nunca mudam de destino. E agora, o tempo faz mais uma curva bonita. Voltei para uma nova caminhada.",
  },
];

export function NewsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    const interval = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative">
      <div ref={emblaRef} className="overflow-hidden rounded-3xl">
        <div className="flex">
          {NEWS.map((n, i) => (
            <div key={i} className="min-w-0 shrink-0 grow-0 basis-full md:basis-1/2 lg:basis-1/3 pr-4">
              <article className="h-full rounded-2xl bg-card shadow-card overflow-hidden">
                <img src={n.image} alt={n.title} loading="lazy" className="h-52 w-full object-cover" />
                <div className="p-5">
                  <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    {n.date}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-foreground">{n.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{n.excerpt}</p>
                  <button className="mt-4 text-sm font-semibold text-primary hover:underline">
                    Ler mais →
                  </button>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-2">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Ir para slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === selectedIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={scrollPrev}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-card shadow-card text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={scrollNext}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-brand hover:opacity-90 transition-opacity"
            aria-label="Próximo slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
