import { useState } from "react";
import { VideoModal } from "./VideoModal";
import mapData from "./brStates.json";

type State = { uf: string; name: string; d: string; cx: number; cy: number };

const DATA = mapData as { viewBox: string; states: State[] };

// UFs where Denis has active representation / work highlighted
const HIGHLIGHTED = new Set(["SP", "MG", "RJ", "PR", "GO", "DF", "BA", "CE", "PE", "RS", "SC", "MT", "MS", "ES", "PB"]);

export function RegionMap() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<State | null>(null);

  return (
    <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] items-center">
      <div className="relative rounded-3xl bg-background p-4 md:p-6">
        <svg
          viewBox={DATA.viewBox}
          className="w-full h-auto"
          role="img"
          aria-label="Mapa interativo do Brasil"
        >
          <g>
            {DATA.states.map((s) => {
              const isHover = hovered === s.uf;
              const isHighlighted = HIGHLIGHTED.has(s.uf);
              const fill = isHover
                ? "var(--brand-green)"
                : isHighlighted
                ? "color-mix(in oklab, var(--brand-green) 25%, #e5e7eb)"
                : "#d1d5db";
              return (
                <path
                  key={s.uf}
                  d={s.d}
                  onMouseEnter={() => setHovered(s.uf)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setSelected(s)}
                  className="cursor-pointer transition-all duration-200"
                  style={{
                    fill,
                    stroke: "#ffffff",
                    strokeWidth: 1,
                  }}
                />
              );
            })}
          </g>
          <g pointerEvents="none">
            {DATA.states.map((s) => (
              <text
                key={s.uf}
                x={s.cx}
                y={s.cy}
                textAnchor="middle"
                dominantBaseline="middle"
                className="select-none"
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  fill: hovered === s.uf ? "#ffffff" : "#374151",
                  transition: "fill 200ms",
                }}
              >
                {s.uf}
              </text>
            ))}
          </g>
          {HIGHLIGHTED.size > 0 &&
            DATA.states
              .filter((s) => HIGHLIGHTED.has(s.uf))
              .map((s) => (
                <circle
                  key={`dot-${s.uf}`}
                  cx={s.cx}
                  cy={s.cy - 18}
                  r={4}
                  fill="var(--brand-blue)"
                  pointerEvents="none"
                />
              ))}
        </svg>
        {hovered && (
          <div className="absolute bottom-4 left-6 right-6 rounded-xl bg-foreground/90 text-background backdrop-blur px-4 py-3 shadow-card">
            <p className="text-sm font-bold uppercase tracking-wide">
              {DATA.states.find((s) => s.uf === hovered)?.name}
            </p>
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
          Passe o mouse sobre um estado do Brasil e clique para assistir ao vídeo do trabalho
          realizado naquela região.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-2 max-h-[360px] overflow-auto pr-2">
          {DATA.states
            .slice()
            .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"))
            .map((s) => (
              <button
                key={s.uf}
                onClick={() => setSelected(s)}
                onMouseEnter={() => setHovered(s.uf)}
                onMouseLeave={() => setHovered(null)}
                className="flex items-center gap-2 text-left rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent/40 transition-colors"
              >
                <span className="inline-flex h-6 w-8 items-center justify-center rounded bg-primary/10 text-[11px] font-black text-primary">
                  {s.uf}
                </span>
                <span className="truncate">{s.name}</span>
              </button>
            ))}
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
