
import { useParams, NavLink } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink, Check } from "lucide-react";
import Layout from "@/components/layout/Layout";

// Dados de exemplo para projetos
const projects = [
  {
    id: "projeto-1",
    title: "Estúdio Jurídico Méndez",
    description:
      "Landing page moderna para escritório de advocacia com foco em converter visitas em consultas. O design foi criado para transmitir profissionalismo e confiança, elementos chave para um estúdio jurídico.",
    image: "/mendez.png",
    mockups: [
      "/mockup1.png",
      "/mockup2.png",
      "/mockup3.png",
    ],
    category: "Landing Page",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
    client: "Estúdio Méndez & Associados",
    duration: "3 semanas",
    year: "2023",
    challenge:
      "O cliente precisava renovar sua imagem digital para atrair um público mais jovem sem perder a seriedade que caracteriza seu escritório. A página deveria ter um alto índice de conversão para consultas iniciais.",
    solution:
      "Desenvolvemos uma landing page com um design moderno mas profissional, implementando seções estratégicas como depoimentos, áreas de prática e um formulário de contato otimizado para converter visitas em consultas.",
    results: [
      "Aumento de 40% em consultas online",
      "Redução de 25% na taxa de rejeição",
      "Melhoria de 60% no tempo de carregamento",
      "Experiência consistente em todos os dispositivos",
    ],
    liveUrl: "https://mendez-legal.vercel.app/",
    nextProject: "projeto-2",
    prevProject: "projeto-3",
  },
  {
    id: "projeto-2",
    title: "Consultoria Financeira GL",
    description:
      "Site institucional com animações personalizadas para empresa de consultoria financeira. O design se concentra em transmitir confiabilidade e experiência no mercado financeiro.",
    image: "/gl.png",
    mockups: [
      "/gl_mockup1.png",
      "/gl_mockup2.png",
      "/gl_mockup3.png",
    ],
    category: "Site Institucional",
    technologies: ["React.js", "Tailwind CSS", "Lottie"],
    client: "Grupo Liderma Consultores",
    duration: "6 semanas",
    year: "2024",
    challenge:
      "A consultoria buscava se diferenciar visualmente da concorrência enquanto comunicava efetivamente seus serviços complexos para potenciais clientes de forma clara e atrativa.",
    solution:
      "Criamos um site com animações personalizadas que ilustram conceitos financeiros complexos de forma visual e intuitiva, implementando um design elegante com toques animados que destacam as informações-chave.",
    results: [
      "Aumento de 35% no tempo de permanência",
      "Incremento de 50% nas solicitações de informação",
      "Melhoria na percepção de marca segundo pesquisas",
      "Maior engajamento nas seções com animações",
    ],
    liveUrl: "https://gl-financeira.vercel.app/",
    nextProject: "projeto-3",
    prevProject: "projeto-1",
  },
  {
    id: "projeto-3",
    title: "Arquiteta Julia Vega",
    description:
      "Portfólio visual com galeria de projetos para estúdio de arquitetura contemporânea. O site foi projetado para destacar os projetos da arquiteta com uma abordagem minimalista que realça as imagens.",
    image: "/juliavega.png",
    mockups: [
      "/julia_mk1.png",
      "/julia_mk2.png",
      "/julia_mk3.png",
    ],
    category: "Portfólio",
    technologies: ["React.js", "Framer Motion", "Tailwind CSS"],
    client: "Estúdio Vega Arquitetura",
    duration: "4 semanas",
    year: "2023",
    challenge:
      "A arquiteta precisava de um portfólio que mostrasse seus projetos de maneira impactante, com foco na experiência visual e na navegação intuitiva entre diferentes obras.",
    solution:
      "Desenvolvemos um portfólio minimalista com transições fluidas entre projetos, galerias com zoom detalhado e reprodutor de vídeo integrado para mostrar percursos virtuais das obras mais importantes.",
    results: [
      "Tempo médio de visita aumentou em 70%",
      "Aumento de 45% nas solicitações de orçamento",
      "Melhoria na apresentação de projetos para clientes",
      "Experiência visual premium em dispositivos de alta resolução",
    ],
    liveUrl: "https://julia-vega.vercel.app/",
    nextProject: "projeto-1",
    prevProject: "projeto-2",
  },
  {
    id: "projeto-5",
    title: "Fotógrafo Carlos Ramírez",
    description:
      "Portfólio fotográfico com galerias interativas e transições fluidas entre projetos para fotógrafo profissional especializado em retratos e eventos.",
    image: "/ramirez.png",
    mockups: [
      "/ramirez_mk1.png",
      "/ramirez_mk2.png",
      "/ramirez_mk3.png",
    ],
    category: "Portfólio",
    technologies: ["React.js", "Framer Motion"],
    client: "Carlos Ramírez Photography",
    duration: "4 semanas",
    year: "2022",
    challenge:
      "O fotógrafo precisava de uma plataforma que mostrasse seu trabalho com a máxima qualidade possível sem comprometer a velocidade de carregamento, e que apresentasse suas fotografias de forma imersiva.",
    solution:
      "Implementamos um sistema de galerias com carregamento progressivo de imagens em alta resolução, efeitos de transição suaves e visualização em tela cheia com navegação intuitiva entre coleções.",
    results: [
      "Aumento de 65% nas solicitações de sessão",
      "Melhoria na apresentação para clientes corporativos",
      "Maior alcance internacional do seu trabalho",
      "Compatibilidade com dispositivos de alta resolução",
    ],
    liveUrl: "https://ramirez-fotografo.vercel.app/",
    nextProject: "projeto-6",
    prevProject: "projeto-4",
  },
  {
    id: "projeto-6",
    title: "Academia de Idiomas GlobalTalk",
    description:
      "Site para academia de idiomas com seções informativas e formulário de contato, projetado para atrair estudantes e apresentar claramente os programas disponíveis.",
    image: "/globaltalk.png",
    mockups: [
      "/globalmk1.png",
      "/globalmk2.png",
      "/globalmk3.png",
    ],
    category: "Site Institucional",
    technologies: ["React.js", "Tailwind CSS"],
    client: "GlobalTalk Languages",
    duration: "5 semanas",
    year: "2022",
    challenge:
      "A academia precisava de um site que apresentasse claramente sua ampla oferta de cursos e níveis, facilitando a inscrição de novos estudantes e destacando suas metodologias de ensino.",
    solution:
      "Desenvolvemos uma plataforma com buscador inteligente de cursos, sistema de filtragem por idiomas e níveis, depoimentos de estudantes e um processo simplificado para solicitar informações ou inscrição.",
    results: [
      "Aumento de 70% nas solicitações de informação",
      "Incremento de 50% nas inscrições online",
      "Redução do tempo para encontrar cursos específicos",
      "Melhoria na comunicação de metodologias e benefícios",
    ],
    liveUrl: "https://globaltalk-learn-connect.vercel.app/",
    nextProject: "projeto-7",
    prevProject: "projeto-5",
  },
  {
    id: "projeto-7",
    title: "EcoVeritas Consulting",
    description:
      "Site institucional para consultoria de sustentabilidade e meio ambiente, com design profissional e moderno focado em fortalecer a presença online, atrair clientes corporativos e comunicar suas áreas de atuação.",
    image: "/ecoveritas.png",
    mockups: [
      "/ecoveritasmk1.png",
      "/ecoveritasmk2.png",
      "/ecoveritasmk3.png",
    ],
    category: "Site Institucional",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
    client: "EcoVeritas Consulting",
    duration: "5 semanas",
    year: "2025",
    challenge:
      "A EcoVeritas precisava de uma plataforma clara e moderna que transmitisse confiança, profissionalismo e compromisso ambiental. Seu objetivo era aumentar o alcance digital, atrair novas empresas interessadas em seus serviços e facilitar o contato direto.",
    solution:
      "Projetamos um site institucional com navegação intuitiva, design visual alinhado à temática ecológica e conteúdo estratégico. Incluímos seções de serviços, perguntas frequentes, casos de sucesso e um formulário de contato otimizado.",
    results: [
      "Aumento de 60% em contatos de empresas interessadas",
      "Melhoria no posicionamento da marca como referência em sustentabilidade",
      "Redução de consultas repetitivas graças a uma seção de perguntas frequentes",
      "Incremento na participação em eventos e palestras graças à visibilidade online",
    ],
    liveUrl: "https://eco-veritas-phi.vercel.app/",
    nextProject: "projeto-1",
    prevProject: "projeto-6",
  },
];

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Projeto não encontrado</h1>
          <p className="text-tech-gray mb-8">
            O projeto que você está procurando não existe ou foi removido.
          </p>
          <NavLink
            to="/projetos"
            className="tech-btn inline-flex items-center gap-2"
          >
            Ver todos os projetos
            <ArrowRight size={18} />
          </NavLink>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero do Projeto */}
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-tech-purple/20 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-tech-blue/20 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div>
              <NavLink
                to="/projetos"
                className="inline-flex items-center text-tech-gray hover:text-tech-purple transition-colors mb-4"
              >
                <ArrowLeft size={16} className="mr-2" />
                Voltar para projetos
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
              Visitar site
              <ExternalLink size={16} />
            </a>
          </div>
          
          {/* Imagem principal */}
          <div className="glass-card p-2 rounded-xl overflow-hidden shadow-2xl mt-12">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Detalhes do Projeto */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Informação do Projeto */}
            <div className="glass-card p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6">Informações do Projeto</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm text-tech-gray">Cliente</h3>
                  <p className="text-lg font-medium">{project.client}</p>
                </div>
                
                <div>
                  <h3 className="text-sm text-tech-gray">Categoria</h3>
                  <p className="text-lg font-medium">{project.category}</p>
                </div>
                
                <div>
                  <h3 className="text-sm text-tech-gray">Ano</h3>
                  <p className="text-lg font-medium">{project.year}</p>
                </div>
                
                <div>
                  <h3 className="text-sm text-tech-gray">Duração</h3>
                  <p className="text-lg font-medium">{project.duration}</p>
                </div>
                
                <div>
                  <h3 className="text-sm text-tech-gray">Tecnologias</h3>
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
            
            {/* Descrição do Projeto */}
            <div className="md:col-span-2 glass-card p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6">Sobre o Projeto</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium mb-3">O Desafio</h3>
                  <p className="text-tech-gray">{project.challenge}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-3">A Solução</h3>
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
          <h2 className="text-2xl font-bold mb-8">Mockups do Projeto</h2>
          
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
      
      {/* Navegação entre projetos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center glass-card p-6 rounded-xl">
            <NavLink
              to={`/projetos/${project.prevProject}`}
              className="flex items-center text-tech-gray hover:text-tech-purple transition-colors"
            >
              <ArrowLeft size={18} className="mr-2" />
              Projeto anterior
            </NavLink>
            
            <NavLink
              to="/projetos"
              className="my-4 sm:my-0 text-tech-purple hover:underline transition-colors"
            >
              Ver todos os projetos
            </NavLink>
            
            <NavLink
              to={`/projetos/${project.nextProject}`}
              className="flex items-center text-tech-gray hover:text-tech-purple transition-colors"
            >
              Próximo projeto
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
              Gostaria de um projeto similar?
            </h2>
            <p className="text-tech-gray text-lg mb-8">
              Posso ajudá-lo a criar um site personalizado com o mesmo nível de qualidade e atenção aos detalhes
            </p>
            <a
              href="https://wa.me/5215555555555?text=Olá,%20vi%20seu%20projeto%20de%20{project.title}%20e%20gostaria%20de%20algo%20similar"
              target="_blank"
              rel="noopener noreferrer"
              className="tech-btn inline-flex items-center gap-2"
            >
              Solicitar um projeto como este
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
