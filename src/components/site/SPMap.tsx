import { useState } from "react";
import { VideoModal } from "./VideoModal";

type Region = {
  id: string;
  name: string;
  highlight?: boolean;
  d: string;
  cx: number;
  cy: number;
};

// Stylized São Paulo state divided in administrative regions.
// Coordinates are hand-tuned inside a 900x520 viewBox.
const REGIONS: Region[] = [
  { id: "rmc", name: "Região Metropolitana de Campinas", highlight: true,
    d: "M430,180 L540,170 L580,220 L520,270 L440,260 Z", cx: 495, cy: 220 },
  { id: "rmp", name: "Região Metropolitana de Piracicaba", highlight: true,
    d: "M340,180 L430,180 L440,260 L360,270 L310,230 Z", cx: 380, cy: 220 },
  { id: "rmsp", name: "Região Metropolitana de São Paulo",
    d: "M520,270 L620,260 L660,320 L580,360 L500,340 Z", cx: 585, cy: 310 },
  { id: "sorocaba", name: "Região de Sorocaba",
    d: "M360,270 L440,260 L500,340 L420,370 L340,340 Z", cx: 420, cy: 315 },
  { id: "santos", name: "Baixada Santista",
    d: "M500,340 L580,360 L560,420 L480,410 Z", cx: 525, cy: 380 },
  { id: "vale", name: "Vale do Paraíba e Litoral Norte",
    d: "M620,260 L780,240 L820,310 L740,360 L660,320 Z", cx: 720, cy: 300 },
  { id: "central", name: "Região Central",
    d: "M250,190 L340,180 L310,230 L240,250 Z", cx: 285, cy: 215 },
  { id: "riopreto", name: "São José do Rio Preto",
    d: "M160,120 L340,110 L340,180 L250,190 L180,180 Z", cx: 245, cy: 150 },
  { id: "ribeirao", name: "Ribeirão Preto",
    d: "M340,110 L500,110 L540,170 L430,180 L340,180 Z", cx: 435, cy: 145 },
  { id: "franca", name: "Franca",
    d: "M500,110 L620,110 L640,170 L540,170 Z", cx: 570, cy: 140 },
  { id: "barretos", name: "Barretos",
    d: "M380,60 L560,60 L500,110 L340,110 Z", cx: 435, cy: 85 },
  { id: "aracatuba", name: "Araçatuba",
    d: "M120,100 L280,80 L340,110 L160,120 Z", cx: 220, cy: 100 },
  { id: "presidente", name: "Presidente Prudente",
    d: "M100,180 L240,170 L240,250 L120,240 Z", cx: 170, cy: 210 },
  { id: "marilia", name: "Marília",
    d: "M180,240 L340,240 L340,310 L200,320 Z", cx: 260, cy: 275 },
  { id: "bauru", name: "Bauru",
    d: "M240,170 L340,180 L340,240 L240,250 Z", cx: 290, cy: 210 },
  { id: "itapeva", name: "Itapeva",
    d: "M240,300 L420,300 L420,370 L260,380 Z", cx: 330, cy: 340 },
  { id: "registro", name: "Registro",
    d: "M420,370 L500,340 L480,410 L560,420 L520,470 L400,460 Z", cx: 460, cy: 420 },
];

export function SPMap() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<Region | null>(null);

  const fillFor = (r: Region) => {
    if (hovered === r.id) return r.highlight ? "#0b3d91" : "#4b7bd6";
    if (r.highlight) return "#123a86"; // azul royal escuro
    return "#a9c3ea"; // azul claro
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center">
      <div className="relative rounded-3xl bg-background p-4 md:p-6 shadow-card">
        <svg
          viewBox="0 0 900 520"
          className="w-full h-auto"
          role="img"
          aria-label="Mapa do Estado de São Paulo"
        >
          {REGIONS.map((r) => (
            <path
              key={r.id}
              d={r.d}
              onMouseEnter={() => setHovered(r.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setSelected(r)}
              className="cursor-pointer transition-all duration-200"
              style={{
                fill: fillFor(r),
                stroke: "#ffffff",
                strokeWidth: 2,
                filter: hovered === r.id ? "drop-shadow(0 6px 18px rgba(11,61,145,0.45))" : undefined,
              }}
            />
          ))}
          {REGIONS.filter((r) => r.highlight).map((r) => (
            <g key={`m-${r.id}`} pointerEvents="none">
              <circle cx={r.cx} cy={r.cy} r={7} fill="#FEEE02" stroke="#0b3d91" strokeWidth={2} />
            </g>
          ))}
        </svg>

        <div className="absolute left-6 right-6 bottom-4 flex flex-wrap gap-3 text-xs">
          <Legend color="#123a86" label="Destaque: RMC e RMP" />
          <Legend color="#a9c3ea" label="Demais regiões" />
        </div>

        {hovered && (
          <div className="absolute top-4 left-6 right-6 rounded-xl bg-foreground/90 text-background backdrop-blur px-4 py-3 shadow-card">
            <p className="text-sm font-bold uppercase tracking-wide">
              {REGIONS.find((r) => r.id === hovered)?.name}
            </p>
            <p className="text-xs opacity-80">Clique para assistir aos vídeos</p>
          </div>
        )}
      </div>

      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Mapa interativo</p>
        <h2 className="mt-2 text-4xl md:text-5xl font-black text-foreground tracking-tight">
          O trabalho <span className="text-primary italic font-serif font-normal">já chegou</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Passe o mouse pelas regiões do Estado de São Paulo e clique para ver os vídeos das
          cidades onde Denis já deixou trabalho feito. As Regiões Metropolitanas de
          <strong> Campinas</strong> e <strong>Piracicaba</strong> estão em destaque.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-2 max-h-[360px] overflow-auto pr-2">
          {REGIONS.slice()
            .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"))
            .map((r) => (
              <button
                key={r.id}
                onClick={() => setSelected(r)}
                onMouseEnter={() => setHovered(r.id)}
                onMouseLeave={() => setHovered(null)}
                className="flex items-center gap-2 text-left rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent/40 transition-colors"
              >
                <span
                  className="inline-block h-3 w-3 rounded-sm"
                  style={{ background: r.highlight ? "#123a86" : "#a9c3ea" }}
                />
                <span className="truncate">{r.name}</span>
              </button>
            ))}
        </div>
      </div>

      <VideoModal
        open={!!selected}
        onOpenChange={(o) => !o && setSelected(null)}
        title={selected?.name ?? ""}
        description={selected ? `Trabalhos de Denis em ${selected.name}.` : undefined}
      />
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/85 backdrop-blur px-3 py-1.5 shadow-sm">
      <span className="h-3 w-3 rounded-sm" style={{ background: color }} />
      <span className="font-semibold text-foreground/80">{label}</span>
    </span>
  );
}
