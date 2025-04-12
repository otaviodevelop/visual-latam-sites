
import Layout from "@/components/layout/Layout";
import { ArrowRight } from "lucide-react";

const AboutPage = () => {
  // Dados para as habilidades
  const skills = [
    { name: "Design UI/UX", level: 95 },
    { name: "React.js", level: 90 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Framer Motion", level: 85 },
    { name: "Lottie Animations", level: 80 },
    { name: "Otimização Frontend", level: 85 },
  ];

  return (
    <Layout>
      {/* Hero Sobre Mim */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-tech-purple/20 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-tech-blue/20 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-5/12">
              <div className="rounded-2xl overflow-hidden glass-card p-3 glow-effect">
                <img
                  src="/yo.jpeg"
                  alt="Otávio Augusto"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
            
            <div className="w-full md:w-7/12">
              <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
                Olá, sou <span className="gradient-text">Otávio Augusto</span>
              </h1>
              
              <p className="text-xl text-tech-gray mb-6 leading-relaxed">
                Desenvolvedor frontend especializado em criar experiências web 
                visualmente impactantes e altamente funcionais para clientes 
                na América Latina.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="py-2 px-4 bg-white/5 rounded-full">
                  <span className="text-tech-gray">Nacionalidade:</span>
                  <span className="ml-2 font-medium">Brasileiro</span>
                </div>
                
                <div className="py-2 px-4 bg-white/5 rounded-full">
                  <span className="text-tech-gray">Idiomas:</span>
                  <span className="ml-2 font-medium">Português, Espanhol</span>
                </div>
                
                <div className="py-2 px-4 bg-white/5 rounded-full">
                  <span className="text-tech-gray">Experiência:</span>
                  <span className="ml-2 font-medium">+5 anos</span>
                </div>
              </div>
              
              <a
                href="https://wa.me/+5521995444161?text=Olá%20Otávio,%20vi%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto"
                target="_blank"
                rel="noopener noreferrer"
                className="tech-btn inline-flex items-center gap-2"
              >
                Contatar
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Minha História */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto glass-card p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-6">Minha história</h2>
            
            <div className="space-y-6 text-tech-gray leading-relaxed">
              <p>
                Sou brasileiro de nascimento, e minha carreira profissional me conectou profundamente com toda a América Latina. Desde muito jovem, desenvolvi uma paixão pelo design web e tecnologia, o que me levou a me especializar em desenvolvimento frontend.
              </p>
              
              <p>
                Minha jornada começou há mais de 5 anos quando criei meu primeiro site para uma pequena empresa local. Desde então, tive a oportunidade de trabalhar com clientes de diversos países da América Latina, permitindo-me mergulhar em diferentes culturas e me adaptar às necessidades específicas de cada mercado.
              </p>
              
              <p>
                Me apaixonei pela diversidade cultural durante projetos colaborativos com agências em diferentes países, e desde então mantenho um vínculo especial com clientes de toda região. Meu objetivo é continuar construindo pontes digitais entre empresas latinas e seus públicos através de experiências web memoráveis.
              </p>
              
              <p className="font-medium italic text-white border-l-4 border-tech-purple pl-4 py-2">
                "Não apenas construo sites, mas experiências visuais que conectam marcas com pessoas. Cada linha de código é uma oportunidade para criar algo extraordinário."
              </p>
              
              <p>
                Me especializo exclusivamente no desenvolvimento frontend visual, focando em criar sites estáticos de alto impacto. Esta especialização me permite oferecer a máxima qualidade em cada projeto, concentrando-me no que sei fazer melhor: criar interfaces bonitas, rápidas e funcionais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Habilidades */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Minhas habilidades</h2>
          
          <div className="max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="mb-8">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-tech-gray">{skill.level}%</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-tech-purple to-tech-blue"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meu Enfoque */}
      <section className="py-16 bg-tech-darker">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Meu enfoque profissional</h2>
            <p className="section-subtitle mt-4">
              O que me torna diferente como desenvolvedor frontend
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="glass-card p-6 rounded-xl">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-tech-purple/10 text-tech-purple mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 18v-6" />
                  <path d="M8 18v-1" />
                  <path d="M16 18v-3" />
                  <path d="M9 6v1" />
                  <path d="M15 6v3" />
                  <path d="M12 6v6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">
                Especialização total
              </h3>
              <p className="text-tech-gray">
                Me concentro exclusivamente no desenvolvimento frontend visual, 
                o que me permite dominar completamente essas tecnologias e 
                oferecer resultados excepcionais em cada projeto.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-tech-purple/10 text-tech-purple mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 10 2 2 4-4" />
                  <rect width="20" height="14" x="2" y="3" rx="2" />
                  <path d="M12 17v4" />
                  <path d="M8 21h8" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">
                Atenção aos detalhes
              </h3>
              <p className="text-tech-gray">
                Cada pixel importa. Me obsessiono com os pequenos detalhes 
                que fazem a diferença entre um site comum e uma 
                experiência digital excepcional.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-tech-purple/10 text-tech-purple mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 10v12" />
                  <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">
                Design centrado no usuário
              </h3>
              <p className="text-tech-gray">
                Crio sites que não apenas são bonitos, mas também 
                proporcionam uma experiência intuitiva e agradável para os 
                usuários finais.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-tech-purple/10 text-tech-purple mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2l3 6.3 7 1-5 4.8 1.2 6.9-6.2-3.2Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">
                Qualidade premium
              </h3>
              <p className="text-tech-gray">
                Não me contento com o básico. Cada projeto que entrego cumpre 
                com os mais altos padrões de qualidade em design, animações 
                e desempenho.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-tech-purple/10 text-tech-purple mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m3 15 5.12-5.12A3 3 0 0 1 10.24 9H13a2 2 0 1 1 0 4h-2.5m4-.68 4.17-4.89a1.88 1.88 0 0 1 2.92 2.36l-4.2 5.94A3 3 0 0 1 14.96 17H9.83a2 2 0 0 0-1.42.59L7 19" />
                  <path d="m9 21 1-3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">
                Personalização completa
              </h3>
              <p className="text-tech-gray">
                Não utilizo templates pré-desenhados. Cada site é criado 
                do zero, personalizado para refletir a identidade única da 
                sua marca ou projeto.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-tech-purple/10 text-tech-purple mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m8 6 4-4 4 4" />
                  <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L3 22" />
                  <path d="m15 22 5-5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">
                Conexão latino-americana
              </h3>
              <p className="text-tech-gray">
                Minha experiência trabalhando com clientes no Brasil e em toda a América Latina 
                me permite entender as necessidades específicas do mercado e criar 
                soluções culturalmente relevantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Pronto para trabalharmos juntos?
            </h2>
            <p className="text-xl text-tech-gray mb-8">
              Se você está procurando um desenvolvedor frontend que possa criar uma experiência web 
              única e memorável para sua marca, estou aqui para ajudar
            </p>
            <a
              href="https://wa.me/+5521995444161?text=Olá%20Otávio,%20gostaria%20de%20conversar%20sobre%20um%20projeto"
              target="_blank"
              rel="noopener noreferrer"
              className="tech-btn inline-flex items-center gap-2"
            >
              Vamos falar sobre seu projeto
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
