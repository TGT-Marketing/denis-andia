import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import walkAsset from "@/assets/denis-chapeu.jpg.asset.json";
import rallyBgAsset from "@/assets/denis-menina.jpg.asset.json";
import cutoutAsset from "@/assets/denis-trabalho.jpg.asset.json";

const walkImg = walkAsset.url;
const rallyBg = rallyBgAsset.url;
const cutout = cutoutAsset.url;

export const Route = createFileRoute("/sobre-mim")({
  head: () => ({
    meta: [
      { title: "Sobre mim — Denis Andia" },
      { name: "description", content: "Conheça a história, a trajetória e os valores do deputado Denis Andia." },
      { property: "og:title", content: "Sobre mim — Denis Andia" },
      { property: "og:description", content: "Um coração inquieto diante das dificuldades não pode ficar parado." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SobreMim,
});

function SobreMim() {
  return (
    <Layout transparentHeader>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-white" style={{ backgroundColor: "var(--ink)" }}>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${rallyBg})` }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, color-mix(in oklab, var(--ink) 80%, transparent), color-mix(in oklab, var(--ink) 40%, transparent), var(--ink))" }}
        />
        <div className="relative mx-auto max-w-[1400px] px-4 md:px-10 pt-40 pb-24 grid gap-10 lg:grid-cols-[1.1fr_1fr] items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-accent">Sobre mim</p>
            <h1 className="mt-4 text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">
              Um coração
              <span className="block text-accent italic font-serif font-normal my-2">inquieto</span>
              diante das dificuldades.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/85">
              Denis nasceu no interior paulista, cresceu vendo de perto as lutas da sua gente
              e transformou a vontade de servir em compromisso público.
            </p>
          </div>
          <div className="relative hidden lg:block">
            <img
              src={cutout}
              alt="Denis Andia"
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* TRAJETÓRIA */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-10 grid gap-14 lg:grid-cols-[1fr_1.1fr] items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-primary rounded-[2rem] rotate-[-3deg]" />
            <img
              src={walkImg}
              alt="Denis com apoiadores"
              className="relative rounded-[1.5rem] shadow-brand w-full h-auto object-cover aspect-[4/5]"
            />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Trajetória</p>
            <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tight">
              Uma vida dedicada
              <span className="block text-primary italic font-serif font-normal my-1">à sua gente.</span>
            </h2>
            <div className="mt-6 space-y-5 text-lg text-muted-foreground">
              <p>
                Filho de trabalhadores, Denis aprendeu cedo o valor do esforço e da honestidade.
                Começou a militar em movimentos comunitários ainda jovem, ouvindo as demandas
                de quem mais precisa.
              </p>
              <p>
                Como deputado, tem levado ao parlamento a voz das cidades do interior, defendendo
                educação de qualidade, segurança pública, saúde acessível e oportunidades reais
                para a nossa juventude.
              </p>
              <p>
                Anda pelas ruas, escuta, atua e leva resultado — sem palanque, sem pose.
                Porque política de verdade se faz perto de gente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Valores</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight">
            No que a gente acredita.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { t: "Escuta ativa", d: "Estar perto, ouvir e responder. A política começa na conversa." },
              { t: "Trabalho honesto", d: "Transparência em cada emenda, em cada projeto, em cada agenda." },
              { t: "Coragem", d: "Enfrentar o que precisa ser enfrentado, com firmeza e respeito." },
            ].map((v) => (
              <div key={v.t} className="rounded-2xl bg-card p-8 shadow-card border border-border">
                <h3 className="text-xl font-black">{v.t}</h3>
                <p className="mt-3 text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-white py-20" style={{ backgroundColor: "var(--ink)" }}>
        <div className="mx-auto max-w-[1000px] px-4 md:px-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Vamos juntos <span className="text-accent italic font-serif font-normal">abraçar o novo?</span>
          </h2>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              to="/sua-cidade"
              className="inline-flex items-center rounded-full bg-primary px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-brand hover:opacity-90 transition"
            >
              Ver trabalho por cidade
            </Link>
            <Link
              to="/pelo-brasil"
              className="inline-flex items-center rounded-full border-2 border-white/80 px-8 py-3.5 text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-ink transition"
            >
              Pelo Brasil
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
