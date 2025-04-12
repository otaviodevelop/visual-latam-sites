
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Datos de ejemplo para proyectos
const projects = [
  {
    id: "proyecto-1",
    title: "Estudio Jurídico Méndez",
    description: "Landing page moderna para bufete de abogados",
    image: "/mendez.png",
    category: "Landing Page",
  },
  {
    id: "proyecto-2",
    title: "Consultora Financiera GL",
    description: "Sitio web institucional con animaciones personalizadas",
    image: "/gl.png",
    category: "Sitio Institucional",
  },
  {
    id: "proyecto-3",
    title: "Arquitecta Julia Vega",
    description: "Portfolio visual con galería de proyectos",
    image: "/juliavega.png",
    category: "Portfolio",
  },
];

const ProjectsShowcase = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Proyectos Destacados</h2>
          <p className="section-subtitle mt-4">
            Diseño personalizado y experiencias visuales únicas para cada cliente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <NavLink
              key={project.id}
              to={`/proyectos/${project.id}`}
              className="block glass-card overflow-hidden rounded-lg group glow-effect"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
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
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-tech-purple transition-colors">
                  {project.title}
                </h3>
                <p className="text-tech-gray mb-4">{project.description}</p>
                <div className="flex items-center text-tech-purple">
                  <span className="text-sm font-medium">Ver proyecto</span>
                  <ArrowRight
                    size={16}
                    className={`ml-2 transition-transform duration-300 ${
                      hoveredProject === project.id ? "translate-x-1" : ""
                    }`}
                  />
                </div>
              </div>
            </NavLink>
          ))}
        </div>

        <div className="text-center mt-12">
          <NavLink
            to="/proyectos"
            className="tech-btn-outline inline-flex items-center gap-2"
          >
            Ver todos los proyectos
            <ArrowRight size={18} />
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
