import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 bg-ink text-white" style={{ backgroundColor: "var(--ink)" }}>
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-black text-lg">D</span>
            <span className="text-2xl font-black">
              <span className="text-primary">DENIS</span>
              <span className="text-accent">.</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-white/70">
            Gente que conhece gente. Um novo jeito de fazer política, com escuta, presença e resultado.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold text-accent uppercase tracking-widest">Navegação</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="text-white/80 hover:text-white">Início</Link></li>
            <li><Link to="/sua-cidade" className="text-white/80 hover:text-white">Sua cidade</Link></li>
            <li><Link to="/nossa-gente" className="text-white/80 hover:text-white">Nossa gente</Link></li>
            <li><Link to="/pelo-brasil" className="text-white/80 hover:text-white">Pelo Brasil</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold text-accent uppercase tracking-widest">Contato</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>contato@denis.com.br</li>
            <li>+55 (19) 0000-0000</li>
            <li>Campinas · São Paulo</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold text-accent uppercase tracking-widest">Redes</h4>
          <div className="mt-4 flex gap-3">
            {[Instagram, Facebook, Youtube, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Rede social"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <div className="mt-6">
            <p className="text-sm text-white/70 mb-2">Receba novidades</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="seu e-mail"
                className="flex-1 rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm placeholder:text-white/50 text-white focus:outline-none focus:border-primary"
              />
              <button className="rounded-full bg-accent px-4 py-2 text-sm font-bold text-accent-foreground">
                OK
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Denis. Todos os direitos reservados.</p>
          <p>Feito com <span className="text-primary">♥</span> por quem acredita.</p>
        </div>
      </div>
    </footer>
  );
}
