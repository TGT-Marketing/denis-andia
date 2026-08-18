import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CityProject {
  city: string;
  items: string[];
}

interface RegionData {
  region: string;
  cities: CityProject[];
}

const CITY_DATA: RegionData[] = [
  {
    region: "RMC",
    cities: [
      {
        city: "Santa Bárbara d’Oeste",
        items: [
          "R$ 30 milhões (Saneamento)",
          "R$ 8 milhões (Complexo Mollon e UBS Aranha Oliveira)",
          "R$ 5,7 milhões (Creche do Vila Rica)",
          "R$ 10 milhões (Pavimentações Jardim Adelia, Euclides da Cunha e Industrial de Cillo)",
          "248 Moradias do Minha Casa Minha Vida"
        ]
      },
      {
        city: "Americana",
        items: [
          "R$ 960 mil (pavimentação)",
          "R$ 2,4 milhões (pavimentação, drenagem, passeio público, acessibilidade e sinalização viária)",
          "200 Moradias do Minha Casa Minha Vida"
        ]
      },
      {
        city: "Nova Odessa",
        items: [
          "R$ 6 milhões (qualificação viária)",
          "R$ 500 mil (recapeamento)",
          "R$ 500 mil (recapeamento)",
          "150 Moradias do Minha Casa Minha Vida"
        ]
      },
      {
        city: "Sumaré",
        items: ["300 Moradias do Minha Casa Minha Vida"]
      },
      {
        city: "Hortolândia",
        items: [
          "R$ 2,3 milhões (Urbanização de espaço público com implantação de calçadas com as devidas acessibilidades, áreas de atividades físicas e áreas de convívio)",
          "400 Moradias do Minha Casa Minha Vida",
          "R$ 57 milhões (Viaduto)"
        ]
      },
      {
        city: "Artur Nogueira",
        items: [
          "R$ 2,8 milhões (pavimentação e recapeamento)",
          "Moradias do Minha Casa Minha Vida"
        ]
      },
      {
        city: "Campinas",
        items: [
          "R$ 13,5 milhões (pavimentação e qualificação viária)",
          "R$ 58 milhões (corredor de ônibus na área central)",
          "R$ 900 mil (qualificação viária)",
          "Moradias do Minha Casa Minha Vida"
        ]
      },
      {
        city: "Cosmópolis",
        items: [
          "R$ 500 mil (reforma e urbanização de praças)",
          "Moradias do Minha Casa Minha Vida"
        ]
      },
      {
        city: "Engenheiro Coelho",
        items: [
          "R$ 12 milhões (qualificação viária)",
          "R$ 1,9 milhão (recapeamento)",
          "R$ 1,9 milhão (reforma e urbanização de praças)",
          "Moradias do Minha Casa Minha Vida"
        ]
      },
      {
        city: "Holambra",
        items: [
          "R$ 500 mil (Aquisição de equipamentos computacionais e licenças de software especializados para a gestão territorial municipal)",
          "Moradias do Minha Casa Minha Vida"
        ]
      },
      {
        city: "Indaiatuba",
        items: ["R$ 117 milhões (Ampliação do Sistema de Esgoto)"]
      },
      {
        city: "Jaguariúna",
        items: ["R$ 98 milhões (qualificação viária)"]
      },
      {
        city: "Monte Mor",
        items: [
          "R$ 6 milhões (pavimentação)",
          "R$ 335 mil (recapeamento)",
          "Moradias do Minha Casa Minha Vida"
        ]
      },
      {
        city: "Pedreira",
        items: ["R$ 500 mil (calçadas acessíveis)"]
      },
      {
        city: "Valinhos",
        items: ["R$ 108 milhões (construção de ETE)"]
      }
    ]
  },
  {
    region: "RMP",
    cities: [
      {
        city: "Piracicaba",
        items: [
          "R$ 345 milhões (mobilidade urbana)",
          "R$ 700 mil (qualificação viária)",
          "R$ 80 milhões (qualificação viária)",
          "Moradias do Minha Casa Minha Vida"
        ]
      },
      {
        city: "Analândia",
        items: [
          "R$ 500 mil (Mobilidade Urbana 00T1)",
          "Moradias do Minha Casa Minha Vida"
        ]
      },
      {
        city: "Araras",
        items: ["R$ 1 milhão (Iluminação de vias)"]
      },
      {
        city: "Capivari",
        items: [
          "R$ 70 milhões (qualificação viária)",
          "R$ 500 mil (qualificação viária)",
          "R$ 1 milhão (recapeamento)",
          "Moradias do Minha Casa Minha Vida"
        ]
      },
      {
        city: "Cordeirópolis",
        items: ["R$ 120 milhões (Anel Viário)"]
      },
      {
        city: "Elias Fausto",
        items: [
          "R$ 2,1 milhões (recuperação asfáltica)",
          "R$ 2,3 milhões (pavimentação e calçadas acessíveis)"
        ]
      },
      {
        city: "Iracemápolis",
        items: ["Moradias do Minha Casa Minha Vida"]
      },
      {
        city: "Limeira",
        items: ["Moradias do Minha Casa Minha Vida"]
      },
      {
        city: "Mombuca",
        items: ["R$ 1,5 milhão (reforma e ampliação do cemitério municipal)"]
      },
      {
        city: "Rafard",
        items: [
          "R$ 300 mil (pavimentação e recuperação de vias)",
          "R$ 500 mil (iluminação pública inteligente)",
          "Moradias do Minha Casa Minha Vida"
        ]
      },
      {
        city: "Rio Claro",
        items: ["Moradias do Minha Casa Minha Vida"]
      },
      {
        city: "Rio das Pedras",
        items: ["Moradias do Minha Casa Minha Vida"]
      },
      {
        city: "Saltinho",
        items: [
          "R$ 22 milhões (mobilidade urbana)",
          "R$ 600 mil (ciclovia e iluminação pública)"
        ]
      },
      {
        city: "Santa Cruz da Conceição",
        items: ["R$ 500 mil (revitalização de espaços públicos)"]
      },
      {
        city: "Santa Maria da Serra",
        items: [
          "R$ 500 mil (recapeamento)",
          "Moradias do Minha Casa Minha Vida"
        ]
      },
      {
        city: "Amparo",
        items: ["R$ 1,2 milhão (pavimentação e recapeamento)"]
      },
      {
        city: "Bocaina",
        items: [
          "R$ 300 mil (pavimentação)",
          "R$ 500 mil (revitalização de espaços públicos)"
        ]
      },
      {
        city: "Cesário Lange",
        items: [
          "R$ 700 mil (Mobilidade Urbana)",
          "Moradias do Minha Casa Minha Vida"
        ]
      },
      {
        city: "Guareí",
        items: [
          "R$ 500 mil (Mobilidade Urbana)",
          "Moradias do Minha Casa Minha Vida"
        ]
      },
      {
        city: "Mogi Guaçu",
        items: [
          "R$ 300 mil (qualificação viária)",
          "R$ 1,9 milhão (qualificação viária)",
          "R$ 1 milhão (pavimentação e requalificação de via)"
        ]
      },
      {
        city: "Pedranópolis",
        items: [
          "R$ 500 mil (reforma e urbanização da Praça da Matriz)",
          "Moradias do Minha Casa Minha Vida"
        ]
      },
      {
        city: "Porto Feliz",
        items: ["R$ 500 mil (reabilitação de áreas urbanas)"]
      },
      {
        city: "Porto Ferreira",
        items: ["R$ 129 milhões (qualificação viária e recapeamento)"]
      },
      {
        city: "Quadra",
        items: [
          "R$ 1 milhão (pavimentação)",
          "R$ 900 mil (recapeamento e sinalização)",
          "R$ 500 mil (recapeamento)",
          "Moradias do Minha Casa Minha Vida"
        ]
      },
      {
        city: "Ribeirão Bonito",
        items: ["R$ 19 milhões (qualificação viária)"]
      },
      {
        city: "Salto",
        items: [
          "R$ 1 milhão (recapeamento)",
          "R$ 30 milhões (Abastecimento e tratamento de água)",
          "Moradias do Minha Casa Minha Vida"
        ]
      },
      {
        city: "Socorro",
        items: ["Mobilidade Urbana, Iluminação Pública, Recuperação de Praça, Recapeamento e Sinalização Viária, Macrodrenagem"]
      },
      {
        city: "Sorocaba",
        items: [
          "R$ 9,5 milhões (pavimentação)",
          "R$ 2 milhões (elaboração de projetos - corredor de ônibus corredor norte industrial)",
          "R$ 400 mil (recapeamento)",
          "R$ 1,2 milhão (recapeamento)",
          "R$ 1,2 milhão (reforma e revitalização do Parque das Águas)"
        ]
      },
      {
        city: "Tambaú",
        items: ["Moradias do Minha Casa Minha Vida"]
      },
      {
        city: "Tietê",
        items: ["R$ 500 mil (Mobilidade Urbana)"]
      },
      {
        city: "Torre de Pedra",
        items: [
          "R$ 650 mil (drenagem e pavimentação)",
          "R$ 500 mil (Construção de praça e revitalização de espaços públicos)"
        ]
      },
      {
        city: "Várzea Paulista",
        items: ["R$ 110 milhões (Mobilidade Urbana)"]
      },
      {
        city: "Estiva Gerbi",
        items: [
          "R$ 9,5 milhões (recapeamento)",
          "Moradias do Minha Casa Minha Vida"
        ]
      },
      {
        city: "Itupeva",
        items: ["R$ 500 mil (Praça e área de lazer)"]
      }
    ]
  }
];

