import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";

const allProjects = [
  {
    id: "proyecto-1",
    title: "Estudio Jurídico Méndez",
    description: "Landing page moderna para bufete de abogados con enfoque en convertir visitas en consultas",
    image: "/mendez.png",
    category: "Landing Page",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
    featured: true,
  },
  {
    id: "proyecto-2",
    title: "Consultora Financiera GL",
    description: "Sitio web institucional con animaciones personalizadas para empresa de consultoría financiera",
    image: "/gl.png",
    category: "Sitio Institucional",
    technologies: ["React.js", "Tailwind CSS", "Lottie"],
    featured: true,
  },
  {
    id: "proyecto-3",
    title: "Arquitecta Julia Vega",
    description: "Portfolio visual con galería de proyectos para estudio de arquitectura contemporánea",
    image: "/juliavega.png",
    category: "Portfolio",
    technologies: ["React.js", "Framer Motion", "Tailwind CSS"],
    featured: true,
  },
  {
    id: "proyecto-5",
    title: "Fotógrafo Carlos Ramírez",
    description: "Portfolio fotográfico con galerías interactivas y transiciones fluidas entre proyectos",
    image: "/ramirez.png",
    category: "Portfolio",
    technologies: ["React.js", "Framer Motion"],
    featured: false,
  },
  {
    id: "proyecto-6",
    title: "Academia de Idiomas GlobalTalk",
    description: "Sitio web para academia de idiomas con secciones informativas y formulario de contacto",
    image: "/globaltalk.png",
    category: "Sitio Institucional",
    technologies: ["React.js", "Tailwind CSS"],
    featured: false,
  },
    {
    id: "proyecto-7",
    title: "EcoVeritas Consulting",
    description: "Sitio institucional para consultora de sostenibilidad y medio ambiente",
    image: "/ecoveritas.png",
    category: "Sitio Institucional",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
    featured: false,
  },
];

const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Extraer categorías únicas
  const categories = Array.from(new Set(allProjects.map((project) => project.category)));
  
  // Filtrar proyectos
  const filteredProjects = allProjects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory ? project.category === selectedCategory : true;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      {/* Hero de Proyectos */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-tech-purple/20 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-tech-blue/20 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
              <span className="gradient-text">Proyectos</span> Realizados
            </h1>
            <p className="text-xl text-tech-gray">
              Una selección de mis trabajos más recientes, mostrando diseños personalizados 
              y experiencias web modernas para diversos tipos de clientes
            </p>
          </div>
        </div>
      </section>

      {/* Filtros y Búsqueda */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
            {/* Filtros por categoría */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  selectedCategory === null
                    ? "bg-tech-purple text-white"
                    : "bg-white/5 hover:bg-white/10"
                }`}
              >
                Todos
              </button>
              
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    selectedCategory === category
                      ? "bg-tech-purple text-white"
                      : "bg-white/5 hover:bg-white/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Búsqueda */}
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Buscar proyectos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-tech-purple/50 transition"
              />
              <Search
                size={18}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-tech-gray"
              />
            </div>
          </div>
          
          {/* Proyectos */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <NavLink
                  key={project.id}
                  to={`/proyectos/${project.id}`}
                  className="block glass-card overflow-hidden rounded-lg group glow-effect h-full"
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-tech-darker via-transparent to-transparent opacity-80"></div>
                    <span className="absolute top-4 left-4 text-xs font-medium py-1 px-3 rounded-full bg-tech-purple/20 backdrop-blur-sm border border-tech-purple/20 text-white">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="absolute top-4 right-4 text-xs font-medium py-1 px-3 rounded-full bg-tech-blue/20 backdrop-blur-sm border border-tech-blue/20 text-white">
                        Destacado
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-tech-purple transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-tech-gray mb-4">{project.description}</p>
                    
                    {/* Tecnologías */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs py-1 px-2 rounded bg-white/5 text-tech-gray"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center text-tech-purple">
                      <span className="text-sm font-medium">Ver detalles</span>
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </NavLink>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-2">No se encontraron proyectos</h3>
              <p className="text-tech-gray">
                Intenta con otros términos de búsqueda o selecciona otra categoría
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-tech-purple/5 to-tech-blue/5"></div>
        <div className="container mx-auto px-4">
          <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">¿Te gustaría tener un proyecto así?</h2>
            <p className="text-tech-gray text-lg mb-8">
              Puedo crear un sitio web personalizado que refleje la identidad de tu marca y destaque entre la competencia
            </p>
            <a
              href="https://wa.me/5215555555555?text=Hola,%20vi%20tu%20portafolio%20y%20me%20gustaría%20hablar%20sobre%20un%20proyecto"
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

export default ProjectsPage;
