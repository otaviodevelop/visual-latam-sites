
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";

const allProjects = [
  {
    id: "projeto-1",
    title: "Escritório Jurídico Méndez",
    description: "Landing page moderna para escritório de advocacia com foco em converter visitas em consultas",
    image: "/mendez.png",
    category: "Landing Page",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
    featured: true,
  },
  {
    id: "projeto-2",
    title: "Consultoria Financeira GL",
    description: "Site institucional com animações personalizadas para empresa de consultoria financeira",
    image: "/gl.png",
    category: "Site Institucional",
    technologies: ["React.js", "Tailwind CSS", "Lottie"],
    featured: true,
  },
  {
    id: "projeto-3",
    title: "Arquiteta Julia Vega",
    description: "Portfólio visual com galeria de projetos para estúdio de arquitetura contemporânea",
    image: "/juliavega.png",
    category: "Portfólio",
    technologies: ["React.js", "Framer Motion", "Tailwind CSS"],
    featured: true,
  },
  {
    id: "projeto-5",
    title: "Fotógrafo Carlos Ramírez",
    description: "Portfólio fotográfico com galerias interativas e transições fluidas entre projetos",
    image: "/ramirez.png",
    category: "Portfólio",
    technologies: ["React.js", "Framer Motion"],
    featured: false,
  },
  {
    id: "projeto-6",
    title: "Academia de Idiomas GlobalTalk",
    description: "Site para academia de idiomas com seções informativas e formulário de contato",
    image: "/globaltalk.png",
    category: "Site Institucional",
    technologies: ["React.js", "Tailwind CSS"],
    featured: false,
  },
    {
    id: "projeto-7",
    title: "EcoVeritas Consulting",
    description: "Site institucional para consultoria de sustentabilidade e meio ambiente",
    image: "/ecoveritas.png",
    category: "Site Institucional",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
    featured: false,
  },
];

const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Extrair categorias únicas
  const categories = Array.from(new Set(allProjects.map((project) => project.category)));
  
  // Filtrar projetos
  const filteredProjects = allProjects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory ? project.category === selectedCategory : true;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      {/* Hero de Projetos */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-tech-purple/20 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-tech-blue/20 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
              <span className="gradient-text">Projetos</span> Realizados
            </h1>
            <p className="text-xl text-tech-gray">
              Uma seleção dos meus trabalhos mais recentes, mostrando designs personalizados 
              e experiências web modernas para diversos tipos de clientes
            </p>
          </div>
        </div>
      </section>

      {/* Filtros e Busca */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
            {/* Filtros por categoria */}
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
            
            {/* Busca */}
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Buscar projetos..."
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
          
          {/* Projetos */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <NavLink
                  key={project.id}
                  to={`/projetos/${project.id}`}
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
                        Destaque
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-tech-purple transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-tech-gray mb-4">{project.description}</p>
                    
                    {/* Tecnologias */}
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
                      <span className="text-sm font-medium">Ver detalhes</span>
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </NavLink>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-2">Nenhum projeto encontrado</h3>
              <p className="text-tech-gray">
                Tente com outros termos de busca ou selecione outra categoria
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
            <h2 className="text-3xl font-bold mb-4">Gostaria de ter um projeto assim?</h2>
            <p className="text-tech-gray text-lg mb-8">
              Posso criar um site personalizado que reflita a identidade da sua marca e se destaque entre a concorrência
            </p>
            <a
              href="https://wa.me/5215555555555?text=Olá,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto"
              target="_blank"
              rel="noopener noreferrer"
              className="tech-btn inline-flex items-center gap-2"
            >
              Vamos conversar sobre seu projeto
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
