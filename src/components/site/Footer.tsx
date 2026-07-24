import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, Send } from "lucide-react";
import denisCutout from "@/assets/denis-footer-cutout.png";
import denisLogo from "@/assets/denis-logo.png.asset.json";



const NAV = [
  { label: "Emendas", to: "/pelo-brasil" },
  { label: "Projetos de Lei", to: "/nossa-gente" },
  { label: "Biografia", to: "/biografia" },
] as const;

const SOCIAL = [
  { icon: Instagram, label: "denisferreiradm", href: "#" },
  { icon: Youtube, label: "Denis Andia", href: "#" },
  { icon: XIcon, label: "denis_dm", href: "#" },
  { icon: Send, label: "Denis Andia", href: "#" },
] as const;

export function Footer() {
  return (
    <footer className="relative bg-secondary text-secondary-foreground overflow-hidden">
      {/* Cutout do Denis ao centro (igual ao header do site de referência) */}
      <img
        src={denisCutout}
        alt="Denis Andia"
        className="pointer-events-none select-none hidden md:block absolute left-[34%] bottom-0 -translate-x-1/2 h-[110%] w-auto object-contain object-bottom z-0"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10 pt-16 pb-16 grid gap-14 md:grid-cols-3">

        {/* LEFT — brand (mesmo logo do header) */}
        <div className="flex flex-col">
          <Link to="/" className="inline-block">
            <img
              src={denisLogo.url}
              alt="Denis Andia 1540 - Deputado Federal"
              className="h-20 md:h-24 w-auto object-contain"
            />
          </Link>


          <p
            className="mt-8 text-4xl md:text-5xl leading-[0.95] text-white"
            style={{
              fontFamily:
                '"Brush Script MT", "Lucida Handwriting", cursive',
            }}
          >
            Gente que <br />
            conhece gente.
          </p>
        </div>


        {/* MIDDLE — nav (spacer for image on desktop) */}
        <div className="md:pl-8 md:pt-6 self-end md:self-center">
          <ul className="space-y-6 max-w-[240px] ml-auto">
            {NAV.map((n) => (
              <li key={n.label} className="border-b border-foreground/30 pb-2">
                <Link
                  to={n.to}
                  className="block text-lg font-black uppercase tracking-wide text-foreground hover:text-primary transition-colors"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT — social card */}
        <div className="flex flex-col items-start md:items-end">
          <h4 className="text-2xl font-black text-foreground mb-4">
            Redes Sociais
          </h4>
          <div
            className="w-full max-w-sm rounded-3xl p-4 shadow-brand"
            style={{ backgroundColor: "var(--brand-blue)" }}
          >
            <ul className="space-y-2">
              {SOCIAL.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="flex items-center gap-3 rounded-2xl px-3 py-2.5 hover:bg-white/40 transition-colors"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-foreground">
                      <s.icon className="h-5 w-5" strokeWidth={2.2} />
                    </span>
                    <span className="text-sm font-semibold text-foreground">
                      {s.label}
                    </span>
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
            Candidato Denis Andia © {new Date().getFullYear()} — Todos os direitos reservados ·{" "}
            <a
              href="https://www.targetmarketingdigital.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Criado por Target Marketing
            </a>
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
