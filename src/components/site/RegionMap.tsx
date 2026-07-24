import { useState } from "react";
import { VideoModal } from "./VideoModal";

type Region = {
  id: string;
  name: string;
  path: string;
  description: string;
};

// Stylized regions of São Paulo state (illustrative, not geographic-precise)
const REGIONS: Region[] = [
  {
    id: "campinas",
    name: "Região Metropolitana de Campinas",
    description: "Investimentos em saúde, mobilidade e educação na região de Campinas.",
    path: "M180 180 L280 160 L340 200 L320 280 L220 300 L160 260 Z",
  },
  {
    id: "piracicaba",
    name: "Região Metropolitana de Piracicaba",
    description: "Apoio ao agronegócio, indústria e cultura em Piracicaba e cidades vizinhas.",
    path: "M80 200 L180 180 L160 260 L100 290 L40 240 Z",
  },
  {
    id: "grande-sp",
    name: "Grande São Paulo",
    description: "Ações voltadas para a maior região metropolitana do país.",
    path: "M340 200 L440 210 L470 300 L400 340 L320 280 Z",
  },
  {
    id: "vale",
    name: "Vale do Paraíba",
    description: "Ciência, tecnologia e desenvolvimento regional no Vale.",
    path: "M470 140 L580 160 L600 240 L520 260 L440 210 L460 160 Z",
  },
  {
    id: "litoral",
    name: "Baixada Santista",
    description: "Portos, turismo e preservação do litoral paulista.",
    path: "M400 340 L500 360 L520 420 L420 430 L360 400 Z",
  },
  {
    id: "interior",
    name: "Interior Paulista",
    description: "Presente em todo o interior de São Paulo, com escuta e ação.",
    path: "M40 100 L280 90 L340 140 L280 160 L180 180 L80 200 L40 240 L20 160 Z",
  },
];

export function RegionMap() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<Region | null>(null);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] items-center">
      <div className="relative rounded-3xl bg-gradient-hero p-6 shadow-brand">
        <svg
          viewBox="0 0 620 480"
          className="w-full h-auto"
          role="img"
          aria-label="Mapa interativo do estado de São Paulo"
        >
          {REGIONS.map((r) => {
            const isHover = hovered === r.id;
            const dim = hovered !== null && !isHover;
            return (
              <path
                key={r.id}
                d={r.path}
                onMouseEnter={() => setHovered(r.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setSelected(r)}
                className="cursor-pointer transition-all duration-300"
                style={{
                  fill: isHover
                    ? "var(--brand-yellow)"
                    : dim
                    ? "color-mix(in oklab, black 55%, var(--brand-green))"
                    : "color-mix(in oklab, white 10%, var(--brand-green))",
                  stroke: "white",
                  strokeWidth: isHover ? 3 : 1.5,
                  filter: isHover ? "drop-shadow(0 6px 20px rgba(0,0,0,0.35))" : "none",
                }}
              />
            );
          })}
        </svg>
        {hovered && (
          <div className="absolute bottom-4 left-6 right-6 rounded-xl bg-background/90 backdrop-blur px-4 py-3 shadow-card">
            <p className="text-sm font-semibold text-foreground">
              {REGIONS.find((r) => r.id === hovered)?.name}
            </p>
            <p className="text-xs text-muted-foreground">Clique para assistir ao vídeo</p>
          </div>
        )}
      </div>

      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Trabalho</p>
        <h2 className="mt-2 text-4xl md:text-5xl font-bold text-foreground">
          Onde Denis já <span className="text-primary">chegou</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Passe o mouse pelo mapa e clique em uma região para ver o que estamos fazendo por lá.
          Cidade por cidade, no coração do estado de São Paulo.
        </p>
        <ul className="mt-6 grid gap-2">
          {REGIONS.map((r) => (
            <li key={r.id}>
              <button
                onClick={() => setSelected(r)}
                onMouseEnter={() => setHovered(r.id)}
                onMouseLeave={() => setHovered(null)}
                className="w-full text-left rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-accent/40 transition-colors"
              >
                → {r.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <VideoModal
        open={!!selected}
        onOpenChange={(o) => !o && setSelected(null)}
        title={selected?.name ?? ""}
        description={selected?.description}
      />
    </div>
  );
}
