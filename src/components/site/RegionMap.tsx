import { useState } from "react";
import { VideoModal } from "./VideoModal";

type Region = {
  id: string;
  name: string;
  short: string;
  d: string;
  cx: number;
  cy: number;
  highlight: boolean;
};

// Stylized map of the State of São Paulo.
const SP_OUTLINE =
  "M120 250 L150 195 L205 160 L268 140 L330 132 L392 140 L455 132 L520 120 L585 118 L650 132 L705 158 L748 196 L775 245 L790 300 L775 350 L735 392 L680 420 L615 436 L545 448 L480 462 L415 470 L352 462 L295 442 L245 412 L200 375 L160 330 L132 292 Z";

const REGIONS: Region[] = [
  {
    id: "rmc",
    name: "RMC — Região Metropolitana de Campinas",
    short: "RMC",
    d: "M520 178 L590 168 L640 190 L652 232 L628 274 L572 288 L520 272 L502 228 Z",
    cx: 576,
    cy: 228,
    highlight: true,
  },
  {
    id: "rmp",
    name: "RMP — Região Metropolitana de Piracicaba",
    short: "RMP",
    d: "M408 200 L500 196 L502 228 L520 272 L470 300 L412 292 L388 250 Z",
    cx: 452,
    cy: 248,
    highlight: true,
  },
];

export function RegionMap() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<{ name: string } | null>(null);

  const others = {
    id: "demais",
    name: "Demais Regiões",
  };

  const hoveredName =
    hovered === "demais" ? others.name : REGIONS.find((r) => r.id === hovered)?.name;

  return (
    <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] items-center">
      <div className="relative rounded-3xl bg-background p-4 md:p-6">
        <svg
          viewBox="0 0 900 560"
          className="w-full h-auto"
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
              fill: hovered === "demais" ? "#9ca3af" : "#d1d5db",
              stroke: "#ffffff",
              strokeWidth: 3,
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
                  className="cursor-pointer transition-all duration-200"
                  style={{
                    fill: isHover
                      ? "var(--brand-green)"
                      : "color-mix(in oklab, var(--brand-green) 70%, #ffffff)",
                    stroke: "#ffffff",
                    strokeWidth: 3,
                  }}
                />
                <text
                  x={r.cx}
                  y={r.cy}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  pointerEvents="none"
                  className="select-none"
                  style={{ fontSize: 26, fontWeight: 900, fill: "#ffffff" }}
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

      <div>
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
