
import Layout from "../components/layout/Layout";

const TermsOfServicePage = () => {
  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-10">Términos de Servicio</h1>
        
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-tech-gray mb-6">
            Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Aceptación de los términos</h2>
          <p className="text-tech-gray mb-4">
            Al acceder y utilizar los servicios de Otávio Augusto, usted acepta estar sujeto a estos Términos de Servicio. Si no está de acuerdo con alguna parte de estos términos, no podrá utilizar nuestros servicios.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Descripción del servicio</h2>
          <p className="text-tech-gray mb-4">
            Otávio Augusto proporciona servicios de desarrollo web, incluyendo pero no limitado a diseño de sitios web, desarrollo frontend, landing pages, sitios institucionales y portfolios.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Proceso de trabajo</h2>
          <p className="text-tech-gray mb-4">
            Nuestro proceso de trabajo incluye:
          </p>
          <ul className="list-disc pl-6 text-tech-gray mb-6 space-y-2">
            <li>Consulta inicial para entender sus necesidades</li>
            <li>Propuesta de proyecto con alcance, tiempo y presupuesto</li>
            <li>Desarrollo iterativo con revisiones periódicas</li>
            <li>Entrega final y periodo de soporte</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Derechos de propiedad intelectual</h2>
          <p className="text-tech-gray mb-4">
            Una vez completado el pago total del proyecto, el cliente recibirá todos los derechos de propiedad intelectual pertinentes sobre el trabajo entregado, excepto para elementos de terceros (como bibliotecas de código abierto, imágenes con licencia, etc.) que estén sujetos a sus respectivas licencias.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Pagos y facturación</h2>
          <p className="text-tech-gray mb-4">
            Nuestros términos de pago generalmente requieren un depósito inicial del 50% antes de comenzar el trabajo, y el 50% restante al finalizar el proyecto. Los métodos de pago aceptados y los plazos específicos se detallarán en el contrato de cada proyecto.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Cancelaciones y reembolsos</h2>
          <p className="text-tech-gray mb-4">
            En caso de cancelación por parte del cliente, los depósitos no son reembolsables. Si el trabajo ya ha comenzado, se facturará por el trabajo realizado hasta la fecha de cancelación.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Confidencialidad</h2>
          <p className="text-tech-gray mb-4">
            Mantendremos la confidencialidad de toda la información compartida por el cliente durante el proceso de desarrollo. Sin embargo, a menos que se especifique lo contrario, nos reservamos el derecho de mostrar el trabajo completado como parte de nuestro portfolio.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">8. Cambios en estos términos</h2>
          <p className="text-tech-gray mb-4">
            Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en esta página.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">9. Contacto</h2>
          <p className="text-tech-gray mb-4">
            Si tiene alguna pregunta sobre estos Términos de Servicio, puede contactarnos en:
          </p>
          <p className="text-white font-medium mb-6">
            contacto@otavioaugusto.com
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default TermsOfServicePage;
