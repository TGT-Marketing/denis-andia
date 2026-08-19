import { Instagram, Facebook } from "lucide-react";
import footerBg from "@/assets/footer-bg.png.asset.json";

const SOCIAL = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/denisandia/?hl=pt" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/DenisAndiaOficial/?locale=pt_BR" },
  { icon: XIcon, label: "X / denisandia", href: "https://x.com/DenisAndia" },
] as const;

export function Footer() {
  return (
    <footer className="relative text-white overflow-hidden">
      {/* Fundo geral do rodapé — imagem inteira, sem cortes */}
      <div
        className="absolute inset-0 z-0 bg-no-repeat bg-[center_top] bg-cover md:bg-center"
        style={{ backgroundImage: `url(${footerBg.url})`, backgroundColor: "var(--ink)" }}
      />
      <div className="absolute inset-0 z-0 bg-black/40" />

      <div className="relative z-20 mx-auto max-w-[1400px] px-6 md:px-10 pt-16 pb-0 md:pb-6 min-h-[45vw] md:min-h-[42vw] flex flex-col">
        {/* Centro — chamada sobre a mão da foto central */}
        <div className="flex-1 flex flex-col items-center justify-end pb-0 md:pb-1">
          <div className="flex flex-col items-center gap-0.5 md:block">
            <p className="text-center font-black uppercase tracking-[0.2em] text-lg md:text-5xl lg:text-8xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
              Abrace o novo
            </p>
            
            {/* Mídias — em mobile fica centralizado abaixo da frase, em desktop no canto direito */}
            <div className="flex md:absolute md:right-10 md:bottom-18 items-center justify-center gap-2 md:mt-0 pb-0.5 md:pb-0">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-5 w-5 md:h-8 md:w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 hover:scale-105 transition-all"
                >
                  <s.icon className="h-2.5 w-2.5 md:h-4 md:w-4" strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="relative z-20 border-t border-foreground/15">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-3 flex flex-col md:flex-row justify-between items-center gap-1.5 text-[7px] md:text-[9px] font-semibold tracking-[0.12em] uppercase text-white/70 text-center md:text-left">
          <p>
            Candidato Denis Andia © {new Date().getFullYear()} — Todos os direitos reservados ·{" "}
            <a
              href="https://www.tgtmarketing.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Criado por Target Marketing
            </a>
          </p>

          <a href="#" className="text-[6px] md:text-[9px] hover:text-primary transition-colors">
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
