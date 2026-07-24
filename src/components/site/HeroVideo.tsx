import { useState } from "react";
import { Play } from "lucide-react";
import { VideoModal } from "./VideoModal";

interface HeroVideoProps {
  buttonLabel: string;
  modalTitle: string;
  modalDescription?: string;
  videoSrc?: string;
}

export function HeroVideo({
  buttonLabel,
  modalTitle,
  modalDescription,
  videoSrc,
}: HeroVideoProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group inline-flex items-center gap-4 rounded-full bg-white/10 backdrop-blur border border-white/25 pl-2 pr-6 py-2 text-white hover:bg-white/20 transition-colors"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-brand transition-transform group-hover:scale-110">
          <Play className="h-6 w-6 fill-current ml-0.5" />
        </span>
        <span className="text-left leading-tight">
          <span className="block text-[10px] font-bold tracking-[0.3em] uppercase text-accent">
            Assista
          </span>
          <span className="block text-sm md:text-base font-bold">{buttonLabel}</span>
        </span>
      </button>
      <VideoModal
        open={open}
        onOpenChange={setOpen}
        title={modalTitle}
        description={modalDescription}
        videoSrc={videoSrc}
      />
    </>
  );
}
