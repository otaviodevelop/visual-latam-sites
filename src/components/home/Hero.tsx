
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const x = clientX / window.innerWidth - 0.5;
      const y = clientY / window.innerHeight - 0.5;

      const elements = heroRef.current.querySelectorAll(".parallax");
      
      elements.forEach((el, i) => {
        const htmlEl = el as HTMLElement;
        const speed = parseFloat(htmlEl.getAttribute("data-speed") || "0");
        const translateX = x * speed;
        const translateY = y * speed;
        
        htmlEl.style.transform = `translate(${translateX}px, ${translateY}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden" ref={heroRef}>
      {/* Círculos decorativos */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-tech-purple/20 rounded-full filter blur-3xl parallax" data-speed="20"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-tech-blue/20 rounded-full filter blur-3xl parallax" data-speed="30"></div>
      
      {/* Padrão de pontos */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight mb-6 animate-fade-in">
            <span className="block">Design web moderno que</span>
            <span className="gradient-text">posiciona sua marca desde o primeiro clique</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-tech-gray mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Sites estáticos, rápidos, visuais e 100% personalizados
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <a
              href="https://wa.me/5215555555555?text=Olá,%20estou%20interessado%20em%20um%20site%20personalizado"
              target="_blank"
              rel="noopener noreferrer"
              className="tech-btn flex items-center justify-center gap-2"
            >
              Solicite seu orçamento
              <ArrowRight size={18} />
            </a>
            
            <NavLink to="/projetos" className="tech-btn-outline flex items-center justify-center gap-2">
              Ver projetos
              <ArrowRight size={18} />
            </NavLink>
          </div>
        </div>
        
        {/* Código decorativo */}
        <div className="absolute -bottom-10 -right-10 md:bottom-10 md:right-0 text-white/10 font-mono text-xs opacity-50 parallax whitespace-nowrap" data-speed="10">
          <div>&lt;div className="awesome-component"&gt;</div>
          <div>  &lt;header&gt;Design Moderno&lt;/header&gt;</div>
          <div>  &lt;TailwindCSS styles /&gt;</div>
          <div>  &lt;FramerMotion animate /&gt;</div>
          <div>&lt;/div&gt;</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