interface CitiesModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CitiesModal({ open, onOpenChange }: CitiesModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl h-[90vh] flex flex-col p-0 overflow-hidden bg-card border-none shadow-2xl">
        <DialogHeader className="px-8 pt-8 pb-4 bg-white shrink-0">
          <DialogTitle className="text-3xl font-black text-[var(--brand-green)] uppercase tracking-tight">
            Em todas as cidades
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground font-medium">
            Confira o trabalho de Denis Andia em cada município.
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="flex-1 px-8 pb-10">
          <div className="space-y-12 py-6">
            {CITY_DATA.map((region) => (
              <div key={region.region} className="space-y-6">
                <div className="sticky top-0 bg-card/95 backdrop-blur-sm z-10 py-2 border-b border-[var(--brand-green)]/10">
                  <h3 className="text-4xl font-black text-[var(--brand-green)] tracking-tighter">
                    {region.region}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
                  {region.cities.map((city) => (
                    <div key={city.city} className="space-y-3 group">
                      <h4 className="text-lg font-bold text-foreground border-l-4 border-[var(--brand-yellow)] pl-3 group-hover:border-[var(--brand-green)] transition-colors">
                        {city.city}
                      </h4>
                      <ul className="space-y-2 pl-3">
                        {city.items.map((item, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0D9344]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}