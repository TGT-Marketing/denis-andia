import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const submenu = [
    { to: "/sua-cidade", label: "Por sua cidade" },
    { to: "/nossa-gente", label: "Por nossa gente" },
    { to: "/pelo-brasil", label: "Pelo Brasil" },
  ] as const;


  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md shadow-brand" : ""
      }`}
      style={scrolled ? { backgroundColor: "color-mix(in oklab, var(--ink) 88%, transparent)" } : undefined}
    >
      <div className={`mx-auto max-w-[1400px] px-6 md:px-10 flex items-center justify-between transition-all duration-300 ${scrolled ? "h-16" : "h-24"}`}>
        <Link to="/" className="inline-flex flex-col leading-none text-white">
          <span className={`font-black tracking-tight transition-all ${scrolled ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl"}`}>
            DE<span className="text-primary">N</span><span className="text-accent">I</span>S
          </span>
          <span
            aria-label="ANDIA"
            className="flex justify-between w-full text-[13px] md:text-sm font-black text-white -mt-0.5"
          >
            <span>A</span><span>N</span><span>D</span><span>I</span><span>A</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10 text-white">
          <Link to="/sua-cidade" className="text-sm font-bold tracking-wider uppercase hover:text-accent transition-colors">
            Por sua cidade
          </Link>
          <Link to="/nossa-gente" className="text-sm font-bold tracking-wider uppercase hover:text-accent transition-colors">
            Por nossa gente
          </Link>
          <Link to="/pelo-brasil" className="text-sm font-bold tracking-wider uppercase hover:text-accent transition-colors">
            Pelo Brasil
          </Link>
          <span className="h-6 w-px bg-white/30" />
          <Link to="/biografia" className="text-sm font-black tracking-wider uppercase hover:text-accent transition-colors">
            Sobre o Denis
          </Link>
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
            <Link to="/biografia" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm font-bold uppercase tracking-wider">
              Sobre o Denis
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}
