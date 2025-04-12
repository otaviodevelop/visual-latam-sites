
import { CheckCircle2, XCircle } from "lucide-react";
import { NavLink } from "react-router-dom";

const Services = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Serviços Especializados</h2>
          <p className="section-subtitle mt-4">
            Me especializo exclusivamente em frontend visual com foco em criar
            sites impactantes e personalizados do zero
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* O que eu faço */}
          <div className="glass-card p-8 transform hover:scale-[1.02] transition-transform">
            <div className="flex items-center mb-6">
              <CheckCircle2 className="text-tech-green mr-4" size={24} />
              <h3 className="text-xl font-bold">O que eu faço</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Sites institucionais modernos com efeitos visuais impactantes",
                "Landing pages personalizadas e otimizadas para converter",
                "Portfólios profissionais com animações fluidas",
                "Sites com design único e 100% responsivo",
              ].map((item, index) => (
                <li key={index} className="flex">
                  <CheckCircle2 className="text-tech-green mr-3 flex-shrink-0" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* O que eu NÃO faço */}
          <div className="glass-card p-8 transform hover:scale-[1.02] transition-transform">
            <div className="flex items-center mb-6">
              <XCircle className="text-destructive mr-4" size={24} />
              <h3 className="text-xl font-bold">O que eu NÃO faço</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Lojas online ou sistemas de e-commerce",
                "Ajustes ou manutenção de sites existentes",
                "Aplicações web complexas ou sistemas de gestão",
                "Modificações em templates pré-desenhados",
                "Sistemas com backend complexo ou bancos de dados",
                "Blogs com painel administrativo",
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
            to="/servicos"
            className="tech-btn inline-flex items-center gap-2"
          >
            Ver detalhes dos serviços
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
