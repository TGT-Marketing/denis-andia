import { useState } from "react";
import { Play, X } from "lucide-react";
import mapData from "./spRegions.json";

type Region = { id: string; name: string; d: string; cx: number; cy: number };

const DATA = mapData as {
  viewBox: string;
  transform: string;
  regions: Region[];
};

// RMC (Campinas) and RMP (Piracicaba) — royal dark blue highlights
const HIGHLIGHT_IDS = new Set(["3507", "3506"]);

// Placeholder city videos per region
const CITY_VIDEOS: Record<string, { city: string; description: string }[]> = {
  "3507": [
    { city: "Campinas", description: "Saúde, mobilidade e educação" },
    { city: "Sumaré", description: "Segurança pública" },
    { city: "Hortolândia", description: "Habitação popular" },
    { city: "Indaiatuba", description: "Esporte e cultura" },
    { city: "Valinhos", description: "Meio ambiente" },
    { city: "Vinhedo", description: "Infraestrutura urbana" },
  ],
  "3506": [
    { city: "Piracicaba", description: "Educação e universidade" },
    { city: "Santa Bárbara d'Oeste", description: "Legado histórico" },
    { city: "Americana", description: "Emprego e renda" },
    { city: "Limeira", description: "Modernização" },
    { city: "Rio Claro", description: "Cultura e turismo" },
  ],
};

function defaultVideos(name: string) {
  return [
    { city: name, description: "Ações em andamento" },
    { city: `${name} — Interior`, description: "Programas regionais" },
    { city: `${name} — Litoral / Divisas`, description: "Investimentos" },
  ];
}

export function SaoPauloMap({ compact = false }: { compact?: boolean }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<Region | null>(null);

  const videos = selected
    ? CITY_VIDEOS[selected.id] ?? defaultVideos(selected.name)
    : [];

  return (
    <div>
      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] items-start">
        {/* MAP */}
        <div className="relative rounded-3xl bg-background p-2 md:p-4">
          <svg
            viewBox={DATA.viewBox}
            className="w-full h-auto"
            role="img"
            aria-label="Mapa interativo do estado de São Paulo"
          >
            <g transform={DATA.transform}>
              {DATA.regions.map((r) => {
                const isHover = hovered === r.id;
                const isHighlight = HIGHLIGHT_IDS.has(r.id);
                const isSelected = selected?.id === r.id;
                let fill = "var(--brand-blue)"; // azul claro
                if (isHighlight) fill = "#0b3a8f"; // azul royal escuro
                if (isHover || isSelected) {
                  fill = isHighlight ? "#1e56c8" : "#7fa9df";
                }
                return (
                  <path
                    key={r.id}
                    d={r.d}
                    onMouseEnter={() => setHovered(r.id)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => setSelected(r)}
                    className="cursor-pointer transition-[fill] duration-200"
                    style={{
                      fill,
                      stroke: "#ffffff",
                      strokeWidth: 60,
                      vectorEffect: "non-scaling-stroke",
                    }}
                  >
                    <title>{r.name}</title>
                  </path>
                );
              })}
            </g>
          </svg>

          {hovered && (
            <div className="pointer-events-none absolute bottom-3 left-3 right-3 rounded-xl bg-foreground/90 text-background px-4 py-2.5 shadow-card">
              <p className="text-xs md:text-sm font-bold uppercase tracking-wide">
                {DATA.regions.find((r) => r.id === hovered)?.name}
                {HIGHLIGHT_IDS.has(hovered) && (
                  <span className="ml-2 rounded-full bg-accent px-2 py-0.5 text-[10px] text-accent-foreground">
                    Destaque
                  </span>
                )}
              </p>
              <p className="text-[10px] md:text-xs opacity-80">
                Clique para assistir aos vídeos das cidades
              </p>
            </div>
          )}
        </div>

        {/* SIDE — legend + selected region videos */}
        <div>
          <p className="text-xs font-bold text-primary uppercase tracking-[0.3em]">
            Regiões do Estado
          </p>
          <h3 className="mt-2 text-3xl md:text-4xl font-black tracking-tight">
            {selected ? (
              <>
                <span className="text-primary">{selected.name}</span>
              </>
            ) : (
              <>
                Clique numa região <span className="text-primary italic font-serif font-normal">para ver</span> o trabalho
              </>
            )}
          </h3>

          <div className="mt-5 flex flex-wrap gap-3 text-xs font-semibold">
            <span className="inline-flex items-center gap-2">
              <span className="h-3 w-3 rounded-sm" style={{ backgroundColor: "#0b3a8f" }} />
              RMC e RMP
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-3 w-3 rounded-sm" style={{ backgroundColor: "var(--brand-blue)" }} />
              Demais regiões
            </span>
          </div>

          {selected ? (
            <div className="mt-6 animate-fade-in">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-semibold text-muted-foreground">
                  {videos.length} vídeos disponíveis
                </p>
                <button
                  onClick={() => setSelected(null)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-primary"
                  aria-label="Fechar seleção"
                >
                  <X className="h-4 w-4" /> limpar
                </button>
              </div>
              <div className={`grid gap-4 ${compact ? "sm:grid-cols-2" : "sm:grid-cols-2"}`}>
                {videos.map((v) => (
                  <article
                    key={v.city}
                    className="rounded-xl overflow-hidden bg-card shadow-card border border-border"
                  >
                    <div className="relative aspect-video bg-ink flex items-center justify-center" style={{ backgroundColor: "var(--ink)" }}>
                      <video
                        className="absolute inset-0 h-full w-full object-cover opacity-40"
                        muted
                        playsInline
                        data-placeholder="video"
                      />
                      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-brand">
                        <Play className="h-6 w-6 fill-current ml-0.5" />
                      </span>
                    </div>
                    <div className="p-3">
                      <p className="font-bold text-sm text-foreground">{v.city}</p>
                      <p className="text-xs text-muted-foreground">{v.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ) : (
            <div className="mt-6 grid grid-cols-2 gap-2 max-h-[300px] overflow-auto pr-2">
              {DATA.regions
                .slice()
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
                      className="inline-flex h-3 w-3 rounded-sm shrink-0"
                      style={{
                        backgroundColor: HIGHLIGHT_IDS.has(r.id)
                          ? "#0b3a8f"
                          : "var(--brand-blue)",
                      }}
                    />
                    <span className="truncate">{r.name}</span>
                  </button>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
