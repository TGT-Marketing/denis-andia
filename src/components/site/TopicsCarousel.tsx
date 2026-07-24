import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type Topic = {
  title: string;
  description: string;
  image: string;
};

export function TopicsCarousel({ topics }: { topics: Topic[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    const t = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => {
      clearInterval(t);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative">
      <div ref={emblaRef} className="overflow-hidden rounded-3xl">
        <div className="flex">
          {topics.map((t, i) => (
            <div key={i} className="min-w-0 shrink-0 grow-0 basis-full md:basis-1/2 lg:basis-1/3 pr-4">
              <article className="h-full rounded-2xl bg-card shadow-card overflow-hidden">
                <img src={t.image} alt={t.title} loading="lazy" className="h-56 w-full object-cover" />
                <div className="p-5">
                  <h3 className="text-lg font-black uppercase tracking-tight text-foreground">
                    {t.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{t.description}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
          {selectedIndex + 1} / {topics.length}
        </p>
        <div className="flex gap-2">
          <button
            onClick={scrollPrev}
            aria-label="Anterior"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-card shadow-card text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Próximo"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-brand hover:opacity-90 transition-opacity"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
