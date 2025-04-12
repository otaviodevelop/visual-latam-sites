
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
      <h4 className="text-lg font-medium mb-3">Benefícios:</h4>
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
      "Biblioteca JavaScript para construir interfaces de usuário interativas e reutilizáveis, permitindo criar sites dinâmicos e de alto desempenho.",
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="2.5" stroke="#8B5CF6" stroke-width="1.5"/>
            <path d="M12 6C14.9932 3.33333 18.1222 3.2773 20.6667 4.33333C23.6667 5.55555 23 9.33333 21.3333 12C23.7651 16 21.7604 19.1111 19.3333 20.1111C16.6667 21.2222 14.5744 20 12 18" stroke="#8B5CF6" stroke-width="1.5"/>
            <path d="M12 6C9.00683 3.33333 5.87777 3.2773 3.33333 4.33333C0.333333 5.55555 1 9.33333 2.66667 12C0.234907 16 2.23962 19.1111 4.66667 20.1111C7.33333 21.2222 9.42556 20 12 18" stroke="#8B5CF6" stroke-width="1.5"/>
          </svg>`,
    benefits: [
      "Componentes reutilizáveis que melhoram a manutenção",
      "DOM virtual para renderização eficiente",
      "Ecossistema amplo e comunidade ativa",
      "Excelente para interfaces de usuário dinâmicas",
      "Ideal para Single Page Applications",
    ],
  },
  {
    title: "Tailwind CSS",
    description:
      "Framework CSS utilitário que permite construir designs personalizados diretamente na marcação, acelerando o desenvolvimento e facilitando a consistência visual.",
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.96 14.4C7.68 14.4 8.28 14.1 8.76 13.5C9.24 12.9 9.48 12.09 9.48 11.07C9.48 10.05 9.24 9.24 8.76 8.64C8.28 8.04 7.68 7.74 6.96 7.74C6.24 7.74 5.64 8.04 5.16 8.64C4.68 9.24 4.44 10.05 4.44 11.07C4.44 12.09 4.68 12.9 5.16 13.5C5.64 14.1 6.24 14.4 6.96 14.4ZM7.5 16.26C6.06 16.26 4.86 15.75 3.9 14.73C2.94 13.71 2.46 12.47 2.46 11.01C2.46 9.55 2.94 8.31 3.9 7.29C4.86 6.27 6.06 5.76 7.5 5.76C8.94 5.76 10.14 6.27 11.1 7.29C12.06 8.31 12.54 9.55 12.54 11.01C12.54 12.47 12.06 13.71 11.1 14.73C10.14 15.75 8.94 16.26 7.5 16.26ZM17.04 14.4C17.76 14.4 18.36 14.1 18.84 13.5C19.32 12.9 19.56 12.09 19.56 11.07C19.56 10.05 19.32 9.24 18.84 8.64C18.36 8.04 17.76 7.74 17.04 7.74C16.32 7.74 15.72 8.04 15.24 8.64C14.76 9.24 14.52 10.05 14.52 11.07C14.52 12.09 14.76 12.9 15.24 13.5C15.72 14.1 16.32 14.4 17.04 14.4ZM16.5 18.24C15.06 18.24 13.86 17.73 12.9 16.71C11.94 15.69 11.46 14.45 11.46 12.99C11.46 11.53 11.94 10.29 12.9 9.27C13.86 8.25 15.06 7.74 16.5 7.74C17.94 7.74 19.14 8.25 20.1 9.27C21.06 10.29 21.54 11.53 21.54 12.99C21.54 14.45 21.06 15.69 20.1 16.71C19.14 17.73 17.94 18.24 16.5 18.24Z" fill="#8B5CF6"/>
          </svg>`,
    benefits: [
      "Designs personalizados sem sair do HTML",
      "Geração de CSS otimizado com purge",
      "Desenvolvimento rápido com classes utilitárias",
      "Altamente personalizável através de configuração",
      "Excelente para interfaces responsivas",
    ],
  },
  {
    title: "Framer Motion",
    description:
      "Biblioteca de animações para React que permite criar transições fluidas, gestos interativos e efeitos de movimento com uma API declarativa e fácil de usar.",
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="18" height="18" x="3" y="3" rx="2" stroke="#8B5CF6" stroke-width="1.5"/>
            <circle cx="9" cy="9" r="2" stroke="#8B5CF6" stroke-width="1.5"/>
            <path d="m15 9-3 3" stroke="#8B5CF6" stroke-width="1.5"/>
            <path d="m15 15-6-6" stroke="#8B5CF6" stroke-width="1.5"/>
            <circle cx="15" cy="15" r="2" stroke="#8B5CF6" stroke-width="1.5"/>
          </svg>`,
    benefits: [
      "Animações fluidas e desempenho otimizado",
      "API declarativa que facilita implementação",
      "Transições entre páginas e componentes",
      "Efeitos de paralaxe e scroll avançados",
      "Animações baseadas em gestos",
    ],
  },
  {
    title: "Lottie React",
    description:
      "Biblioteca que permite integrar animações vetoriais leves e de alta qualidade em aplicações web, criadas no Adobe After Effects e exportadas como JSON.",
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 2h8" stroke="#8B5CF6" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2" stroke="#8B5CF6" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M7 15h10" stroke="#8B5CF6" stroke-width="1.5" stroke-linecap="round"/>
          </svg>`,
    benefits: [
      "Animações vetoriais leves e escaláveis",
      "Interatividade controlada por código",
      "Melhora a experiência do usuário",
      "Compatível com ferramentas de design populares",
      "Desempenho otimizado para web",
    ],
  },
  {
    title: "React Router DOM",
    description:
      "Biblioteca de roteamento para React que permite criar navegação entre páginas sem recarregar o navegador, melhorando a experiência do usuário com transições suaves.",
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="#8B5CF6" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="#8B5CF6" stroke-width="1.5" stroke-linecap="round"/>
          </svg>`,
    benefits: [
      "Navegação sem recarga para melhor UX",
      "Roteamento dinâmico e parametrizado",
      "Gestão de histórico do navegador",
      "Carregamento lazy de componentes",
      "Integração perfeita com React",
    ],
  },
  {
    title: "React Player",
    description:
      "Componente para reproduzir uma variedade de URLs no React, como YouTube, Facebook, Twitch, SoundCloud, Streamable, Vimeo, Wistia, Mixcloud e arquivos de vídeo/áudio.",
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="23 7 16 12 23 17 23 7" stroke="#8B5CF6" stroke-width="1.5"/>
            <rect width="15" height="14" x="1" y="5" rx="2" stroke="#8B5CF6" stroke-width="1.5"/>
            <path d="M1 10h15" stroke="#8B5CF6" stroke-width="1.5"/>
          </svg>`,
    benefits: [
      "Reprodução de múltiplos formatos de vídeo",
      "Controles personalizáveis",
      "Responsivo e adaptável a diferentes dispositivos",
      "Eventos e callbacks para integração avançada",
      "Suporte para múltiplas plataformas de vídeo",
    ],
  }
];

