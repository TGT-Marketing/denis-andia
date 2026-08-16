import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function GalleryCarousel({ items, showCaptions = true }: { items: { image: string; caption: string }[]; showCaptions?: boolean }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setSnaps(emblaApi.scrollSnapList());
    const onSel = () => setSelected(emblaApi.selectedScrollSnap());
    onSel();
    emblaApi.on("select", onSel);
    return () => {
      emblaApi.off("select", onSel);
    };
  }, [emblaApi]);

  return (
    <div className="relative">
      <div ref={emblaRef} className="overflow-hidden rounded-2xl">
        <div className="flex">
          {items.map((item, i) => (
            <div key={i} className="min-w-0 shrink-0 grow-0 basis-full sm:basis-1/2 lg:basis-1/3 pr-4">
              <figure className="rounded-2xl overflow-hidden bg-card shadow-card">
                <img src={item.image} alt={item.caption} loading="lazy" className="h-64 w-full object-contain bg-muted" />
                {showCaptions && <figcaption className="p-4 text-sm font-semibold text-foreground">{item.caption}</figcaption>}
              </figure>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex gap-2">
          {snaps.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${i === selected ? "w-8 bg-primary" : "w-2 bg-muted-foreground/40"}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button onClick={prev} aria-label="Anterior" className="flex h-10 w-10 items-center justify-center rounded-full bg-card shadow-card hover:bg-accent hover:text-accent-foreground transition-colors">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={next} aria-label="Próximo" className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-brand hover:opacity-90 transition-opacity">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
