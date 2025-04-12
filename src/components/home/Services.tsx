
import { CheckCircle2, XCircle } from "lucide-react";
import { NavLink } from "react-router-dom";

const Services = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Servicios Especializados</h2>
          <p className="section-subtitle mt-4">
            Me especializo exclusivamente en frontend visual con enfoque en crear
            sitios web impactantes y personalizados desde cero
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Lo que hago */}
          <div className="glass-card p-8 transform hover:scale-[1.02] transition-transform">
            <div className="flex items-center mb-6">
              <CheckCircle2 className="text-tech-green mr-4" size={24} />
              <h3 className="text-xl font-bold">Lo que hago</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Sitios institucionales modernos con efectos visuales impactantes",
                "Landing pages personalizadas y optimizadas para convertir",
                "Portfolios profesionales con animaciones fluidas",
                "Sitios web con diseño único y 100% responsivo",
              ].map((item, index) => (
                <li key={index} className="flex">
                  <CheckCircle2 className="text-tech-green mr-3 flex-shrink-0" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Lo que NO hago */}
          <div className="glass-card p-8 transform hover:scale-[1.02] transition-transform">
            <div className="flex items-center mb-6">
              <XCircle className="text-destructive mr-4" size={24} />
              <h3 className="text-xl font-bold">Lo que NO hago</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Tiendas online o sistemas de e-commerce",
                "Arreglos o mantenimiento de sitios existentes",
                "Aplicaciones web complejas o sistemas de gestión",
                "Modificaciones a plantillas prediseñadas",
                "Sistemas con backend complejo o bases de datos",
                "Blogs con panel administrativo",
              ].map((item, index) => (
                <li key={index} className="flex">
                  <XCircle className="text-destructive mr-3 flex-shrink-0" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <NavLink
            to="/servicios"
            className="tech-btn inline-flex items-center gap-2"
          >
            Ver detalles de servicios
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Services;

