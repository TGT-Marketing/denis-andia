import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, Send } from "lucide-react";
import footerBg from "@/assets/footer-bg.png.asset.json";



const NAV: { label: string; to: string }[] = [];


const SOCIAL = [
  { icon: Instagram, label: "denisferreiradm", href: "#" },
  { icon: Youtube, label: "Denis Andia", href: "#" },
  { icon: XIcon, label: "denis_dm", href: "#" },
  { icon: Send, label: "Denis Andia", href: "#" },
] as const;

export function Footer() {
  return (
    <footer className="relative text-white overflow-hidden">
      {/* Fundo geral do rodapé */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${footerBg.url})` }}
      />
      <div className="absolute inset-0 z-0 bg-black/40" />


      <div className="relative z-20 mx-auto max-w-[1400px] px-6 md:px-10 pt-16 pb-10 grid gap-10 md:grid-cols-2">

        {/* LEFT — brand + social icons */}
        <div className="flex flex-col">
          <Link to="/" className="inline-flex flex-col leading-none text-white self-start">
            <span className="font-black tracking-tight text-4xl md:text-5xl">
              DE<span className="text-primary">N</span><span className="text-accent">I</span>S
            </span>
            <span
              aria-label="ANDIA"
              className="flex justify-between w-full text-xs md:text-sm font-black text-white -mt-0.5"
            >
              <span>A</span><span>N</span><span>D</span><span>I</span><span>A</span>
            </span>
          </Link>

          {/* Social icons small */}
          <div className="mt-6 flex items-center gap-4">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 hover:scale-105 transition-all"
              >
                <s.icon className="h-4 w-4" strokeWidth={2} />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT — nav */}
        <div className="md:pl-8 md:pt-6 self-start md:self-center md:text-right">
          <ul className="space-y-6 max-w-[240px] md:ml-auto">
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
      </div>

      {/* bottom bar */}
      <div className="relative border-t border-foreground/15">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 text-[10px] md:text-[11px] font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase text-white/80 text-center md:text-left">
          <p className="w-full md:w-auto">
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
