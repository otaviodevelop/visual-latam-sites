import Layout from "@/components/layout/Layout";
import { ArrowRight } from "lucide-react";

interface TechnologyProps {
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

const Technology = ({ title, description, icon, benefits }: TechnologyProps) => {
  return (
    <div className="glass-card p-8 h-full transform hover:scale-[1.02] transition-transform">
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mr-4">
          <div dangerouslySetInnerHTML={{ __html: icon }} />
        </div>
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <p className="text-tech-gray mb-6">{description}</p>
      <h4 className="text-lg font-medium mb-3">Beneficios:</h4>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="text-tech-gray flex items-start">
            <span className="text-tech-purple mr-2">•</span>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const technologies = [
  {
    title: "React.js",
    description:
      "Biblioteca de JavaScript para construir interfaces de usuario interactivas y reutilizables, permitiendo crear sitios web dinámicos y de alto rendimiento.",
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="2.5" stroke="#8B5CF6" stroke-width="1.5"/>
            <path d="M12 6C14.9932 3.33333 18.1222 3.2773 20.6667 4.33333C23.6667 5.55555 23 9.33333 21.3333 12C23.7651 16 21.7604 19.1111 19.3333 20.1111C16.6667 21.2222 14.5744 20 12 18" stroke="#8B5CF6" stroke-width="1.5"/>
            <path d="M12 6C9.00683 3.33333 5.87777 3.2773 3.33333 4.33333C0.333333 5.55555 1 9.33333 2.66667 12C0.234907 16 2.23962 19.1111 4.66667 20.1111C7.33333 21.2222 9.42556 20 12 18" stroke="#8B5CF6" stroke-width="1.5"/>
          </svg>`,
    benefits: [
      "Componentes reutilizables que mejoran la mantenibilidad",
      "DOM virtual para renderizado eficiente",
      "Ecosistema amplio y comunidad activa",
      "Excelente para interfaces de usuario dinámicas",
      "Ideal para Single Page Applications",
    ],
  },
  {
    title: "Tailwind CSS",
    description:
      "Framework CSS utilitario que permite construir diseños personalizados directamente en el marcado, acelerando el desarrollo y facilitando la consistencia visual.",
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.96 14.4C7.68 14.4 8.28 14.1 8.76 13.5C9.24 12.9 9.48 12.09 9.48 11.07C9.48 10.05 9.24 9.24 8.76 8.64C8.28 8.04 7.68 7.74 6.96 7.74C6.24 7.74 5.64 8.04 5.16 8.64C4.68 9.24 4.44 10.05 4.44 11.07C4.44 12.09 4.68 12.9 5.16 13.5C5.64 14.1 6.24 14.4 6.96 14.4ZM7.5 16.26C6.06 16.26 4.86 15.75 3.9 14.73C2.94 13.71 2.46 12.47 2.46 11.01C2.46 9.55 2.94 8.31 3.9 7.29C4.86 6.27 6.06 5.76 7.5 5.76C8.94 5.76 10.14 6.27 11.1 7.29C12.06 8.31 12.54 9.55 12.54 11.01C12.54 12.47 12.06 13.71 11.1 14.73C10.14 15.75 8.94 16.26 7.5 16.26ZM17.04 14.4C17.76 14.4 18.36 14.1 18.84 13.5C19.32 12.9 19.56 12.09 19.56 11.07C19.56 10.05 19.32 9.24 18.84 8.64C18.36 8.04 17.76 7.74 17.04 7.74C16.32 7.74 15.72 8.04 15.24 8.64C14.76 9.24 14.52 10.05 14.52 11.07C14.52 12.09 14.76 12.9 15.24 13.5C15.72 14.1 16.32 14.4 17.04 14.4ZM16.5 18.24C15.06 18.24 13.86 17.73 12.9 16.71C11.94 15.69 11.46 14.45 11.46 12.99C11.46 11.53 11.94 10.29 12.9 9.27C13.86 8.25 15.06 7.74 16.5 7.74C17.94 7.74 19.14 8.25 20.1 9.27C21.06 10.29 21.54 11.53 21.54 12.99C21.54 14.45 21.06 15.69 20.1 16.71C19.14 17.73 17.94 18.24 16.5 18.24Z" fill="#8B5CF6"/>
          </svg>`,
    benefits: [
      "Diseños personalizados sin salir del HTML",
      "Generación de CSS optimizado con purge",
      "Desarrollo rápido con clases utilitarias",
      "Altamente personalizable mediante configuración",
      "Excelente para interfaces responsivas",
    ],
  },
  {
    title: "Framer Motion",
    description:
      "Biblioteca de animaciones para React que permite crear transiciones fluidas, gestos interactivos y efectos de movimiento con una API declarativa y fácil de usar.",
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="18" height="18" x="3" y="3" rx="2" stroke="#8B5CF6" stroke-width="1.5"/>
            <circle cx="9" cy="9" r="2" stroke="#8B5CF6" stroke-width="1.5"/>
            <path d="m15 9-3 3" stroke="#8B5CF6" stroke-width="1.5"/>
            <path d="m15 15-6-6" stroke="#8B5CF6" stroke-width="1.5"/>
            <circle cx="15" cy="15" r="2" stroke="#8B5CF6" stroke-width="1.5"/>
          </svg>`,
    benefits: [
      "Animaciones fluidas y rendimiento optimizado",
      "API declarativa que facilita implementación",
      "Transiciones entre páginas y componentes",
      "Efectos de paralaje y scroll avanzados",
      "Animaciones basadas en gestos",
    ],
  },
  {
    title: "Lottie React",
    description:
      "Librería que permite integrar animaciones vectoriales ligeras y de alta calidad en aplicaciones web, creadas en Adobe After Effects y exportadas como JSON.",
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 2h8" stroke="#8B5CF6" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2" stroke="#8B5CF6" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M7 15h10" stroke="#8B5CF6" stroke-width="1.5" stroke-linecap="round"/>
          </svg>`,
    benefits: [
      "Animaciones vectoriales ligeras y escalables",
      "Interactividad controlada por código",
      "Mejora la experiencia de usuario",
      "Compatible con herramientas de diseño populares",
      "Rendimiento optimizado para web",
    ],
  },
  {
    title: "React Router DOM",
    description:
      "Biblioteca de enrutamiento para React que permite crear navegación entre páginas sin recargar el navegador, mejorando la experiencia del usuario con transiciones suaves.",
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="#8B5CF6" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="#8B5CF6" stroke-width="1.5" stroke-linecap="round"/>
          </svg>`,
    benefits: [
      "Navegación sin recarga para mejor UX",
      "Enrutamiento dinámico y parametrizado",
      "Gestión de historial del navegador",
      "Lazy loading de componentes",
      "Integración perfecta con React",
    ],
  },
  {
    title: "React Player",
    description:
      "Componente para reproducir una variedad de URLs en React, como YouTube, Facebook, Twitch, SoundCloud, Streamable, Vimeo, Wistia, Mixcloud y archivos de video/audio.",
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="23 7 16 12 23 17 23 7" stroke="#8B5CF6" stroke-width="1.5"/>
            <rect width="15" height="14" x="1" y="5" rx="2" stroke="#8B5CF6" stroke-width="1.5"/>
            <path d="M1 10h15" stroke="#8B5CF6" stroke-width="1.5"/>
          </svg>`,
    benefits: [
      "Reproducción de múltiples formatos de video",
      "Controles personalizables",
      "Responsive y adaptable a diferentes dispositivos",
      "Eventos y callbacks para integración avanzada",
      "Soporte para múltiples plataformas de video",
    ],
  }
];

const TechnologiesPage = () => {
  return (
    <Layout>
      {/* Hero de Tecnologías */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-tech-purple/20 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-tech-blue/20 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
              <span className="gradient-text">Tecnologías</span> Modernas
            </h1>
            <p className="text-xl text-tech-gray">
              Trabajo exclusivamente con tecnologías de última generación para 
              garantizar un rendimiento óptimo y una experiencia de usuario excepcional
            </p>
          </div>
        </div>
      </section>

      {/* Grid de Tecnologías */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {technologies.map((tech, index) => (
              <Technology
                key={index}
                title={tech.title}
                description={tech.description}
                icon={tech.icon}
                benefits={tech.benefits}
              />
            ))}
          </div>
          
          {/* Enfoque Tecnológico */}
          <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Mi enfoque tecnológico</h2>
            <p className="text-tech-gray mb-6">
              Mi filosofía es trabajar solo con tecnologías modernas que garanticen:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-tech-purple mr-2 text-xl">•</span>
                <span>
                  <strong className="text-white">Rendimiento excepcional</strong> - Sitios web rápidos que cargan en milisegundos
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-tech-purple mr-2 text-xl">•</span>
                <span>
                  <strong className="text-white">Experiencia visual impactante</strong> - Animaciones y efectos que causan una impresión duradera
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-tech-purple mr-2 text-xl">•</span>
                <span>
                  <strong className="text-white">Código limpio y mantenible</strong> - Para facilitar futuras actualizaciones
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-tech-purple mr-2 text-xl">•</span>
                <span>
                  <strong className="text-white">Responsividad total</strong> - Funciona perfectamente en todos los dispositivos
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-tech-purple mr-2 text-xl">•</span>
                <span>
                  <strong className="text-white">Innovación constante</strong> - Siempre al día con las últimas tendencias y mejores prácticas
                </span>
              </li>
            </ul>
            
            <div className="font-medium text-tech-gray italic border-l-4 border-tech-purple pl-4 py-2">
              "Trabajo solo con tecnologías modernas que garantizan rendimiento y diseño. 
              Mi objetivo es crear sitios web que no solo se vean increíbles, sino que también 
              ofrezcan una experiencia de usuario excepcional."
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-tech-purple/5 to-tech-blue/5"></div>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Buscas un sitio web con tecnología de punta?
            </h2>
            <p className="text-xl text-tech-gray mb-8">
              Hablemos sobre cómo puedo ayudarte a crear una presencia en línea moderna y de alto rendimiento
            </p>
            <a
              href="https://wa.me/5215555555555?text=Hola,%20me%20interesa%20hablar%20sobre%20las%20tecnologías%20que%20usas"
              target="_blank"
              rel="noopener noreferrer"
              className="tech-btn inline-flex items-center gap-2"
            >
              Solicita una consulta gratis
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TechnologiesPage;
