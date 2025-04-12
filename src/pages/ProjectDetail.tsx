
import { useParams, NavLink } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink, Check } from "lucide-react";
import Layout from "@/components/layout/Layout";

// Datos de ejemplo para proyectos
const projects = [
  {
    id: "proyecto-1",
    title: "Estudio Jurídico Méndez",
    description:
      "Landing page moderna para bufete de abogados con enfoque en convertir visitas en consultas. El diseño fue creado para transmitir profesionalismo y confianza, elementos clave para un estudio jurídico.",
    image: "/mendez.png",
    mockups: [
      "/mockup1.png",
      "/mockup2.png",
      "/mockup3.png",
    ],
    category: "Landing Page",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
    client: "Estudio Méndez & Asociados",
    duration: "3 semanas",
    year: "2023",
    challenge:
      "El cliente necesitaba renovar su imagen digital para atraer a un público más joven sin perder la seriedad que caracteriza a su despacho. La página debía tener un alto índice de conversión para consultas iniciales.",
    solution:
      "Desarrollamos una landing page con un diseño moderno pero profesional, implementando secciones estratégicas como testimonios, áreas de práctica y un formulario de contacto optimizado para convertir visitas en consultas.",
    results: [
      "Aumento del 40% en consultas online",
      "Reducción del 25% en la tasa de rebote",
      "Mejora del 60% en tiempo de carga",
      "Experiencia consistente en todos los dispositivos",
    ],
    liveUrl: "https://mendez-legal.vercel.app/",
    nextProject: "proyecto-2",
    prevProject: "proyecto-3",
  },
  {
    id: "proyecto-2",
    title: "Consultora Financiera GL",
    description:
      "Sitio web institucional con animaciones personalizadas para empresa de consultoría financiera. El diseño se enfoca en transmitir confiabilidad y experiencia en el mercado financiero.",
    image: "/gl.png",
    mockups: [
      "/gl_mockup1.png",
      "/gl_mockup2.png",
      "/gl_mockup3.png",
    ],
    category: "Sitio Institucional",
    technologies: ["React.js", "Tailwind CSS", "Lottie"],
    client: "Grupo Liderma Consultores",
    duration: "6 semanas",
    year: "2024",
    challenge:
      "La consultora buscaba diferenciarse visualmente de la competencia mientras comunicaba efectivamente sus servicios complejos a potenciales clientes de forma clara y atractiva.",
    solution:
      "Creamos un sitio web con animaciones personalizadas que ilustran conceptos financieros complejos de forma visual e intuitiva, implementando un diseño elegante con toques animados que destacan la información clave.",
    results: [
      "Incremento del 35% en tiempo de permanencia",
      "Aumento del 50% en solicitudes de información",
      "Mejora en la percepción de marca según encuestas",
      "Mayor engagement en secciones con animaciones",
    ],
    liveUrl: "https://gl-financiera.vercel.app/",
    nextProject: "proyecto-3",
    prevProject: "proyecto-1",
  },
  {
    id: "proyecto-3",
    title: "Arquitecta Julia Vega",
    description:
      "Portfolio visual con galería de proyectos para estudio de arquitectura contemporánea. El sitio fue diseñado para resaltar los proyectos de la arquitecta con un enfoque minimalista que destaca las imágenes.",
    image: "/juliavega.png",
    mockups: [
      "/julia_mk1.png",
      "/julia_mk2.png",
      "/julia_mk3.png",
    ],
    category: "Portfolio",
    technologies: ["React.js", "Framer Motion", "Tailwind CSS"],
    client: "Estudio Vega Arquitectura",
    duration: "4 semanas",
    year: "2023",
    challenge:
      "La arquitecta necesitaba un portfolio que mostrara sus proyectos de manera impactante, con un enfoque en la experiencia visual y la navegación intuitiva entre diferentes obras.",
    solution:
      "Desarrollamos un portfolio minimalista con transiciones fluidas entre proyectos, galerías con zoom detallado y reproductor de video integrado para mostrar recorridos virtuales de las obras más importantes.",
    results: [
      "Tiempo promedio de visita aumentó un 70%",
      "Incremento del 45% en solicitudes de presupuesto",
      "Mejora en la presentación de proyectos ante clientes",
      "Experiencia visual premium en dispositivos de alta resolución",
    ],
    liveUrl: "https://julia-vega.vercel.app/",
    nextProject: "proyecto-1",
    prevProject: "proyecto-2",
  },
  {
    id: "proyecto-5",
    title: "Fotógrafo Carlos Ramírez",
    description:
      "Portfolio fotográfico con galerías interactivas y transiciones fluidas entre proyectos para fotógrafo profesional especializado en retratos y eventos.",
    image: "/ramirez.png",
    mockups: [
      "/ramirez_mk1.png",
      "/ramirez_mk2.png",
      "/ramirez_mk3.png",
    ],
    category: "Portfolio",
    technologies: ["React.js", "Framer Motion"],
    client: "Carlos Ramírez Photography",
    duration: "4 semanas",
    year: "2022",
    challenge:
      "El fotógrafo necesitaba una plataforma que mostrara su trabajo con la máxima calidad posible sin comprometer la velocidad de carga, y que presentara sus fotografías de forma inmersiva.",
    solution:
      "Implementamos un sistema de galerías con carga progresiva de imágenes en alta resolución, efectos de transición suaves y visualización a pantalla completa con navegación intuitiva entre colecciones.",
    results: [
      "Aumento del 65% en solicitudes de sesión",
      "Mejora en la presentación ante clientes corporativos",
      "Mayor alcance internacional de su trabajo",
      "Compatibilidad con dispositivos de alta resolución",
    ],
    liveUrl: "https://ramirez-fotografo.vercel.app/",
    nextProject: "proyecto-6",
    prevProject: "proyecto-4",
  },
  {
    id: "proyecto-6",
    title: "Academia de Idiomas GlobalTalk",
    description:
      "Sitio web para academia de idiomas con secciones informativas y formulario de contacto, diseñado para atraer estudiantes y presentar claramente los programas disponibles.",
    image: "https://placehold.co/1200x800/0F172A/FFFFFF?text=Proyecto+6",
    mockups: [
      "https://placehold.co/800x600/0F172A/FFFFFF?text=Mockup+1",
      "https://placehold.co/800x600/0F172A/FFFFFF?text=Mockup+2",
      "https://placehold.co/800x600/0F172A/FFFFFF?text=Mockup+3",
    ],
    category: "Sitio Institucional",
    technologies: ["React.js", "Tailwind CSS"],
    client: "GlobalTalk Languages",
    duration: "5 semanas",
    year: "2022",
    challenge:
      "La academia necesitaba un sitio web que presentara claramente su amplia oferta de cursos y niveles, facilitando la inscripción de nuevos estudiantes y destacando sus metodologías de enseñanza.",
    solution:
      "Desarrollamos una plataforma con buscador inteligente de cursos, sistema de filtrado por idiomas y niveles, testimonios de estudiantes y un proceso simplificado para solicitar información o inscripción.",
    results: [
      "Incremento del 70% en solicitudes de información",
      "Aumento del 50% en inscripciones online",
      "Reducción del tiempo para encontrar cursos específicos",
      "Mejora en la comunicación de metodologías y beneficios",
    ],
    liveUrl: "https://ejemplo.com",
    nextProject: "proyecto-7",
    prevProject: "proyecto-5",
  },
  {
    id: "proyecto-7",
    title: "Proyecto",
    description:
      "Sitio web para academia de idiomas con secciones informativas y formulario de contacto, diseñado para atraer estudiantes y presentar claramente los programas disponibles.",
    image: "https://placehold.co/1200x800/0F172A/FFFFFF?text=Proyecto+6",
    mockups: [
      "https://placehold.co/800x600/0F172A/FFFFFF?text=Mockup+1",
      "https://placehold.co/800x600/0F172A/FFFFFF?text=Mockup+2",
      "https://placehold.co/800x600/0F172A/FFFFFF?text=Mockup+3",
    ],
    category: "Sitio Institucional",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
    client: "GlobalTalk Languages",
    duration: "5 semanas",
    year: "2022",
    challenge:
      "La academia necesitaba un sitio web que presentara claramente su amplia oferta de cursos y niveles, facilitando la inscripción de nuevos estudiantes y destacando sus metodologías de enseñanza.",
    solution:
      "Desarrollamos una plataforma con buscador inteligente de cursos, sistema de filtrado por idiomas y niveles, testimonios de estudiantes y un proceso simplificado para solicitar información o inscripción.",
    results: [
      "Incremento del 70% en solicitudes de información",
      "Aumento del 50% en inscripciones online",
      "Reducción del tiempo para encontrar cursos específicos",
      "Mejora en la comunicación de metodologías y beneficios",
    ],
    liveUrl: "https://ejemplo.com",
    nextProject: "proyecto-1",
    prevProject: "proyecto-6",
  },
];

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Proyecto no encontrado</h1>
          <p className="text-tech-gray mb-8">
            El proyecto que estás buscando no existe o ha sido removido.
          </p>
          <NavLink
            to="/proyectos"
            className="tech-btn inline-flex items-center gap-2"
          >
            Ver todos los proyectos
            <ArrowRight size={18} />
          </NavLink>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero del Proyecto */}
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-tech-purple/20 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-tech-blue/20 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div>
              <NavLink
                to="/proyectos"
                className="inline-flex items-center text-tech-gray hover:text-tech-purple transition-colors mb-4"
              >
                <ArrowLeft size={16} className="mr-2" />
                Volver a proyectos
              </NavLink>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins leading-tight mb-4">
                {project.title}
              </h1>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="py-1 px-3 rounded-full text-sm bg-tech-purple/20 text-tech-purple">
                  {project.category}
                </span>
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="py-1 px-3 rounded-full text-sm bg-white/5 text-tech-gray"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <p className="text-lg text-tech-gray max-w-2xl">
                {project.description}
              </p>
            </div>
            
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tech-btn inline-flex items-center gap-2 mt-6 md:mt-0"
            >
              Visitar sitio
              <ExternalLink size={16} />
            </a>
          </div>
          
          {/* Imagen principal */}
          <div className="glass-card p-2 rounded-xl overflow-hidden shadow-2xl mt-12">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Detalles del Proyecto */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Información del Proyecto */}
            <div className="glass-card p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6">Información del Proyecto</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm text-tech-gray">Cliente</h3>
                  <p className="text-lg font-medium">{project.client}</p>
                </div>
                
                <div>
                  <h3 className="text-sm text-tech-gray">Categoría</h3>
                  <p className="text-lg font-medium">{project.category}</p>
                </div>
                
                <div>
                  <h3 className="text-sm text-tech-gray">Año</h3>
                  <p className="text-lg font-medium">{project.year}</p>
                </div>
                
                <div>
                  <h3 className="text-sm text-tech-gray">Duración</h3>
                  <p className="text-lg font-medium">{project.duration}</p>
                </div>
                
                <div>
                  <h3 className="text-sm text-tech-gray">Tecnologías</h3>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="py-1 px-3 rounded-full text-sm bg-white/5 text-tech-gray"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Descripción del Proyecto */}
            <div className="md:col-span-2 glass-card p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6">Sobre el Proyecto</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium mb-3">El Desafío</h3>
                  <p className="text-tech-gray">{project.challenge}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-3">La Solución</h3>
                  <p className="text-tech-gray">{project.solution}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-3">Resultados</h3>
                  <ul className="space-y-2">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="text-tech-green mr-3 flex-shrink-0 mt-1" size={18} />
                        <span className="text-tech-gray">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mockups */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Mockups del Proyecto</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.mockups.map((mockup, index) => (
              <div key={index} className="glass-card p-2 rounded-xl overflow-hidden transition-transform hover:scale-[1.02]">
                <img
                  src={mockup}
                  alt={`Mockup ${index + 1} - ${project.title}`}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Navegación entre proyectos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center glass-card p-6 rounded-xl">
            <NavLink
              to={`/proyectos/${project.prevProject}`}
              className="flex items-center text-tech-gray hover:text-tech-purple transition-colors"
            >
              <ArrowLeft size={18} className="mr-2" />
              Proyecto anterior
            </NavLink>
            
            <NavLink
              to="/proyectos"
              className="my-4 sm:my-0 text-tech-purple hover:underline transition-colors"
            >
              Ver todos los proyectos
            </NavLink>
            
            <NavLink
              to={`/proyectos/${project.nextProject}`}
              className="flex items-center text-tech-gray hover:text-tech-purple transition-colors"
            >
              Proyecto siguiente
              <ArrowRight size={18} className="ml-2" />
            </NavLink>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-tech-darker">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              ¿Te gustaría un proyecto similar?
            </h2>
            <p className="text-tech-gray text-lg mb-8">
              Puedo ayudarte a crear un sitio web personalizado con el mismo nivel de calidad y atención al detalle
            </p>
            <a
              href="https://wa.me/5215555555555?text=Hola,%20vi%20tu%20proyecto%20de%20{project.title}%20y%20me%20gustaría%20algo%20similar"
              target="_blank"
              rel="noopener noreferrer"
              className="tech-btn inline-flex items-center gap-2"
            >
              Solicitar un proyecto como este
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
