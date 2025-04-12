import Layout from "@/components/layout/Layout";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      id: "sites",
      title: "Sitios Institucionales",
      description:
        "Sitios web modernos y profesionales diseñados para representar la identidad de tu marca o empresa con un enfoque en la experiencia del usuario y el diseño impactante.",
      features: [
        "Diseño personalizado y único",
        "Experiencia de usuario intuitiva",
        "Adaptable a todos los dispositivos",
        "Animaciones y efectos visuales",
        "Optimizado para velocidad",
        "Integración con redes sociales",
      ],
      image: "https://placehold.co/800x600/0F172A/FFFFFF?text=Sitios+Institucionales",
    },
    {
      id: "landing",
      title: "Landing Pages",
      description:
        "Páginas de aterrizaje estratégicamente diseñadas para convertir visitantes en clientes, con un enfoque en los llamados a la acción y la presentación efectiva de tus productos o servicios.",
      features: [
        "Enfoque en conversión",
        "Llamados a la acción estratégicos",
        "Diseño persuasivo",
        "Formularios optimizados",
        "Carga rápida para reducir rebotes",
        "Pruebas A/B para maximizar resultados",
      ],
      image: "https://placehold.co/800x600/0F172A/FFFFFF?text=Landing+Pages",
    },
    {
      id: "portfolios",
      title: "Portfolios Profesionales",
      description:
        "Portfolios visuales que destacan tu trabajo de manera profesional y atractiva, ideales para fotógrafos, diseñadores, arquitectos y otros profesionales creativos.",
      features: [
        "Galerías visuales impactantes",
        "Organización por categorías o proyectos",
        "Transiciones fluidas entre proyectos",
        "Funcionalidades de zoom y navegación",
        "Integración con plataformas creativas",
        "Diseño que complementa tu trabajo",
      ],
      image: "https://placehold.co/800x600/0F172A/FFFFFF?text=Portfolios",
    }
  ];

  const nonServices = [
    {
      title: "E-commerce y tiendas online",
      description:
        "No desarrollo tiendas online completas o sistemas de e-commerce que requieran gestión de inventario, pagos en línea y funcionalidades avanzadas de comercio.",
    },
    {
      title: "Mantenimiento de sitios existentes",
      description:
        "Mi enfoque está en crear nuevos proyectos desde cero, no en modificar o mantener sitios web existentes desarrollados por terceros.",
    },
    {
      title: "Aplicaciones web complejas",
      description:
        "No desarrollo aplicaciones web que requieran lógica de backend compleja, bases de datos avanzadas o funcionalidades tipo SaaS.",
    },
    {
      title: "Modificaciones de plantillas",
      description:
        "No trabajo con plantillas prediseñadas ni realizo modificaciones a temas existentes. Todos mis proyectos son diseñados y desarrollados a medida.",
    },
    {
      title: "Blogs y sistemas de contenido",
      description:
        "No desarrollo blogs que requieran panel administrativo, sistema de gestión de contenidos o funcionalidades complejas de publicación.",
    }
  ];

  return (
    <Layout>
      {/* Hero de Servicios */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-tech-purple/20 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-tech-blue/20 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
              <span className="gradient-text">Servicios</span> de Desarrollo
            </h1>
            <p className="text-xl text-tech-gray">
              Me especializo en crear experiencias web visuales y modernas, 
              trabajando exclusivamente con tecnologías frontend de última generación.
            </p>
          </div>
        </div>
      </section>

      {/* Lista de Servicios */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 mb-24 items-center`}
            >
              <div className="w-full md:w-1/2">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-auto rounded-xl shadow-lg object-cover glass-card"
                />
              </div>
              
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-tech-gray mb-6">{service.description}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle2 className="text-tech-green mr-3 flex-shrink-0 mt-1" size={18} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <a
                    href={`https://wa.me/5215555555555?text=Hola,%20me%20interesa%20un%20servicio%20de%20${encodeURIComponent(service.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tech-btn inline-flex items-center gap-2"
                  >
                    Solicitar este servicio
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lo que NO hago */}
      <section className="py-16 bg-tech-darker">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Lo que NO hago</h2>
            <p className="section-subtitle mt-4">
              Para asegurar la máxima calidad en mi trabajo, me especializo exclusivamente en ciertos tipos de proyectos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {nonServices.map((item, index) => (
              <div key={index} className="glass-card p-6">
                <div className="flex items-start">
                  <XCircle className="text-destructive mr-3 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-tech-gray">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-tech-purple/5 to-tech-blue/5"></div>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-xl text-tech-gray mb-8">
              Cuéntame sobre tu idea y juntos podemos crear una experiencia web única que destaque tu marca
            </p>
            <a
              href="https://wa.me/5215555555555?text=Hola,%20me%20interesa%20hablar%20sobre%20un%20proyecto"
              target="_blank"
              rel="noopener noreferrer"
              className="tech-btn inline-flex items-center gap-2"
            >
              Hablemos de tu proyecto
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
