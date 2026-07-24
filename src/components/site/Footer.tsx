import { Link } from "@tanstack/react-router";
import { Instagram, Facebook } from "lucide-react";
import criancaAsset from "@/assets/denis-crianca.png.asset.json";

const crianca = criancaAsset.url;

const NAV = [
  { label: "Sua cidade", to: "/sua-cidade" },
  { label: "Nossa gente", to: "/nossa-gente" },
  { label: "Pelo Brasil", to: "/pelo-brasil" },
  { label: "Biografia", to: "/biografia" },
] as const;

export function Footer() {
  return (
    <footer className="relative bg-secondary text-secondary-foreground overflow-hidden">
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 pt-16 pb-8 grid gap-10 md:grid-cols-[1.1fr_1fr] items-end min-h-[520px]">
        {/* LEFT — child hug image */}
        <div className="relative flex items-end justify-center md:justify-start">
          <img
            src={crianca}
            alt="Denis Andia abraçando uma criança"
            className="max-h-[500px] w-auto object-contain object-bottom drop-shadow-2xl"
            loading="lazy"
          />
        </div>

        {/* RIGHT — brand + nav + social */}
        <div className="flex flex-col gap-8 pb-6">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary text-primary-foreground font-black text-2xl shadow-brand">
                D
              </span>
              <div className="leading-tight">
                <p className="text-[10px] font-bold tracking-[0.3em] text-primary uppercase">
                  Candidato
                </p>
                <p className="text-3xl font-black text-foreground">
                  Denis <span className="text-primary">Andia</span>
                </p>
              </div>
            </div>
            <p
              className="mt-5 text-4xl md:text-5xl leading-[0.95] text-primary"
              style={{ fontFamily: '"Brush Script MT", "Lucida Handwriting", cursive' }}
            >
              Gente que <br /> conhece gente.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-3 max-w-md">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm font-black uppercase tracking-wide text-foreground border-b border-foreground/30 pb-1 hover:text-primary hover:border-primary transition-colors"
              >
                {n.label}
              </Link>
            ))}
          </div>

          <div>
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-foreground/70 mb-2">
              Redes sociais
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" strokeWidth={2.2} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" strokeWidth={2.2} />
              </a>
              <a
                href="#"
                aria-label="X (Twitter)"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <XIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Tricolor bar */}
      <div className="grid grid-cols-3 h-2">
        <span style={{ backgroundColor: "var(--brand-green)" }} />
        <span style={{ backgroundColor: "var(--brand-yellow)" }} />
        <span style={{ backgroundColor: "#0b3a8f" }} />
      </div>

      {/* bottom bar */}
      <div className="relative bg-ink text-white/80" style={{ backgroundColor: "var(--ink)" }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-4 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] font-bold tracking-[0.2em] uppercase">
          <p>Denis Andia © {new Date().getFullYear()} — Todos os direitos reservados</p>
          <a href="#" className="hover:text-accent transition-colors">
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}
