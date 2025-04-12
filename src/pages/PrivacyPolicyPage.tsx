
import Layout from "../components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Shield, Lock, Eye, Database, Cookie, User, AlertCircle, Mail } from "lucide-react";

const PrivacyPolicyPage = () => {
  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Política de Privacidade</h1>
            <div className="flex items-center justify-center">
              <Shield className="text-tech-purple h-6 w-6 mr-2" />
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
                  Na Otávio Augusto, valorizamos sua privacidade e nos comprometemos a proteger seus dados pessoais. 
                  Esta política de privacidade explica como coletamos, usamos e protegemos suas informações quando 
                  você utiliza nosso site e serviços.
                </p>
              </CardContent>
            </Card>

            {/* Seção 1 */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-tech-purple/10 p-3 rounded-lg">
                  <Database className="h-6 w-6 text-tech-purple" />
                </div>
                <h2 className="text-2xl font-bold text-white">1. Informações que coletamos</h2>
              </div>
              
              <Card className="glass-card border-tech-purple/10">
                <CardContent className="p-6">
                  <p className="text-tech-gray mb-4">
                    Na Otávio Augusto, coletamos informações pessoais que você nos fornece diretamente quando utiliza nosso site, como:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-tech-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-tech-gray">Seu nome completo</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-tech-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-tech-gray">Endereço de e-mail</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-tech-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-tech-gray">Número de telefone</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-tech-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-tech-gray">Qualquer outra informação que você decida compartilhar quando entra em contato conosco</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Seção 2 */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-tech-purple/10 p-3 rounded-lg">
                  <Eye className="h-6 w-6 text-tech-purple" />
                </div>
                <h2 className="text-2xl font-bold text-white">2. Como utilizamos suas informações</h2>
              </div>
              
              <Card className="glass-card border-tech-purple/10">
                <CardContent className="p-6">
                  <p className="text-tech-gray mb-4">
                    Utilizamos as informações coletadas para:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-tech-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-tech-gray">Responder às suas consultas e fornecer o serviço solicitado</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-tech-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-tech-gray">Melhorar nosso site e a experiência do usuário</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-tech-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-tech-gray">Enviar informações sobre nossos serviços que possam ser do seu interesse (apenas com seu consentimento)</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-tech-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-tech-gray">Cumprir com obrigações legais</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Seção 3 */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-tech-purple/10 p-3 rounded-lg">
                  <Lock className="h-6 w-6 text-tech-purple" />
                </div>
                <h2 className="text-2xl font-bold text-white">3. Proteção de dados</h2>
              </div>
              
              <Card className="glass-card border-tech-purple/10">
                <CardContent className="p-6">
                  <p className="text-tech-gray">
                    Implementamos medidas de segurança projetadas para proteger suas informações pessoais. Utilizamos 
                    criptografia de dados, acesso restrito às suas informações e avaliações regulares de segurança. 
                    No entanto, nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 
                    100% seguro, por isso, embora nos esforcemos para usar meios comercialmente aceitáveis para 
                    proteger suas informações pessoais, não podemos garantir sua segurança absoluta.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Seção 4 */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-tech-purple/10 p-3 rounded-lg">
                  <Cookie className="h-6 w-6 text-tech-purple" />
                </div>
                <h2 className="text-2xl font-bold text-white">4. Cookies e tecnologias semelhantes</h2>
              </div>
              
              <Card className="glass-card border-tech-purple/10">
                <CardContent className="p-6">
                  <p className="text-tech-gray">
                    Nosso site pode utilizar "cookies" para melhorar a experiência do usuário. Esses cookies são pequenos 
                    arquivos de texto que são armazenados no seu dispositivo. Eles nos ajudam a entender como os visitantes 
                    interagem com nosso site, permitindo-nos melhorar continuamente nossos serviços. Você pode configurar 
                    seu navegador para recusar todos os cookies ou para avisá-lo quando um cookie é enviado. No entanto, 
                    algumas funcionalidades do site podem não funcionar corretamente sem cookies.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Seção 5 */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-tech-purple/10 p-3 rounded-lg">
                  <User className="h-6 w-6 text-tech-purple" />
                </div>
                <h2 className="text-2xl font-bold text-white">5. Direitos do usuário</h2>
              </div>
              
              <Card className="glass-card border-tech-purple/10">
                <CardContent className="p-6">
                  <p className="text-tech-gray mb-4">
                    De acordo com as leis de proteção de dados aplicáveis, você tem os seguintes direitos:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-tech-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-tech-gray">Acessar seus dados pessoais</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-tech-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-tech-gray">Corrigir dados imprecisos</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-tech-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-tech-gray">Solicitar a exclusão de seus dados</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-tech-purple mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-tech-gray">Restringir ou se opor ao processamento de seus dados</span>
                    </li>
                  </ul>
                  <p className="text-tech-gray mt-4">
                    Se deseja exercer esses direitos, entre em contato conosco através de otaviodevelop@gmail.com.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Seção 6 */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-tech-purple/10 p-3 rounded-lg">
                  <AlertCircle className="h-6 w-6 text-tech-purple" />
                </div>
                <h2 className="text-2xl font-bold text-white">6. Alterações nesta política</h2>
              </div>
              
              <Card className="glass-card border-tech-purple/10">
                <CardContent className="p-6">
                  <p className="text-tech-gray">
                    Podemos atualizar nossa Política de Privacidade periodicamente. Notificaremos você sobre quaisquer 
                    alterações publicando a nova Política de Privacidade nesta página e atualizando a data de "última atualização". 
                    Recomendamos que você revise esta Política de Privacidade periodicamente para ficar informado sobre 
                    como estamos protegendo suas informações.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Seção 7 */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-tech-purple/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-tech-purple" />
                </div>
                <h2 className="text-2xl font-bold text-white">7. Contato</h2>
              </div>
              
              <Card className="glass-card border-tech-purple/10">
                <CardContent className="p-6">
                  <p className="text-tech-gray mb-4">
                    Se você tiver alguma dúvida sobre esta Política de Privacidade, pode entrar em contato conosco em:
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

export default PrivacyPolicyPage;
