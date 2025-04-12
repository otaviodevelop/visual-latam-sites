
import Layout from "../components/layout/Layout";

const PrivacyPolicyPage = () => {
  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-10">Política de Privacidade</h1>
        
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-tech-gray mb-6">
            Última atualização: {new Date().toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Informações que coletamos</h2>
          <p className="text-tech-gray mb-4">
            Na Otávio Augusto, coletamos informações pessoais que você nos fornece diretamente quando utiliza nosso site, como seu nome, endereço de e-mail, número de telefone e qualquer outra informação que decida compartilhar quando entra em contato conosco através dos nossos formulários.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Como utilizamos suas informações</h2>
          <p className="text-tech-gray mb-4">
            Utilizamos as informações coletadas para:
          </p>
          <ul className="list-disc pl-6 text-tech-gray mb-6 space-y-2">
            <li>Responder às suas consultas e fornecer o serviço solicitado</li>
            <li>Melhorar nosso site e a experiência do usuário</li>
            <li>Enviar informações sobre nossos serviços que possam ser do seu interesse (apenas se você tiver dado seu consentimento)</li>
            <li>Cumprir com obrigações legais</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Proteção de dados</h2>
          <p className="text-tech-gray mb-4">
            Implementamos medidas de segurança projetadas para proteger suas informações pessoais. No entanto, nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Cookies e tecnologias semelhantes</h2>
          <p className="text-tech-gray mb-4">
            Nosso site pode utilizar "cookies" para melhorar a experiência do usuário. Esses cookies são pequenos arquivos de texto que são armazenados no seu dispositivo. Você pode configurar seu navegador para recusar todos os cookies ou para avisá-lo quando um cookie é enviado.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Direitos do usuário</h2>
          <p className="text-tech-gray mb-4">
            Você tem direito a acessar, corrigir ou excluir seus dados pessoais. Se deseja exercer esses direitos, entre em contato conosco através de contato@otavioaugusto.com.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Alterações nesta política</h2>
          <p className="text-tech-gray mb-4">
            Podemos atualizar nossa Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações publicando a nova Política de Privacidade nesta página e atualizando a data de "última atualização".
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Contato</h2>
          <p className="text-tech-gray mb-4">
            Se você tiver alguma dúvida sobre esta Política de Privacidade, pode entrar em contato conosco em:
          </p>
          <p className="text-white font-medium mb-6">
            contato@otavioaugusto.com
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicyPage;
