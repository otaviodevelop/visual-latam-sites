
import Layout from "@/components/layout/Layout";
import { ArrowRight } from "lucide-react";

const AboutPage = () => {
  // Datos para las habilidades
  const skills = [
    { name: "Diseño UI/UX", level: 95 },
    { name: "React.js", level: 90 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Framer Motion", level: 85 },
    { name: "Lottie Animations", level: 80 },
    { name: "Optimización Frontend", level: 85 },
  ];

  return (
    <Layout>
      {/* Hero Sobre Mí */}
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
                Hola, soy <span className="gradient-text">Otávio Augusto</span>
              </h1>
              
              <p className="text-xl text-tech-gray mb-6 leading-relaxed">
                Desarrollador frontend especializado en crear experiencias web 
                visualmente impactantes y altamente funcionales para clientes 
                en Latinoamérica.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="py-2 px-4 bg-white/5 rounded-full">
                  <span className="text-tech-gray">Nacionalidad:</span>
                  <span className="ml-2 font-medium">Brasileño</span>
                </div>
                
                <div className="py-2 px-4 bg-white/5 rounded-full">
                  <span className="text-tech-gray">Idiomas:</span>
                  <span className="ml-2 font-medium">Español, Portugués</span>
                </div>
                
                <div className="py-2 px-4 bg-white/5 rounded-full">
                  <span className="text-tech-gray">Experiencia:</span>
                  <span className="ml-2 font-medium">+5 años</span>
                </div>
              </div>
              
              <a
                href="https://wa.me/+5521995444161?text=Hola%20Otávio,%20vi%20tu%20sitio%20web%20y%20me%20gustaría%20hablar%20sobre%20un%20proyecto"
                target="_blank"
                rel="noopener noreferrer"
                className="tech-btn inline-flex items-center gap-2"
              >
                Contactar
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mi Historia */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto glass-card p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-6">Mi historia</h2>
            
            <div className="space-y-6 text-tech-gray leading-relaxed">
              <p>
                Soy brasileño de nacimiento, pero mi carrera profesional me ha conectado profundamente con México y toda Latinoamérica. Desde muy joven, desarrollé una pasión por el diseño web y la tecnología, lo que me llevó a especializarme en el desarrollo frontend.
              </p>
              
              <p>
                Mi viaje comenzó hace más de 5 años cuando creé mi primer sitio web para una pequeña empresa local. Desde entonces, he tenido la oportunidad de trabajar con clientes de diversos países en Latinoamérica, permitiéndome sumergirme en diferentes culturas y adaptarme a las necesidades específicas de cada mercado.
              </p>
              
              <p>
                Me enamoré de la cultura mexicana durante un proyecto colaborativo con una agencia de Ciudad de México, y desde entonces he mantenido un vínculo especial con el país y sus clientes. Mi objetivo es seguir construyendo puentes digitales entre empresas latinoamericanas y sus audiencias a través de experiencias web memorables.
              </p>
              
              <p className="font-medium italic text-white border-l-4 border-tech-purple pl-4 py-2">
                "No solo construyo sitios web, sino experiencias visuales que conectan marcas con personas. Cada línea de código es una oportunidad para crear algo extraordinario."
              </p>
              
              <p>
                Me especializo exclusivamente en el desarrollo frontend visual, enfocándome en crear sitios estáticos de alto impacto. Esta especialización me permite ofrecer la máxima calidad en cada proyecto, concentrándome en lo que mejor sé hacer: crear interfaces hermosas, rápidas y funcionales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Habilidades */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Mis habilidades</h2>
          
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

      {/* Mi Enfoque */}
      <section className="py-16 bg-tech-darker">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Mi enfoque profesional</h2>
            <p className="section-subtitle mt-4">
              Lo que me hace diferente como desarrollador frontend
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
                Especialización total
              </h3>
              <p className="text-tech-gray">
                Me enfoco exclusivamente en el desarrollo frontend visual, 
                lo que me permite dominar completamente estas tecnologías y 
                ofrecer resultados excepcionales en cada proyecto.
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
                Atención al detalle
              </h3>
              <p className="text-tech-gray">
                Cada pixel importa. Me obsesiono con los pequeños detalles 
                que hacen la diferencia entre un sitio web promedio y una 
                experiencia digital excepcional.
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
                Diseño centrado en el usuario
              </h3>
              <p className="text-tech-gray">
                Creo sitios web que no solo se ven bien, sino que también 
                proporcionan una experiencia intuitiva y agradable para los 
                usuarios finales.
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
                Calidad premium
              </h3>
              <p className="text-tech-gray">
                No me conformo con lo básico. Cada proyecto que entrego cumple 
                con los más altos estándares de calidad en diseño, animaciones 
                y rendimiento.
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
                Personalización completa
              </h3>
              <p className="text-tech-gray">
                No utilizo plantillas prediseñadas. Cada sitio web es creado 
                desde cero, personalizado para reflejar la identidad única de 
                tu marca o proyecto.
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
                Conexión latinoamericana
              </h3>
              <p className="text-tech-gray">
                Mi experiencia trabajando con clientes en México y toda Latinoamérica 
                me permite entender las necesidades específicas del mercado y crear 
                soluciones culturalmente relevantes.
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
              ¿Listo para trabajar juntos?
            </h2>
            <p className="text-xl text-tech-gray mb-8">
              Si buscas un desarrollador frontend que pueda crear una experiencia web 
              única y memorable para tu marca, estoy aquí para ayudarte
            </p>
            <a
              href="https://wa.me/+5521995444161?text=Hola%20Otávio,%20me%20gustaría%20hablar%20sobre%20un%20proyecto"
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

export default AboutPage;
