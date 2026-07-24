import { useState } from "react";
import { Play } from "lucide-react";
import { VideoModal } from "./VideoModal";

interface CityCardProps {
  title: string;
  subtitle?: string;
  image: string;
}

export function CityCard({ title, subtitle, image }: CityCardProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group relative overflow-hidden rounded-2xl shadow-card text-left transition-transform duration-300 hover:-translate-y-1"
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <div className="flex items-end justify-between gap-3">
            <div>
              <h3 className="text-xl font-bold text-white">{title}</h3>
              {subtitle && <p className="text-sm text-white/80">{subtitle}</p>}
            </div>
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform group-hover:scale-110">
              <Play className="h-5 w-5 fill-current" />
            </span>
          </div>
        </div>
      </button>
      <VideoModal open={open} onOpenChange={setOpen} title={title} description={subtitle} />
    </>
  );
}
