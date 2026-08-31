import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CITY_DATA } from "./city-data";

interface RegionWorkModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  region: "RMC" | "RMP";
  title: string;
  videoSrc: string;
}

export function RegionWorkModal({ open, onOpenChange, region, title, videoSrc }: RegionWorkModalProps) {
  const data = CITY_DATA.find((r) => r.region === region);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl h-[90vh] flex flex-col p-0 overflow-hidden bg-card border-none shadow-2xl">
        <DialogHeader className="px-8 pt-8 pb-4 bg-white shrink-0">
          <DialogTitle className="text-3xl font-black text-[var(--brand-green)] uppercase tracking-tight">
            {title}
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground font-medium">
            Assista ao vídeo e confira o trabalho de Denis Andia na região.
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="flex-1 px-8 pb-10">
          <div className="py-6 space-y-10">
            <video
              controls
              autoPlay
              playsInline
              className="mx-auto block max-h-[55vh] w-auto max-w-full rounded-2xl shadow-card"
              src={videoSrc}
            />

            {data && (
              <div className="space-y-6">
                <div className="sticky top-0 bg-card/95 backdrop-blur-sm z-10 py-2 border-b border-[var(--brand-green)]/10">
                  <h3 className="text-4xl font-black text-[var(--brand-green)] tracking-tighter">
                    {data.region}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
                  {data.cities.map((city) => (
                    <div key={city.city} className="space-y-3 group">
                      <h4 className="text-lg font-bold text-foreground border-l-4 border-[var(--brand-yellow)] pl-3 group-hover:border-[var(--brand-green)] transition-colors">
                        {city.city}
                      </h4>
                      <ul className="space-y-2 pl-3">
                        {city.items.map((item, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0D9344]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
