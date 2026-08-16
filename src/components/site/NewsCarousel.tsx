import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback } from "react";
import news1Asset from "@/assets/news/news_1.jpeg.asset.json";
import news2Asset from "@/assets/news/news_2.jpeg.asset.json";
import news3Asset from "@/assets/news/news_3.jpg.asset.json";
import news4Asset from "@/assets/news/news_4.jpg.asset.json";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const NEWS = [
  {
    image: news1Asset.url,
    date: "Eleições 2026",
    title: "Eleições 2026: Denis Andia desponta como principal nome da região",
    excerpt: "Nas eleições deste ano, Santa Bárbara d’Oeste, Americana e região podem voltar a ter um Deputado Federal em Brasília. Com poucos candidatos locais na disputa, destaca-se o nome do ex-prefeito Denis Andia.",
    fullContent: (
      <div className="space-y-4 text-foreground leading-relaxed">
        <p>
          Nas eleições deste ano, Santa Bárbara d’Oeste, Americana e região podem voltar a ter um Deputado Federal em Brasília. Com poucos candidatos locais na disputa, destaca-se o nome do ex-prefeito de Santa Bárbara d’Oeste, Denis Andia, que possui forte expressão regional.
        </p>
        <p>
          Em 2022, Denis esteve muito próximo da eleição em sua primeira tentativa, sendo o candidato a Deputado Federal mais votado da Região Metropolitana de Campinas, com 75 mil votos. Ficou na suplência, a apenas 4.900 votos de conquistar uma cadeira na Câmara dos Deputados.
        </p>
        <p>
          Considerando apenas as cidades de Santa Bárbara d’Oeste, Americana e Nova Odessa, Denis Andia somou expressivos 68.291 votos, bem à frente de Vanderlei Macris (19.741) e Maria Giovana (18.343). Dos três nomes, apenas Denis Andia disputará as eleições para Deputado Federal neste ano, o que pode ampliar sua votação local e garantir uma vaga em Brasília para a região.
        </p>
        <p>
          Já para Deputado Estadual, a região conta com alguns candidatos com chances de sucesso, como Franco Sardelli e Ricardo Molina, de Americana, além de Esther Moraes e Celso Ávila, de Santa Bárbara d’Oeste.
        </p>
        <p>
          É importante lembrar que Ricardo Molina esteve próximo da eleição em 2022, quando ficou na suplência, e pode repetir o bom desempenho na região. Franco, filho do prefeito Chico Sardelli, disputará pela primeira vez, mas conta com o apoio da estrutura política do pai. Em Santa Bárbara d’Oeste, Esther Moraes foi a vereadora mais votada em 2024 e aparece como uma das principais promessas. Já Celso Ávila tem no histórico quatro eleições seguidas como vereador.
        </p>
        <p>
          A região já teve quatro deputados eleitos ao mesmo tempo e pode voltar a ter representantes tanto na Assembleia Legislativa de São Paulo quanto na Câmara dos Deputados, em Brasília. O desafio, neste momento, é o eleitor compreender essa nova oportunidade e focar nos candidatos locais com maior potencial eleitoral.
        </p>
      </div>
    ),
  },
  {
    image: news2Asset.url,
    date: "Mandato Real",
    title: "Denis Andia defende “mandato real” e coloca experiência a serviço dos Municípios",
    excerpt: "Pré-candidato a deputado federal, Denis Andia apresenta uma proposta baseada na proximidade com a população e na busca por soluções concretas para os desafios do dia a dia.",
    fullContent: (
      <div className="space-y-4 text-foreground leading-relaxed">
        <p>
          Pré-candidato a deputado federal, Denis Andia apresenta uma proposta baseada na proximidade com a população, no diálogo com as cidades e na busca por soluções concretas para os desafios do dia a dia.
        </p>
        <p>
          Com o conceito de “mandato real”, Denis afirma que pretende atuar de forma próxima das pessoas, trabalhando diretamente nas necessidades da população e fortalecendo a relação entre Brasília e os municípios.
        </p>
        <p>
          Entre as prioridades defendidas pelo pré-candidato estão a melhoria do transporte público, a redução gradual da tarifa e o fortalecimento das entidades e serviços que atendem a população. Denis também destaca a importância do Marco Legal do Transporte Público, aprovado pelo Congresso Nacional, como instrumento para ampliar investimentos e melhorar a mobilidade urbana.
        </p>
        <p>
          “Meu trabalho sempre foi na linha construtiva, buscando melhorias reais para as pessoas. Quero levar essa experiência para Brasília e ampliar ainda mais a capacidade de trazer recursos e investimentos para os municípios”, afirma.
        </p>
        <p>
          Denis Andia ressalta ainda sua experiência na administração pública e na articulação de verbas para cidades brasileiras durante sua atuação como secretário nacional de mobilidade urbana. Segundo ele, como deputado federal será possível ampliar esse trabalho, representando cerca de 40 a 50 municípios de forma ativa e próxima.
        </p>
        <p>
          “Precisamos aproximar Brasília das cidades. Quem vive a realidade da população sabe onde estão as prioridades”, destaca.
        </p>
        <p>
          Ao lembrar sua trajetória política, Denis afirma que aproveitou as oportunidades recebidas dos barbadenses para desenvolver um trabalho voltado à transformação de Santa Bárbara d’Oeste e à melhoria da qualidade de vida da população.
        </p>
      </div>
    ),
  },
  {
    image: news3Asset.url,
    date: "Mobilidade Urbana",
    title: "Denis Andia trabalha por um transporte público mais acessível",
    excerpt: "Um programa nacional que visa reduzir as tarifas de ônibus é um dos trabalhos já iniciados por Denis Andia à frente da Secretaria Nacional de Mobilidade Urbana.",
    fullContent: (
      <div className="space-y-4 text-foreground leading-relaxed">
        <p>
          Um programa nacional que visa reduzir as tarifas de ônibus é um dos trabalhos já iniciados por Denis Andia à frente da Secretaria Nacional de Mobilidade Urbana.
        </p>
        <p>
          O primeiro e importante passo para isso foi a aprovação do Marco Legal do Transporte Público, nova lei apresentada e liderada pelo ex-prefeito barbarense em Brasília, aprovada e sancionada.
        </p>
        <p>
          A partir dessa lei, que reorganiza as atividades e operações do transporte público em todo o Brasil, abrem-se as portas para a criação do Sistema Único de Mobilidade Urbana (SUM) — uma espécie de SUS do transporte público coletivo, visando integrar investimentos federais, estaduais e municipais para garantir tarifas menores aos brasileiros.
        </p>
        <p>
          “Algumas etapas já foram superadas para a criação do SUM. Ampliamos os investimentos em infraestrutura, renovação de frotas e agora temos o Novo Marco Legal, que permite a construção de um programa de financiamento que vai reduzir as tarifas em todas as cidades do Brasil”, afirma Denis Andia.
        </p>
        <p>
          A ideia é permitir que os governos estaduais e a União também possam investir nos sistemas, para que os preços das passagens fiquem menores para os usuários. Atualmente, o governo federal já conta com recursos arrecadados, mas não integralmente utilizados para essa finalidade, como os provenientes do vale-transporte dos trabalhadores. O SUM permitirá canalizar essa e outras fontes de recursos em benefício dos passageiros.
        </p>
        <p>
          “Quanto mais acessível for o transporte público para o cidadão, mais pessoas o utilizarão. E, com mais pessoas no transporte público, haverá menos carros e motos nas ruas. Trânsito melhor, maior mobilidade urbana e menos acidentes. Todos ganham”, ressalta Andia.
        </p>
        <p>
          Essa é uma ideia antiga que começou a sair do papel para se tornar realidade, em grande parte devido ao trabalho técnico e político conduzido pelo ex-prefeito barbarense em Brasília.
        </p>
        <p>
          “Muitos prefeitos sonham com a Tarifa Zero no transporte público. Esse é o caminho para que ela se torne realidade. Quando administrei Santa Bárbara d’Oeste, implantei a tarifa zero aos sábados. Isso mudou a dinâmica da cidade e fortaleceu muito o comércio local, reflexo que permanece até hoje. Essa experiência foi pioneira no Brasil e passou a ser referência em todo o país”, lembrou Denis.
        </p>
        <p>
          Agora, como pré-candidato a deputado federal, Denis Andia pretende trabalhar pela aprovação das leis complementares que permitirão ao SUM avançar e ser implantado.
        </p>
      </div>
    ),
  },
  {
    image: news4Asset.url,
    date: "Artigo",
    title: "O CAMINHO DE CASA - Por Denis Andia",
    excerpt: "Há caminhos que mudam de paisagem, mas nunca mudam de destino. E agora, o tempo faz mais uma curva bonita. Voltei para uma nova caminhada.",
    fullContent: (
      <div className="space-y-4 text-foreground leading-relaxed">
        <p className="font-bold italic text-lg">Por Denis Andia</p>
        <p>
          Há caminhos que mudam de paisagem, mas nunca mudam de destino.
        </p>
        <p>
          Nos últimos anos, o trabalho me levou a Brasília, onde portas precisavam ser abertas, pontes construídas, para ajudar nossas cidades no desafio de crescer.
        </p>
        <p>
          Trabalho que fez sentido porque tinha endereço certo: a nossa gente.
        </p>
        <p>
          Por isso, toda semana, eu voltava. Voltava para rever os olhos conhecidos, escutar uma conversa na calçada. Porque é no encontro que a gente aprende. É ouvindo que a gente entende. É caminhando junto que a gente acerta o passo.
        </p>
        <p>
          E agora, o tempo faz mais uma curva bonita. Voltei para uma nova caminhada. Não para começar de novo, mas para continuar o que a gente nunca deixou de lado: fazer o certo, para fazer bem feito!
        </p>
        <p>
          Nestes primeiros meses, a região me convidou para conhecê-la ainda melhor. Aceitei com prazer e honra. Visitei cidades e lugares onde o nosso trabalho já havia chegado.
        </p>
        <p>
          Agora é hora de andar pelas nossas ruas, entrar nos nossos bairros, ouvir quem acorda cedo, quem trabalha duro. Quero escutar mais do que falar. Aprender mais. Juntar forças e esforços - como sempre fizemos juntos.
        </p>
        <p>
          Afinal, a nossa história você sabe que é de verdade, porque você a viu acontecer. Compromisso que não muda, de quem carrega a sua gente dentro do peito e que por onde vai, sabe o caminho de casa.
        </p>
        <p className="font-bold text-primary text-xl">Vamos em frente!</p>
      </div>
    ),
  },
];

