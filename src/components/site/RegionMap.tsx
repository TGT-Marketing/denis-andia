import { useState } from "react";
import { VideoModal } from "./VideoModal";
import spPaths from "./sp-paths.json";

type Region = {
  id: string;
  name: string;
  short: string;
  d: string;
  cx: number;
  cy: number;
  highlight: boolean;
};

const SP_OUTLINE = spPaths.other;

const REGIONS: Region[] = [
  {
    id: "rmc",
    name: "RMC — Região Metropolitana de Campinas",
    short: "RMC",
    d: spPaths.rmc,
    cx: 620,
    cy: 450,
    highlight: true,
  },
  {
    id: "rmp",
    name: "RMP — Região Metropolitana de Piracicaba",
    short: "RMP",
    d: spPaths.rmp,
    cx: 470,
    cy: 268,
    highlight: true,
  },
];

export function RegionMap({ mapOnly = false }: { mapOnly?: boolean }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<{ name: string } | null>(null);

  const others = {
    id: "demais",
    name: "Demais Regiões",
  };

  const hoveredName =
    hovered === "demais" ? others.name : REGIONS.find((r) => r.id === hovered)?.name;

  return (
    <div className={mapOnly ? "" : "grid gap-10 lg:grid-cols-[1.15fr_1fr] items-center"}>
      <div className="relative">

        <svg
          viewBox="0 0 900 600"
          className="w-full h-auto overflow-visible"
          role="img"
          aria-label="Mapa interativo do Estado de São Paulo"
        >
          {/* Demais Regiões (todo o estado) */}
          <path
            d={SP_OUTLINE}
            onMouseEnter={() => setHovered("demais")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setSelected({ name: others.name })}
            className="cursor-pointer transition-all duration-200"
            style={{
              fill:
                hovered === "demais"
                  ? "#0F5A9C" // azul escuro
                  : "#B9CEE8", // azul claro (mantendo o que já estava ou aproximando do solicitado)
              stroke: "#ffffff",
              strokeWidth: 0.5,
            }}
          />

          {/* Regiões em destaque */}
          {REGIONS.map((r) => {
            const isHover = hovered === r.id;
            return (
              <g key={r.id}>
                <path
                  d={r.d}
                  onMouseEnter={() => setHovered(r.id)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setSelected({ name: r.name })}
                  className="cursor-pointer transition-all duration-300"
                  style={{
                    transformBox: "fill-box",
                    transformOrigin: "center",
                    transform: isHover ? "scale(1.35)" : "scale(1.2)", // Aumentadas por padrão no mobile também via escala base
                    filter: isHover
                      ? "drop-shadow(0 10px 18px color-mix(in oklab, var(--ink) 35%, transparent))"
                      : "drop-shadow(0 4px 8px color-mix(in oklab, var(--ink) 15%, transparent))",
                    fill: isHover
                      ? r.id === "rmc" ? "var(--brand-yellow)" : "var(--brand-green)"
                      : r.id === "rmc" ? "var(--brand-yellow)" : "var(--brand-green)",
                    stroke: "#ffffff",
                    strokeWidth: 1.2,
                  }}
                />
              </g>
            );
          })}
        </svg>

        {hoveredName && (
          <div className="absolute bottom-4 left-6 right-6 rounded-xl bg-foreground/90 text-background backdrop-blur px-4 py-3 shadow-card">
            <p className="text-sm font-bold uppercase tracking-wide">{hoveredName}</p>
            <p className="text-xs opacity-80">Clique para assistir ao vídeo</p>
          </div>
        )}
      </div>

      <div className={mapOnly ? "hidden" : ""}>
        <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight">
          O DENIS <span className="text-primary">ESTÁ</span>
        </h2>

        <div className="mt-8 flex flex-col gap-3">
          {REGIONS.map((r) => (
            <button
              key={r.id}
              onClick={() => setSelected({ name: r.name })}
              onMouseEnter={() => setHovered(r.id)}
              onMouseLeave={() => setHovered(null)}
              className="flex items-center gap-3 text-left rounded-xl border border-border px-4 py-3 hover:bg-primary/10 transition-colors"
            >
              <span className="inline-flex h-8 w-12 items-center justify-center rounded bg-primary text-[12px] font-black text-primary-foreground">
                {r.short}
              </span>
              <span className="text-sm font-semibold text-foreground">
                Na Região Metropolitana de {r.id === "rmc" ? "Campinas" : "Piracicaba"}
              </span>
            </button>
          ))}
          <button
            onClick={() => setSelected({ name: others.name })}
            onMouseEnter={() => setHovered("demais")}
            onMouseLeave={() => setHovered(null)}
            className="flex items-center gap-3 text-left rounded-xl border border-border px-4 py-3 hover:bg-muted transition-colors"
          >
            <span className="inline-flex h-8 w-12 items-center justify-center rounded bg-muted text-[12px] font-black text-muted-foreground">
              SP
            </span>
            <span className="text-sm font-semibold text-foreground">Nas demais Regiões</span>
          </button>
          <button
            onClick={() => setSelected({ name: "Em todas as cidades" })}
            className="flex items-center gap-3 text-left rounded-xl border border-border px-4 py-3 hover:bg-muted transition-colors"
          >
            <span className="inline-flex h-8 w-12 items-center justify-center rounded bg-muted text-[12px] font-black text-muted-foreground">
              DA
            </span>
            <span className="text-sm font-semibold text-foreground">Em todas as cidades</span>
          </button>
        </div>
      </div>

      <VideoModal
        open={!!selected}
        onOpenChange={(o) => !o && setSelected(null)}
        title={selected?.name ?? ""}
        description={selected ? `Trabalho de Denis em ${selected.name}.` : undefined}
      />
    </div>
  );
}
