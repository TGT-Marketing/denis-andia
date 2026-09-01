import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PrivacyPolicyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PrivacyPolicyModal({ open, onOpenChange }: PrivacyPolicyModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl h-[85vh] flex flex-col p-0 overflow-hidden bg-card border-none shadow-2xl">
        <DialogHeader className="px-6 md:px-8 pt-6 md:pt-8 pb-4 bg-[var(--brand-green)] shrink-0">
          <DialogTitle className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">
            Política de Privacidade
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="flex-1 px-6 md:px-8 py-6">
          <div className="space-y-6 text-sm md:text-base text-foreground leading-relaxed pb-6">
            <p>
              A presente Política de Privacidade tem por objetivo informar como o site oficial da campanha de Denis Andia trata os dados pessoais dos usuários, em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 — LGPD) e a legislação eleitoral vigente.
            </p>

            <section className="space-y-2">
              <h3 className="text-lg font-bold text-[var(--brand-green)]">1. Responsável pelo tratamento</h3>
              <p>
                O tratamento dos dados pessoais coletados por este site é realizado pela campanha eleitoral de Denis Andia, inscrita sob o CNPJ 68.293.698/0001-14, vinculada à coligação CORAGEM PARA SEGUIR AVANÇANDO — MDB.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="text-lg font-bold text-[var(--brand-green)]">2. Dados coletados</h3>
              <p>Podemos coletar os seguintes dados pessoais quando você interage com o site:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Nome completo;</li>
                <li>Endereço de e-mail;</li>
                <li>Telefone/WhatsApp;</li>
                <li>Cidade/estado de origem;</li>
                <li>Mensagens enviadas por formulários;</li>
                <li>Dados de navegação e cookies.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h3 className="text-lg font-bold text-[var(--brand-green)]">3. Finalidade do tratamento</h3>
              <p>Os dados são utilizados exclusivamente para:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Responder a dúvidas, solicitações e mensagens enviadas;</li>
                <li>Enviar informações sobre propostas, agendas e atividades da campanha;</li>
                <li>Realizar pesquisas e mapeamento de apoiadores;</li>
                <li>Cumprir obrigações legais e eleitorais;</li>
                <li>Melhorar a experiência de navegação no site.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h3 className="text-lg font-bold text-[var(--brand-green)]">4. Base legal</h3>
              <p>
                O tratamento dos dados pessoais fundamenta-se no consentimento livre, informado e inequívoco do titular, na execução de políticas públicas e no cumprimento de obrigações legais e regulatórias, conforme os artigos 7º e 11 da LGPD.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="text-lg font-bold text-[var(--brand-green)]">5. Compartilhamento de dados</h3>
              <p>
                Os dados pessoais não serão vendidos, alugados ou comercializados. Podem ser compartilhados apenas com prestadores de serviço essenciais ao funcionamento da campanha, como plataformas de envio de e-mail e mensagens, sempre mediante contrato e com obrigações de sigilo e segurança.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="text-lg font-bold text-[var(--brand-green)]">6. Cookies e tecnologias de rastreamento</h3>
              <p>
                Utilizamos cookies e ferramentas de análise para melhorar a navegação, entender o comportamento dos visitantes e otimizar a comunicação da campanha. O usuário pode desativar os cookies nas configurações do navegador, mas algumas funcionalidades do site podem ser limitadas.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="text-lg font-bold text-[var(--brand-green)]">7. Segurança da informação</h3>
              <p>
                Adotamos medidas técnicas e administrativas adequadas para proteger os dados pessoais contra acessos não autorizados, vazamentos, alterações ou destruição. No entanto, nenhum sistema é totalmente inviolável.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="text-lg font-bold text-[var(--brand-green)]">8. Direitos do titular</h3>
              <p>De acordo com a LGPD, você tem direito a:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Confirmar a existência de tratamento dos seus dados;</li>
                <li>Acessar os dados pessoais tratados;</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
                <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários;</li>
                <li>Revogar o consentimento a qualquer momento;</li>
                <li>Solicitar portabilidade dos dados.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h3 className="text-lg font-bold text-[var(--brand-green)]">9. Encarregado de dados</h3>
              <p>
                Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato pelo e-mail: <a href="mailto:contato@denisandia.com.br" className="text-[var(--brand-green)] hover:underline">contato@denisandia.com.br</a>.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="text-lg font-bold text-[var(--brand-green)]">10. Alterações nesta política</h3>
              <p>
                Esta Política de Privacidade pode ser atualizada periodicamente. Recomendamos que o usuário a consulte sempre que acessar o site. A data da última atualização será indicada ao final deste documento.
              </p>
            </section>

            <p className="text-xs text-muted-foreground pt-4 border-t border-border">
              Última atualização: 1º de setembro de 2026.
            </p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
