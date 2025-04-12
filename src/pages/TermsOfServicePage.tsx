
import Layout from "../components/layout/Layout";

const TermsOfServicePage = () => {
  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-10">Termos de Serviço</h1>
        
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-tech-gray mb-6">
            Última atualização: {new Date().toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Aceitação dos termos</h2>
          <p className="text-tech-gray mb-4">
            Ao acessar e utilizar os serviços de Otávio Augusto, você aceita estar sujeito a estes Termos de Serviço. Se você não concorda com qualquer parte destes termos, não poderá utilizar nossos serviços.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Descrição do serviço</h2>
          <p className="text-tech-gray mb-4">
            Otávio Augusto fornece serviços de desenvolvimento web, incluindo, mas não limitado a design de sites, desenvolvimento frontend, landing pages, sites institucionais e portfólios.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Processo de trabalho</h2>
          <p className="text-tech-gray mb-4">
            Nosso processo de trabalho inclui:
          </p>
          <ul className="list-disc pl-6 text-tech-gray mb-6 space-y-2">
            <li>Consulta inicial para entender suas necessidades</li>
            <li>Proposta de projeto com escopo, tempo e orçamento</li>
            <li>Desenvolvimento iterativo com revisões periódicas</li>
            <li>Entrega final e período de suporte</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Direitos de propriedade intelectual</h2>
          <p className="text-tech-gray mb-4">
            Uma vez completado o pagamento total do projeto, o cliente receberá todos os direitos de propriedade intelectual pertinentes sobre o trabalho entregue, exceto para elementos de terceiros (como bibliotecas de código aberto, imagens com licença, etc.) que estão sujeitos às suas respectivas licenças.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Pagamentos e faturamento</h2>
          <p className="text-tech-gray mb-4">
            Nossos termos de pagamento geralmente requerem um depósito inicial de 50% antes de começar o trabalho, e os 50% restantes ao finalizar o projeto. Os métodos de pagamento aceitos e os prazos específicos serão detalhados no contrato de cada projeto.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Cancelamentos e reembolsos</h2>
          <p className="text-tech-gray mb-4">
            Em caso de cancelamento por parte do cliente, os depósitos não são reembolsáveis. Se o trabalho já tiver começado, será cobrado pelo trabalho realizado até a data de cancelamento.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Confidencialidade</h2>
          <p className="text-tech-gray mb-4">
            Manteremos a confidencialidade de todas as informações compartilhadas pelo cliente durante o processo de desenvolvimento. No entanto, a menos que seja especificado o contrário, nos reservamos o direito de mostrar o trabalho concluído como parte do nosso portfólio.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">8. Alterações nestes termos</h2>
          <p className="text-tech-gray mb-4">
            Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após sua publicação nesta página.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">9. Contato</h2>
          <p className="text-tech-gray mb-4">
            Se você tiver alguma dúvida sobre estes Termos de Serviço, pode nos contatar em:
          </p>
          <p className="text-white font-medium mb-6">
            contato@otavioaugusto.com
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default TermsOfServicePage;
