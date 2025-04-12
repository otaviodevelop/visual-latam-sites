
import Layout from "../components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, FileText, Code, Workflow, CreditCard, AlarmClock, Key, AlertTriangle, Mail } from "lucide-react";

const TermsOfServicePage = () => {
  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Termos de Serviço</h1>
            <div className="flex items-center justify-center">
              <FileText className="text-tech-purple h-6 w-6 mr-2" />
              <p className="text-tech-gray">
                Última atualização: {new Date().toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
          
          <div className="space-y-12">
            {/* Introdução */}
            <Card className="glass-card overflow-hidden border-tech-purple/20">
              <CardContent className="p-8">
                <p className="text-lg text-tech-gray leading-relaxed">
                  Bem-vindo aos Termos de Serviço da Otávio Augusto! Estes termos regulam o uso de nosso site e 
                  serviços. Por favor, leia-os cuidadosamente antes de utilizar nossos serviços.
                </p>
              </CardContent>
            </Card>

            {/* Seção 1 */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-tech-purple/10 p-3 rounded-lg">
                  <FileText className="h-6 w-6 text-tech-purple" />
                </div>
                <h2 className="text-2xl font-bold text-white">1. Aceitação dos termos</h2>
              </div>
              
              <Card className="glass-card border-tech-purple/10">
                <CardContent className="p-6">
                  <p className="text-tech-gray">
                    Ao acessar e utilizar os serviços de Otávio Augusto, você aceita estar sujeito a estes Termos 
                    de Serviço. Eles constituem um acordo legal entre você e Otávio Augusto. Se você não concorda 
                    com qualquer parte destes termos, não poderá utilizar nossos serviços. O uso continuado de 
                    nosso site após a publicação de quaisquer alterações a estes termos constitui sua aceitação 
                    dessas alterações.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Seção 2 */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-tech-purple/10 p-3 rounded-lg">
                  <Code className="h-6 w-6 text-tech-purple" />
                </div>
                <h2 className="text-2xl font-bold text-white">2. Descrição do serviço</h2>
              </div>
              
              <Card className="glass-card border-tech-purple/10">
                <CardContent className="p-6">
                  <p className="text-tech-gray mb-4">
                    Otávio Augusto fornece serviços de desenvolvimento web, incluindo, mas não limitado a:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-tech-purple/5 p-4 rounded-lg border border-tech-purple/20">
                      <h3 className="text-white font-medium mb-2">Design de sites</h3>
                      <p className="text-tech-gray text-sm">Criação de layouts modernos e responsivos</p>
                    </div>
                    <div className="bg-tech-purple/5 p-4 rounded-lg border border-tech-purple/20">
                      <h3 className="text-white font-medium mb-2">Desenvolvimento frontend</h3>
                      <p className="text-tech-gray text-sm">Implementação de interfaces interativas</p>
                    </div>
                    <div className="bg-tech-purple/5 p-4 rounded-lg border border-tech-purple/20">
                      <h3 className="text-white font-medium mb-2">Landing pages</h3>
                      <p className="text-tech-gray text-sm">Páginas otimizadas para conversão</p>
                    </div>
                    <div className="bg-tech-purple/5 p-4 rounded-lg border border-tech-purple/20">
                      <h3 className="text-white font-medium mb-2">Sites institucionais</h3>
                      <p className="text-tech-gray text-sm">Websites completos para empresas</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Seção 3 */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-tech-purple/10 p-3 rounded-lg">
                  <Workflow className="h-6 w-6 text-tech-purple" />
                </div>
                <h2 className="text-2xl font-bold text-white">3. Processo de trabalho</h2>
              </div>
              
              <Card className="glass-card border-tech-purple/10">
                <CardContent className="p-6">
                  <p className="text-tech-gray mb-4">
                    Nosso processo de trabalho inclui:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <div className="bg-tech-purple/20 rounded-full flex items-center justify-center h-8 w-8 mr-3 flex-shrink-0">
                        <span className="text-tech-purple font-medium">1</span>
                      </div>
                      <span className="text-tech-gray">Consulta inicial para entender suas necessidades</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-tech-purple/20 rounded-full flex items-center justify-center h-8 w-8 mr-3 flex-shrink-0">
                        <span className="text-tech-purple font-medium">2</span>
                      </div>
                      <span className="text-tech-gray">Proposta de projeto com escopo, tempo e orçamento</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-tech-purple/20 rounded-full flex items-center justify-center h-8 w-8 mr-3 flex-shrink-0">
                        <span className="text-tech-purple font-medium">3</span>
                      </div>
                      <span className="text-tech-gray">Desenvolvimento iterativo com revisões periódicas</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-tech-purple/20 rounded-full flex items-center justify-center h-8 w-8 mr-3 flex-shrink-0">
                        <span className="text-tech-purple font-medium">4</span>
                      </div>
                      <span className="text-tech-gray">Entrega final e período de suporte</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Seção 4 */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-tech-purple/10 p-3 rounded-lg">
                  <Key className="h-6 w-6 text-tech-purple" />
                </div>
                <h2 className="text-2xl font-bold text-white">4. Direitos de propriedade intelectual</h2>
              </div>
              
              <Card className="glass-card border-tech-purple/10">
                <CardContent className="p-6">
                  <p className="text-tech-gray">
                    Uma vez completado o pagamento total do projeto, o cliente receberá todos os direitos de propriedade 
                    intelectual pertinentes sobre o trabalho entregue, exceto para elementos de terceiros (como bibliotecas 
                    de código aberto, imagens com licença, etc.) que estão sujeitos às suas respectivas licenças. Até que o 
                    pagamento total seja recebido, todos os direitos permanecem com Otávio Augusto. A menos que seja acordado 
                    por escrito, o desenvolvedor mantém o direito de exibir o trabalho como parte de seu portfólio.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Seção 5 */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-tech-purple/10 p-3 rounded-lg">
                  <CreditCard className="h-6 w-6 text-tech-purple" />
                </div>
                <h2 className="text-2xl font-bold text-white">5. Pagamentos e faturamento</h2>
              </div>
              
              <Card className="glass-card border-tech-purple/10">
                <CardContent className="p-6">
                  <div className="bg-tech-purple/5 p-5 rounded-lg border border-tech-purple/20 mb-4">
                    <h3 className="text-white font-medium mb-2">Estrutura de pagamento</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-tech-purple">50%</div>
                        <p className="text-tech-gray">Depósito inicial antes do início do trabalho</p>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-tech-purple">50%</div>
                        <p className="text-tech-gray">Pagamento final na conclusão do projeto</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-tech-gray">
                    Os métodos de pagamento aceitos e os prazos específicos serão detalhados no contrato 
                    de cada projeto. Faturas não pagas podem resultar na suspensão do trabalho ou na retenção 
                    do acesso ao trabalho concluído até que o pagamento seja recebido.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Seção 6 */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-tech-purple/10 p-3 rounded-lg">
                  <AlarmClock className="h-6 w-6 text-tech-purple" />
                </div>
                <h2 className="text-2xl font-bold text-white">6. Cancelamentos e reembolsos</h2>
              </div>
              
              <Card className="glass-card border-tech-purple/10">
                <CardContent className="p-6">
                  <div className="bg-tech-dark/50 p-4 rounded-lg border border-tech-purple/10 mb-4">
                    <p className="text-tech-gray italic">
                      "Em caso de cancelamento por parte do cliente, os depósitos não são reembolsáveis. 
                      Se o trabalho já tiver começado, será cobrado pelo trabalho realizado até a data de cancelamento."
                    </p>
                  </div>
                  <p className="text-tech-gray">
                    Caso Otávio Augusto não possa concluir o projeto conforme acordado, podemos oferecer 
                    um reembolso proporcional ou encontrar uma solução alternativa mutuamente aceitável. 
                    Cada situação será tratada caso a caso com foco em uma resolução justa.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Seção 7 */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-tech-purple/10 p-3 rounded-lg">
                  <FileText className="h-6 w-6 text-tech-purple" />
                </div>
                <h2 className="text-2xl font-bold text-white">7. Confidencialidade</h2>
              </div>
              
              <Card className="glass-card border-tech-purple/10">
                <CardContent className="p-6">
                  <p className="text-tech-gray">
                    Manteremos a confidencialidade de todas as informações compartilhadas pelo cliente durante o 
                    processo de desenvolvimento. Isso inclui, mas não se limita a, estratégias de negócios, dados 
                    de clientes, e outros materiais sensíveis. No entanto, a menos que seja especificado o 
                    contrário por escrito, nos reservamos o direito de mostrar o trabalho concluído como parte 
                    do nosso portfólio. Se você preferir que seu projeto permaneça confidencial, informe-nos 
                    antes de iniciarmos o trabalho.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Seção 8 */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-tech-purple/10 p-3 rounded-lg">
                  <AlertTriangle className="h-6 w-6 text-tech-purple" />
                </div>
                <h2 className="text-2xl font-bold text-white">8. Alterações nestes termos</h2>
              </div>
              
              <Card className="glass-card border-tech-purple/10">
                <CardContent className="p-6">
                  <p className="text-tech-gray">
                    Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão 
                    em vigor imediatamente após sua publicação nesta página. É sua responsabilidade revisar periodicamente 
                    estes Termos de Serviço para ficar ciente de quaisquer modificações. O uso continuado de nossos 
                    serviços após a publicação de alterações constitui sua aceitação dessas alterações.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Seção 9 */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-tech-purple/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-tech-purple" />
                </div>
                <h2 className="text-2xl font-bold text-white">9. Contato</h2>
              </div>
              
              <Card className="glass-card border-tech-purple/10">
                <CardContent className="p-6">
                  <p className="text-tech-gray mb-4">
                    Se você tiver alguma dúvida sobre estes Termos de Serviço, pode nos contatar em:
                  </p>
                  <div className="bg-tech-purple/5 p-4 rounded-lg border border-tech-purple/20 text-center">
                    <p className="text-white font-medium">
                      otaviodevelop@gmail.com
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsOfServicePage;