const TechnologiesPage = () => {
  return (
    <Layout>
      {/* Hero de Tecnologias */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-tech-purple/20 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-tech-blue/20 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
              <span className="gradient-text">Tecnologias</span> Modernas
            </h1>
            <p className="text-xl text-tech-gray">
              Trabalho exclusivamente com tecnologias de última geração para 
              garantir um desempenho ótimo e uma experiência de usuário excepcional
            </p>
          </div>
        </div>
      </section>

      {/* Grid de Tecnologias */}
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
            <h2 className="text-2xl font-bold mb-6">Minha abordagem tecnológica</h2>
            <p className="text-tech-gray mb-6">
              Minha filosofia é trabalhar apenas com tecnologias modernas que garantam:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-tech-purple mr-2 text-xl">•</span>
                <span>
                  <strong className="text-white">Desempenho excepcional</strong> - Sites rápidos que carregam em milissegundos
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-tech-purple mr-2 text-xl">•</span>
                <span>
                  <strong className="text-white">Experiência visual impactante</strong> - Animações e efeitos que causam uma impressão duradoura
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-tech-purple mr-2 text-xl">•</span>
                <span>
                  <strong className="text-white">Código limpo e mantível</strong> - Para facilitar atualizações futuras
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-tech-purple mr-2 text-xl">•</span>
                <span>
                  <strong className="text-white">Responsividade total</strong> - Funciona perfeitamente em todos os dispositivos
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-tech-purple mr-2 text-xl">•</span>
                <span>
                  <strong className="text-white">Inovação constante</strong> - Sempre atualizado com as últimas tendências e melhores práticas
                </span>
              </li>
            </ul>
            
            <div className="font-medium text-tech-gray italic border-l-4 border-tech-purple pl-4 py-2">
              "Trabalho apenas com tecnologias modernas que garantem desempenho e design. 
              Meu objetivo é criar sites que não apenas pareçam incríveis, mas também 
              ofereçam uma experiência de usuário excepcional."
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
              Procurando um site com tecnologia de ponta?
            </h2>
            <p className="text-xl text-tech-gray mb-8">
              Vamos conversar sobre como posso ajudar você a criar uma presença online moderna e de alto desempenho
            </p>
            <a
              href="https://wa.me/5215555555555?text=Olá,%20estou%20interessado%20em%20conversar%20sobre%20as%20tecnologias%20que%20você%20usa"
              target="_blank"
              rel="noopener noreferrer"
              className="tech-btn inline-flex items-center gap-2"
            >
              Solicite uma consulta gratuita
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TechnologiesPage;
