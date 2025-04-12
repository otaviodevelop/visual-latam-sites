
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/ui/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactPage = () => {
  return (
    <Layout>
      {/* Hero de Contato */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-tech-purple/20 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-tech-blue/20 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
              <span className="gradient-text">Entre em contato</span>
            </h1>
            <p className="text-xl text-tech-gray">
              Tem um projeto em mente? Estou pronto para ouvir suas ideias e 
              ajudar a criar uma experiência web impactante
            </p>
          </div>
        </div>
      </section>

      {/* Formulário e Dados de Contato */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Formulário */}
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-bold mb-6">Envie uma mensagem</h2>
              <ContactForm />
            </div>
            
            {/* Info de Contato */}
            <div className="w-full md:w-1/3">
              <h2 className="text-2xl font-bold mb-6">Informações de contato</h2>
              
              <div className="glass-card p-8 rounded-xl h-full">
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-tech-purple/10 text-tech-purple mr-4">
                      <Mail size={18} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">E-mail</h3>
                      <a
                        href="mailto:otaviodevelop@gmail.com"
                        className="text-tech-gray hover:text-tech-purple transition-colors"
                      >
                        otaviodevelop@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-tech-purple/10 text-tech-purple mr-4">
                      <Phone size={18} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">WhatsApp</h3>
                      <a
                        href="https://wa.me/+5521995444161"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-tech-gray hover:text-tech-purple transition-colors"
                      >
                        +55 21 99544-4161
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-tech-purple/10 text-tech-purple mr-4">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Localização</h3>
                      <p className="text-tech-gray">
                        Brasil / Remoto em toda América Latina
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-tech-purple/10 text-tech-purple mr-4">
                      <Clock size={18} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Horário de atendimento</h3>
                      <p className="text-tech-gray">
                        Segunda a Sexta: 9:00 - 18:00 (GMT-3)
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-white/10 mt-8 pt-8">
                  <h3 className="font-medium mb-3">Resposta rápida</h3>
                  <p className="text-tech-gray mb-4">
                    Respondo em menos de 1 hora em dias úteis
                  </p>
                  <div className="flex gap-3">
                    <span className="inline-block w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-sm text-tech-gray">Disponível para novos projetos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perguntas Frequentes */}
      <section className="py-16 bg-tech-darker">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Perguntas Frequentes</h2>
            <p className="section-subtitle mt-4">
              Respostas para as dúvidas mais comuns sobre meu trabalho
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">Qual é seu processo de trabalho?</h3>
                <p className="text-tech-gray">
                  Meu processo inclui uma etapa de consulta inicial, planejamento do projeto, 
                  design UI/UX, desenvolvimento frontend, testes e finalmente a entrega. Me mantenho 
                  em constante comunicação durante todo o processo para garantir que o resultado 
                  final atenda às suas expectativas.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">Quanto tempo leva para desenvolver um site?</h3>
                <p className="text-tech-gray">
                  O tempo de desenvolvimento varia de acordo com a complexidade do projeto. Uma landing page 
                  simples pode estar pronta em 2-3 semanas, enquanto um site mais completo 
                  pode levar entre 4-8 semanas. Tudo depende dos requisitos específicos e 
                  da quantidade de páginas e funcionalidades.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">Você trabalha com clientes fora do Brasil?</h3>
                <p className="text-tech-gray">
                  Absolutamente! Trabalho com clientes de toda a América Latina e além. A comunicação 
                  é realizada principalmente por mensagens, o que permite colaborar 
                  efetivamente independente da localização.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">O que preciso para começar um projeto com você?</h3>
                <p className="text-tech-gray">
                  Para começar, preciso entender sua visão e objetivos. É útil ter uma ideia clara 
                  do propósito do site, o público-alvo, exemplos de sites que você goste e qualquer 
                  material de marca que possa compartilhar (logo, cores, etc.). Depois de uma consulta inicial, 
                  prepararei uma proposta detalhada.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">Você oferece manutenção após a entrega?</h3>
                <p className="text-tech-gray">
                  Sim, ofereço serviços de manutenção para os sites que desenvolvo, desde que contratados separadamente. 
                  Além disso, durante o primeiro mês após a entrega, incluo suporte técnico gratuito para garantir que tudo funcione corretamente. 
                  Se você precisar de manutenção contínua, podemos estabelecer um plano adaptado às suas necessidades.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">Quais são seus métodos de pagamento?</h3>
                <p className="text-tech-gray">
                  Aceito pagamentos por Stripe e PayPal. Geralmente, 
                  o projeto é dividido em fases com um adiantamento inicial de 50% para começar e o restante 
                  ao finalizar o projeto. Para projetos maiores, podemos estabelecer um cronograma 
                  de pagamentos por etapas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto glass-card p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-4">Ainda tem dúvidas?</h2>
            <p className="text-lg text-tech-gray mb-6">
              Me ligue agora mesmo para discutir seu projeto 
              e resolver todas as suas perguntas sem compromisso
            </p>
            <a
              href="https://wa.me/+5521995444161"
              target="_blank"
              rel="noopener noreferrer"
              className="tech-btn"
            >
              Ligar agora
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
