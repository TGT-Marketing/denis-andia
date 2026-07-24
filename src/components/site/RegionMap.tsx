import { useState } from "react";
import { VideoModal } from "./VideoModal";

type Region = {
  id: string;
  name: string;
  d: string;
  cx: number;
  cy: number;
  highlight?: boolean;
};

// Stylized São Paulo state map — approximate polygons for the main
// administrative / metropolitan regions of SP. viewBox is arbitrary units.
const VIEWBOX = "0 0 900 620";

const OUTLINE =
  "M60,300 L110,220 L200,170 L300,140 L420,120 L560,120 L680,150 L780,210 L840,290 L860,380 L820,470 L720,530 L600,560 L470,570 L360,555 L260,520 L170,470 L100,400 Z";

const REGIONS: Region[] = [
  {
    id: "rm-campinas",
    name: "Região Metropolitana de Campinas",
    d: "M360,270 L470,255 L520,290 L510,355 L440,375 L370,355 L340,315 Z",
    cx: 425,
    cy: 315,
    highlight: true,
  },
  {
    id: "rm-piracicaba",
    name: "Região Metropolitana de Piracicaba",
    d: "M270,300 L360,270 L340,315 L370,355 L310,375 L245,355 Z",
    cx: 305,
    cy: 325,
    highlight: true,
  },
  {
    id: "rm-sao-paulo",
    name: "Região Metropolitana de São Paulo",
    d: "M470,380 L590,370 L640,410 L620,470 L520,485 L440,460 L430,410 Z",
    cx: 530,
    cy: 425,
  },
  {
    id: "rm-sorocaba",
    name: "Região Metropolitana de Sorocaba",
    d: "M290,395 L410,380 L430,410 L440,460 L360,485 L270,460 L245,420 Z",
    cx: 345,
    cy: 430,
  },
  {
    id: "rm-vale-paraiba",
    name: "Região Metropolitana do Vale do Paraíba",
    d: "M620,340 L760,300 L820,360 L790,430 L680,440 L620,410 Z",
    cx: 710,
    cy: 375,
  },
  {
    id: "rm-baixada",
    name: "Região Metropolitana da Baixada Santista",
    d: "M470,485 L620,470 L640,520 L560,555 L470,545 Z",
    cx: 545,
    cy: 515,
  },
  {
    id: "rm-ribeirao",
    name: "Região de Ribeirão Preto",
    d: "M340,180 L470,170 L520,215 L470,255 L360,270 L310,225 Z",
    cx: 410,
    cy: 220,
  },
  {
    id: "outras",
    name: "Demais regiões do Estado",
    d: OUTLINE,
    cx: 150,
    cy: 500,
  },
];

export function RegionMap() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<Region | null>(null);

  const active = REGIONS.find((r) => r.id === hovered);

  return (
    <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] items-center">
      <div className="relative rounded-3xl bg-background p-4 md:p-6">
        <svg
          viewBox={VIEWBOX}
          className="w-full h-auto"
          role="img"
          aria-label="Mapa interativo do estado de São Paulo"
        >
          {/* Base outline — "demais regiões", dark by default */}
          <path
            d={OUTLINE}
            onMouseEnter={() => setHovered("outras")}
            onMouseLeave={() => setHovered(null)}
            onClick={() =>
              setSelected(REGIONS.find((r) => r.id === "outras") ?? null)
            }
            className="cursor-pointer transition-all duration-200"
            style={{
              fill:
                hovered === "outras"
                  ? "color-mix(in oklab, var(--brand-green) 65%, #0b1220)"
                  : "#1f2937",
              stroke: "#ffffff",
              strokeWidth: 2,
            }}
          />

          {/* Region overlays */}
          {REGIONS.filter((r) => r.id !== "outras").map((r) => {
            const isHover = hovered === r.id;
            const dim = hovered && !isHover;
            const fill = isHover
              ? "var(--brand-yellow)"
              : r.highlight
              ? "var(--brand-green)"
              : "color-mix(in oklab, var(--brand-green) 55%, #0b1220)";
            return (
              <path
                key={r.id}
                d={r.d}
                onMouseEnter={() => setHovered(r.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setSelected(r)}
                className="cursor-pointer transition-all duration-200"
                style={{
                  fill,
                  opacity: dim ? 0.35 : 1,
                  stroke: "#ffffff",
                  strokeWidth: 1.5,
                }}
              />
            );
          })}

          {/* Tooltip label */}
          {active && (
            <g pointerEvents="none">
              <rect
                x={active.cx - 140}
                y={active.cy - 40}
                width={280}
                height={28}
                rx={6}
                style={{ fill: "var(--ink)", opacity: 0.9 }}
              />
              <text
                x={active.cx}
                y={active.cy - 21}
                textAnchor="middle"
                style={{
                  fill: "#fff",
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                {active.name}
              </text>
            </g>
          )}
        </svg>
      </div>

      {/* Side list */}
      <div>
        <h3 className="text-2xl font-bold mb-4">Regiões do estado</h3>
        <ul className="divide-y divide-border rounded-2xl border border-border overflow-hidden bg-background">
          {REGIONS.map((r) => (
            <li key={r.id}>
              <button
                type="button"
                onMouseEnter={() => setHovered(r.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setSelected(r)}
                className="flex w-full items-center justify-between px-4 py-3 text-left hover:bg-muted transition-colors"
              >
                <span className="font-medium">{r.name}</span>
                <span
                  className="inline-block h-2 w-2 rounded-full"
                  style={{
                    background: r.highlight
                      ? "var(--brand-green)"
                      : "var(--brand-blue)",
                  }}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <VideoModal
        open={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.name ?? ""}
        videoUrl=""
      />
    </div>
  );
}
