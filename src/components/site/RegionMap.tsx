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
                      ? r.id === "rmc" ? "#EAB308" : "#22C55E" // RMC amarelo escuro no hover, RMP verde claro (mantendo o que está no hover)
                      : r.id === "rmc" ? "#FEF08A" : "#86EFAC", // RMC amarelo claro, RMP verde claro
                    stroke: "#ffffff",
                    strokeWidth: 1.2,
                  }}
                />
                <line
                  x1={r.id === "rmc" ? 620 : 520}
                  y1={r.id === "rmc" ? 340 : 300}
                  x2={r.cx}
                  y2={r.cy + 8}
                  pointerEvents="none"
                  className="block"
                  style={{ stroke: "var(--ink)", strokeWidth: 2, opacity: 0.6 }}
                />
                <text
                  x={r.cx}
                  y={r.cy}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  pointerEvents="none"
                  className="select-none"
                  style={{ 
                    fontWeight: 900, 
                    fill: "var(--ink)",
                    fontSize: 'clamp(18px, 5vw, 32px)'
                  }}
                >
                  {r.short}
                </text>
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
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Trabalho já chegou</p>
        <h2 className="mt-2 text-4xl md:text-5xl font-black text-foreground tracking-tight">
          Onde Denis <span className="text-primary">está</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Passe o mouse sobre uma região do Estado de São Paulo e clique para assistir ao vídeo do
          trabalho realizado por lá.
        </p>

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
              <span className="text-sm font-semibold text-foreground">{r.name}</span>
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
            <span className="text-sm font-semibold text-foreground">Demais Regiões</span>
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
