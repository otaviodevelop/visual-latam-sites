
import Layout from "../components/layout/Layout";

const PrivacyPolicyPage = () => {
  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-10">Política de Privacidad</h1>
        
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-tech-gray mb-6">
            Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Información que recopilamos</h2>
          <p className="text-tech-gray mb-4">
            En Otávio Augusto, recopilamos información personal que usted nos proporciona directamente cuando utiliza nuestro sitio web, como su nombre, dirección de correo electrónico, número de teléfono y cualquier otra información que decida compartir cuando se pone en contacto con nosotros a través de nuestros formularios.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Cómo utilizamos su información</h2>
          <p className="text-tech-gray mb-4">
            Utilizamos la información recopilada para:
          </p>
          <ul className="list-disc pl-6 text-tech-gray mb-6 space-y-2">
            <li>Responder a sus consultas y proporcionar el servicio solicitado</li>
            <li>Mejorar nuestro sitio web y la experiencia del usuario</li>
            <li>Enviar información sobre nuestros servicios que pueda ser de su interés (solo si ha dado su consentimiento)</li>
            <li>Cumplir con obligaciones legales</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Protección de datos</h2>
          <p className="text-tech-gray mb-4">
            Implementamos medidas de seguridad diseñadas para proteger su información personal. Sin embargo, ningún método de transmisión por Internet o método de almacenamiento electrónico es 100% seguro.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Cookies y tecnologías similares</h2>
          <p className="text-tech-gray mb-4">
            Nuestro sitio web puede utilizar "cookies" para mejorar la experiencia del usuario. Estas cookies son pequeños archivos de texto que se almacenan en su dispositivo. Puede configurar su navegador para que rechace todas las cookies o para que le avise cuando se envía una cookie.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Derechos del usuario</h2>
          <p className="text-tech-gray mb-4">
            Usted tiene derecho a acceder, corregir o eliminar sus datos personales. Si desea ejercer estos derechos, póngase en contacto con nosotros a través de contacto@otavioaugusto.com.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Cambios en esta política</h2>
          <p className="text-tech-gray mb-4">
            Podemos actualizar nuestra Política de Privacidad periódicamente. Le notificaremos cualquier cambio publicando la nueva Política de Privacidad en esta página y actualizando la fecha de "última actualización".
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Contacto</h2>
          <p className="text-tech-gray mb-4">
            Si tiene alguna pregunta sobre esta Política de Privacidad, puede contactarnos en:
          </p>
          <p className="text-white font-medium mb-6">
            contacto@otavioaugusto.com
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicyPage;
