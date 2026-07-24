import { Link } from "@tanstack/react-router";
import { Instagram, Facebook } from "lucide-react";
import meninaAsset from "@/assets/denis-menina.jpg.asset.json";

const menina = meninaAsset.url;

const SOCIAL = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: XIcon, label: "X (Twitter)", href: "#" },
] as const;

export function Footer() {
  return (
    <footer className="relative bg-secondary text-secondary-foreground overflow-hidden">
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 pt-12 pb-16 grid gap-10 md:grid-cols-2 items-center">
        {/* LEFT — photo */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-brand aspect-[4/3] md:aspect-[5/4]">
            <img
              src={menina}
              alt="Denis Andia conversando com uma criança"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* RIGHT — logo + slogan + social */}
        <div className="flex flex-col items-start md:items-end text-left md:text-right">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground font-black text-2xl shadow-brand">
              D
            </span>
            <div className="leading-tight">
              <p className="text-[10px] font-bold tracking-[0.25em] text-primary">
                CANDIDATO
              </p>
              <p className="text-2xl font-black text-primary">
                DENIS<span className="text-foreground">ANDIA</span>
              </p>
            </div>
          </Link>

          {/* Slogan */}
          <p
            className="mt-6 text-4xl md:text-5xl leading-[0.95] text-primary"
            style={{
              fontFamily: '"Brush Script MT", "Lucida Handwriting", cursive',
            }}
          >
            Gente que <br />
            conhece gente.
          </p>

          {/* Social */}
          <div className="mt-8 w-full md:w-auto">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-foreground/80 mb-3">
              Redes Sociais
            </p>
            <ul className="flex gap-3 md:justify-end">
              {SOCIAL.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-brand transition-transform duration-200 hover:scale-110 hover:bg-foreground"
                  >
                    <s.icon className="h-5 w-5" strokeWidth={2.2} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="relative border-t border-foreground/15">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] font-bold tracking-[0.2em] uppercase text-foreground/80">
          <p>
            Candidato Denis Andia © {new Date().getFullYear()} — Todos os direitos reservados
          </p>
          <a href="#" className="hover:text-primary transition-colors">
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
