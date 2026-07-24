import { useState } from "react";
import { VideoModal } from "./VideoModal";

type Region = {
  id: string;
  name: string;
  d: string;
  labelX: number;
  labelY: number;
};

// Stylized São Paulo state divided by administrative regions.
// Paths are simplified shapes designed to tile inside a rough SP outline.
const REGIONS: Region[] = [
  {
    id: "campinas",
    name: "Região Metropolitana de Campinas",
    d: "M340,150 L470,140 L520,200 L500,280 L420,300 L340,260 Z",
    labelX: 420,
    labelY: 220,
  },
  {
    id: "piracicaba",
    name: "Região Metropolitana de Piracicaba",
    d: "M240,190 L340,150 L340,260 L280,300 L200,270 Z",
    labelX: 275,
    labelY: 230,
  },
  {
    id: "sao-paulo",
    name: "Região Metropolitana de São Paulo",
    d: "M420,300 L560,290 L600,360 L520,410 L440,380 Z",
    labelX: 510,
    labelY: 350,
  },
  {
    id: "santos",
    name: "Baixada Santista",
    d: "M440,380 L520,410 L500,470 L420,470 Z",
    labelX: 470,
    labelY: 435,
  },
  {
    id: "vale-paraiba",
    name: "Vale do Paraíba e Litoral Norte",
    d: "M560,290 L720,280 L780,360 L680,420 L600,360 Z",
    labelX: 680,
    labelY: 340,
  },
  {
    id: "ribeirao-preto",
    name: "Ribeirão Preto e Franca",
    d: "M340,60 L520,50 L560,130 L470,140 L340,150 Z",
    labelX: 445,
    labelY: 100,
  },
  {
    id: "sorocaba",
    name: "Sorocaba e Região",
    d: "M280,300 L420,300 L440,380 L360,420 L260,380 Z",
    labelX: 350,
    labelY: 355,
  },
  {
    id: "bauru",
    name: "Bauru e Marília",
    d: "M120,140 L340,60 L340,150 L240,190 L160,220 Z",
    labelX: 235,
    labelY: 150,
  },
  {
    id: "presidente-prudente",
    name: "Presidente Prudente e Araçatuba",
    d: "M40,220 L160,220 L200,270 L200,340 L100,340 L40,300 Z",
    labelX: 120,
    labelY: 285,
  },
  {
    id: "sao-jose-rio-preto",
    name: "São José do Rio Preto",
    d: "M120,140 L340,60 L520,50 L520,50 L340,60 L120,140 Z M40,80 L340,60 L120,140 Z",
    labelX: 175,
    labelY: 100,
  },
];

export function SPRegionMap() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<Region | null>(null);

  return (
    <div className="relative">
      <div className="relative rounded-3xl bg-ink/95 p-4 md:p-8 shadow-brand" style={{ backgroundColor: "var(--ink)" }}>
        <svg
          viewBox="0 0 820 500"
          className="w-full h-auto"
          role="img"
          aria-label="Mapa interativo do Estado de São Paulo"
        >
          <g>
            {REGIONS.map((r) => {
              const isHover = hovered === r.id;
              return (
                <path
                  key={r.id}
                  d={r.d}
                  fill={isHover ? "var(--brand-green)" : "rgba(255,255,255,0.08)"}
                  stroke={isHover ? "var(--brand-yellow)" : "rgba(255,255,255,0.25)"}
                  strokeWidth={isHover ? 2.5 : 1.2}
                  className="cursor-pointer transition-all duration-200"
                  style={{
                    filter: isHover ? "drop-shadow(0 6px 18px rgba(13,147,68,0.5))" : "none",
                  }}
                  onMouseEnter={() => setHovered(r.id)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setSelected(r)}
                />
              );
            })}
          </g>
          {/* Region labels */}
          <g pointerEvents="none">
            {REGIONS.map((r) => {
              const isHover = hovered === r.id;
              return (
                <text
                  key={`t-${r.id}`}
                  x={r.labelX}
                  y={r.labelY}
                  textAnchor="middle"
                  className="select-none"
                  fontSize={isHover ? 13 : 10}
                  fontWeight={isHover ? 900 : 600}
                  fill={isHover ? "#fff" : "rgba(255,255,255,0.55)"}
                  style={{ transition: "all 0.2s" }}
                >
                  {r.name.length > 22 ? r.name.split(" ").slice(0, 3).join(" ") : r.name}
                </text>
              );
            })}
          </g>
        </svg>

        {/* Tooltip */}
        {hovered && (
          <div className="pointer-events-none absolute top-4 left-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-md text-xs font-black uppercase tracking-widest">
            {REGIONS.find((r) => r.id === hovered)?.name}
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="mt-6 flex flex-wrap gap-3">
        {REGIONS.map((r) => (
          <button
            key={r.id}
            type="button"
            onMouseEnter={() => setHovered(r.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setSelected(r)}
            className={`text-xs font-bold uppercase tracking-wider px-3 py-2 rounded-full border transition ${
              hovered === r.id
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-background text-foreground border-border hover:border-primary"
            }`}
          >
            {r.name}
          </button>
        ))}
      </div>

      <VideoModal
        open={!!selected}
        onOpenChange={(o) => !o && setSelected(null)}
        title={selected?.name ?? ""}
        description="Conheça o trabalho de Denis Andia nessa região."
      />
    </div>
  );
}
