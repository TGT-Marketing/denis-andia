import { Link } from "@tanstack/react-router";
import { Instagram, Facebook } from "lucide-react";
import criancaImg from "@/assets/denis-crianca.png";

const NAV = [
  { label: "Sua cidade", to: "/sua-cidade" },
  { label: "Nossa gente", to: "/nossa-gente" },
  { label: "Pelo Brasil", to: "/pelo-brasil" },
  { label: "Sobre o Denis", to: "/sobre-mim" },
] as const;

const SOCIAL = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: XIcon, label: "X (Twitter)", href: "#" },
] as const;

export function Footer() {
  return (
    <footer className="relative bg-secondary text-secondary-foreground overflow-hidden">
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 pt-12 pb-10 grid gap-10 md:grid-cols-2 items-end">
        {/* LEFT — Denis hugging child */}
        <div className="relative flex justify-center md:justify-start">
          <img
            src={criancaImg}
            alt="Denis Andia abraçando uma criança"
            width={640}
            height={640}
            loading="lazy"
            className="h-[280px] md:h-[380px] w-auto object-contain drop-shadow-xl"
          />
        </div>

        {/* RIGHT — logo + slogan + socials */}
        <div className="flex flex-col items-start md:items-end text-left md:text-right">
          <div className="flex items-center gap-3">
            <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground font-black text-2xl shadow-brand">
              D
            </span>
            <div className="leading-tight">
              <p className="text-[10px] font-bold tracking-[0.25em] text-primary">CANDIDATO</p>
              <p className="text-2xl md:text-3xl font-black text-foreground">
                DENIS <span className="text-primary">ANDIA</span>
              </p>
            </div>
          </div>

          <p
            className="mt-6 text-4xl md:text-5xl leading-[0.95] text-primary"
            style={{ fontFamily: '"Brush Script MT", "Lucida Handwriting", cursive' }}
          >
            Gente que <br />
            conhece gente.
          </p>

          <div className="mt-8 w-full max-w-sm md:ml-auto">
            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-foreground/70 mb-3">
              Redes sociais
            </p>
            <div className="flex gap-3 md:justify-end">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-foreground transition-colors shadow-brand"
                >
                  <s.icon className="h-5 w-5" strokeWidth={2.2} />
                </a>
              ))}
            </div>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
            {NAV.map((n) => (
              <li key={n.label}>
                <Link
                  to={n.to}
                  className="text-xs font-black uppercase tracking-[0.2em] text-foreground/80 hover:text-primary transition-colors border-b border-transparent hover:border-primary"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tri-color bottom strip */}
      <div className="grid grid-cols-3">
        <div className="h-2" style={{ background: "var(--brand-green)" }} />
        <div className="h-2" style={{ background: "var(--brand-yellow)" }} />
        <div className="h-2" style={{ background: "#123a86" }} />
      </div>

      <div className="relative bg-ink text-white/80" style={{ backgroundColor: "var(--ink)" }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] font-bold tracking-[0.2em] uppercase">
          <p>Denis Andia © {new Date().getFullYear()} — Todos os direitos reservados</p>
          <a href="#" className="hover:text-accent transition-colors">Política de Privacidade</a>
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
