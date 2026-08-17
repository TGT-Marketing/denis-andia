import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export function GalleryCarousel({ items, showCaptions = true }: { items: { image: string; caption?: string }[]; showCaptions?: boolean }) {
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
              <Dialog>
                <DialogTrigger asChild>
                  <button className="w-full text-left cursor-zoom-in">
                    <figure className="rounded-2xl overflow-hidden bg-card shadow-card group">
                      <img 
                        src={item.image} 
                        alt={item.caption || "Imagem da galeria"} 
                        loading="lazy" 
                        className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      />
                      {showCaptions && item.caption && (
                        <figcaption className="p-4 text-sm font-semibold text-foreground">{item.caption}</figcaption>
                      )}
                    </figure>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] p-0 border-none bg-transparent shadow-none overflow-hidden">
                  <VisuallyHidden>
                    <DialogTitle>{item.caption || "Imagem ampliada"}</DialogTitle>
                  </VisuallyHidden>
                  <div className="flex items-center justify-center w-full h-full max-h-[85vh]">
                    <img 
                      src={item.image} 
                      alt={item.caption || "Imagem ampliada"} 
                      className="max-w-full max-h-full object-contain rounded-lg"
                    />
                  </div>
                  {item.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 text-white text-center">
                      {item.caption}
                    </div>
                  )}
                </DialogContent>
              </Dialog>
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
              className={`h-2 rounded-full transition-all ${i === selected ? "w-8 bg-[#0D9344]" : "w-2 bg-muted-foreground/40"}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button onClick={prev} aria-label="Anterior" className="flex h-10 w-10 items-center justify-center rounded-full bg-card shadow-card hover:bg-[#FEEE02] hover:text-accent-foreground transition-colors group">
            <ChevronLeft className="h-5 w-5 group-hover:text-[#0D9344]" />
          </button>
          <button onClick={next} aria-label="Próximo" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0D9344] text-primary-foreground shadow-brand hover:opacity-90 transition-opacity">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
