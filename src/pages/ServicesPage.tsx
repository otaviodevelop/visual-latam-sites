
import Layout from "@/components/layout/Layout";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      id: "sites",
      title: "Sites Institucionais",
      description:
        "Sites modernos e profissionais projetados para representar a identidade da sua marca ou empresa com foco na experiência do usuário e design impactante.",
      features: [
        "Design personalizado e único",
        "Experiência de usuário intuitiva",
        "Adaptável a todos os dispositivos",
        "Animações e efeitos visuais",
        "Otimizado para velocidade",
        "Integração com redes sociais",
      ],
      image: "https://placehold.co/800x600/0F172A/FFFFFF?text=Sites+Institucionais",
    },
    {
      id: "landing",
      title: "Landing Pages",
      description:
        "Páginas de destino estrategicamente projetadas para converter visitantes em clientes, com foco em chamadas para ação e apresentação efetiva dos seus produtos ou serviços.",
      features: [
        "Foco em conversão",
        "Chamadas para ação estratégicas",
        "Design persuasivo",
        "Formulários otimizados",
        "Carregamento rápido para reduzir rejeições",
        "Testes A/B para maximizar resultados",
      ],
      image: "https://placehold.co/800x600/0F172A/FFFFFF?text=Landing+Pages",
    },
    {
      id: "portfolios",
      title: "Portfólios Profissionais",
      description:
        "Portfólios visuais que destacam seu trabalho de maneira profissional e atrativa, ideais para fotógrafos, designers, arquitetos e outros profissionais criativos.",
      features: [
        "Galerias visuais impactantes",
        "Organização por categorias ou projetos",
        "Transições fluidas entre projetos",
        "Funcionalidades de zoom e navegação",
        "Integração com plataformas criativas",
        "Design que complementa seu trabalho",
      ],
      image: "https://placehold.co/800x600/0F172A/FFFFFF?text=Portfolios",
    }
  ];

  const nonServices = [
    {
      title: "E-commerce e lojas online",
      description:
        "Não desenvolvo lojas online completas ou sistemas de e-commerce que necessitem de gestão de inventário, pagamentos online e funcionalidades avançadas de comércio.",
    },
    {
      title: "Manutenção de sites existentes",
      description:
        "Meu foco está em criar novos projetos do zero, não em modificar ou manter sites existentes desenvolvidos por terceiros.",
    },
    {
      title: "Aplicações web complexas",
      description:
        "Não desenvolvo aplicações web que necessitem de lógica de backend complexa, bancos de dados avançados ou funcionalidades tipo SaaS.",
    },
    {
      title: "Modificações de templates",
      description:
        "Não trabalho com templates pré-desenhados nem realizo modificações em temas existentes. Todos os meus projetos são desenhados e desenvolvidos sob medida.",
    },
    {
      title: "Blogs e sistemas de conteúdo",
      description:
        "Não desenvolvo blogs que necessitem de painel administrativo, sistema de gestão de conteúdo ou funcionalidades complexas de publicação.",
    }
  ];

  return (
    <Layout>
      {/* Hero de Serviços */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-tech-purple/20 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-tech-blue/20 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
              <span className="gradient-text">Serviços</span> de Desenvolvimento
            </h1>
            <p className="text-xl text-tech-gray">
              Me especializo em criar experiências web visuais e modernas, 
              trabalhando exclusivamente com tecnologias frontend de última geração.
            </p>
          </div>
        </div>
      </section>

      {/* Lista de Serviços */}
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
                    href={`https://wa.me/5215555555555?text=Olá,%20tenho%20interesse%20em%20um%20serviço%20de%20${encodeURIComponent(service.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tech-btn inline-flex items-center gap-2"
                  >
                    Solicitar este serviço
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* O que eu NÃO faço */}
      <section className="py-16 bg-tech-darker">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">O que eu NÃO faço</h2>
            <p className="section-subtitle mt-4">
              Para garantir a máxima qualidade no meu trabalho, me especializo exclusivamente em certos tipos de projetos
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
              Tem um projeto em mente?
            </h2>
            <p className="text-xl text-tech-gray mb-8">
              Me conte sobre sua ideia e juntos podemos criar uma experiência web única que destaque sua marca
            </p>
            <a
              href="https://wa.me/5215555555555?text=Olá,%20tenho%20interesse%20em%20conversar%20sobre%20um%20projeto"
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

export default ServicesPage;