export function NewsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    const interval = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative">
      <div ref={emblaRef} className="overflow-hidden rounded-3xl">
        <div className="flex">
          {NEWS.map((n, i) => (
            <div key={i} className="min-w-0 shrink-0 grow-0 basis-full md:basis-1/2 lg:basis-1/3 pr-4">
              <article className="h-full rounded-2xl bg-card shadow-card overflow-hidden">
                <img src={n.image} alt={n.title} loading="lazy" className="h-52 w-full object-cover" />
                <div className="p-5">
                  <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    {n.date}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-foreground">{n.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{n.excerpt}</p>
                  {n.fullContent ? (
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="mt-4 text-sm font-semibold text-primary hover:underline cursor-pointer">
                          Ler mais →
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl w-[95vw] md:w-full h-fit max-h-[90vh] flex flex-col p-0 overflow-hidden border-none bg-background shadow-2xl rounded-2xl">
                        <div className="relative h-48 md:h-72 w-full shrink-0">
                          <img 
                            src={n.image} 
                            alt={n.title} 
                            className="h-full w-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                        </div>
                        <div className="flex-1 min-h-0 flex flex-col px-6 pb-2 -mt-12 relative z-10">
                          <DialogHeader className="mb-4 shrink-0">
                            <span className="inline-block w-fit rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground mb-3">
                              {n.date}
                            </span>
                            <DialogTitle className="text-xl md:text-3xl font-bold text-foreground leading-tight text-left">
                              {n.title}
                            </DialogTitle>
                          </DialogHeader>
                          <ScrollArea className="flex-1 w-full overflow-y-auto pr-4">
                            <div className="pb-10 pt-2">
                              {n.fullContent}
                            </div>
                          </ScrollArea>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <button className="mt-4 text-sm font-semibold text-primary hover:underline">
                      Ler mais →
                    </button>
                  )}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-2">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Ir para slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === selectedIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={scrollPrev}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-card shadow-card text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={scrollNext}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-brand hover:opacity-90 transition-opacity"
            aria-label="Próximo slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
