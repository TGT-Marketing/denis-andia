import { useEffect, useState } from "react";

interface HeroSlideshowProps {
  images: { src: string; alt: string }[];
  intervalMs?: number;
}

export function HeroSlideshow({ images, intervalMs = 6000 }: HeroSlideshowProps) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % images.length), intervalMs);
    return () => clearInterval(id);
  }, [images.length, intervalMs]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {images.map((img, i) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[1600ms] ease-in-out"
          style={{ opacity: i === idx ? 1 : 0 }}
          fetchPriority={i === 0 ? "high" : "auto"}
        />
      ))}
      {/* Gradient overlay for readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, color-mix(in oklab, var(--ink) 78%, transparent) 0%, color-mix(in oklab, var(--ink) 45%, transparent) 45%, color-mix(in oklab, var(--ink) 15%, transparent) 70%, color-mix(in oklab, var(--ink) 65%, transparent) 100%)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-2/3"
        style={{
          background:
            "linear-gradient(to top, color-mix(in oklab, var(--ink) 80%, transparent), transparent)",
        }}
      />
    </div>
  );
}
