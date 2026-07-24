import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface VideoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  videoSrc?: string;
}

export function VideoModal({ open, onOpenChange, title, description, videoSrc }: VideoModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden bg-card">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle className="text-2xl">{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        <div className="aspect-video w-full bg-black">
          {videoSrc ? (
            <video controls autoPlay className="h-full w-full" src={videoSrc} />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-white/70">
              <div className="text-center">
                <div className="mx-auto mb-3 h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-primary">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-sm">Vídeo em breve</p>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
