import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export function Header() {
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);

  const submenu = [
    { to: "/sua-cidade", label: "Sua cidade" },
    { to: "/nossa-gente", label: "Nossa gente" },
    { to: "/pelo-brasil", label: "Pelo Brasil" },
  ] as const;

  return (
    <header className="absolute top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 h-24 flex items-center justify-between">
        <Link to="/" className="flex flex-col leading-none text-white">
          <span className="text-[10px] tracking-[0.35em] font-semibold text-accent">
            DEPUTADO ESTADUAL
          </span>
          <span className="text-3xl md:text-4xl font-black tracking-tight mt-1">
            DEN<span className="text-accent">I</span>S
          </span>
          <span className="text-[10px] tracking-[0.4em] font-semibold text-white/80">
            FERREIRA
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10 text-white">
          <div
            className="relative"
            onMouseEnter={() => setSubOpen(true)}
            onMouseLeave={() => setSubOpen(false)}
          >
            <button className="flex items-center gap-1.5 text-sm font-bold tracking-wider uppercase hover:text-accent transition-colors">
              O que o Denis fez por <ChevronDown className="h-4 w-4" />
            </button>
            {subOpen && (
              <div className="absolute right-0 top-full pt-4">
                <div className="min-w-56 rounded-xl bg-card text-foreground shadow-card border border-border p-2">
                  {submenu.map((s) => (
                    <Link
                      key={s.to}
                      to={s.to}
                      className="block rounded-lg px-3 py-2 text-sm font-semibold hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link to="/sua-cidade" className="text-sm font-bold tracking-wider uppercase hover:text-accent transition-colors">
            São Paulo
          </Link>
          <Link to="/pelo-brasil" className="text-sm font-bold tracking-wider uppercase hover:text-accent transition-colors">
            Brasil
          </Link>
          <span className="h-6 w-px bg-white/30" />
          <a href="#sobre" className="text-sm font-black tracking-wider uppercase hover:text-accent transition-colors">
            Sobre mim
          </a>
        </nav>

        <button
          className="lg:hidden p-2 text-white"
          aria-label="Abrir menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-ink text-white" style={{ backgroundColor: "var(--ink)" }}>
          <div className="px-6 py-4 flex flex-col gap-1">
            <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent">
              O que o Denis fez por
            </div>
            {submenu.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-semibold hover:bg-white/10"
              >
                {s.label}
              </Link>
            ))}
            <div className="h-px bg-white/10 my-2" />
            <a href="#sobre" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm font-bold uppercase tracking-wider">
              Sobre mim
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
