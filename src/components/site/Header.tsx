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
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-7xl px-4 md:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-black text-lg">D</span>
          <span className="text-2xl font-black tracking-tight">
            <span className="text-primary">DENIS</span>
            <span className="text-accent-foreground">.</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          <Link to="/" className="text-sm font-semibold hover:text-primary transition-colors">
            Início
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setSubOpen(true)}
            onMouseLeave={() => setSubOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-semibold hover:text-primary transition-colors">
              O que Denis fez por <ChevronDown className="h-4 w-4" />
            </button>
            {subOpen && (
              <div className="absolute left-0 top-full pt-3">
                <div className="min-w-56 rounded-xl bg-card shadow-card border border-border p-2">
                  {submenu.map((s) => (
                    <Link
                      key={s.to}
                      to={s.to}
                      className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent/40 transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <a href="#noticias" className="text-sm font-semibold hover:text-primary transition-colors">
            Notícias
          </a>
        </nav>

        <a
          href="#hero"
          className="hidden lg:inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-brand hover:opacity-90 transition-opacity"
        >
          Abrace o novo
        </a>

        <button
          className="lg:hidden p-2"
          aria-label="Abrir menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-4 py-4 flex flex-col gap-2">
            <Link to="/" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm font-semibold hover:bg-accent/40">
              Início
            </Link>
            <div className="px-3 py-1 text-xs font-bold uppercase text-muted-foreground">
              O que Denis fez por
            </div>
            {submenu.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent/40"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
