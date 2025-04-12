
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// Datos de ejemplo para testimonios
const testimonials = [
  {
    id: 1,
    name: "Carolina Méndez",
    role: "Directora de Marketing",
    company: "Estudio Méndez",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content:
      "Otávio transformó completamente nuestra presencia en línea. El sitio web que creó no solo es visualmente impactante, sino que también ha incrementado nuestras consultas en un 40%.",
    stars: 5,
  },
  {
    id: 2,
    name: "Miguel Rodríguez",
    role: "CEO",
    company: "Consultora GL",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content:
      "La atención al detalle y la calidad del trabajo de Otávio son impresionantes. Entendió perfectamente nuestra visión y la plasmó en un sitio web que nos diferencia completamente de la competencia.",
    stars: 5,
  },
  {
    id: 3,
    name: "Julia Vega",
    role: "Arquitecta",
    company: "Estudio Vega",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    content:
      "Como arquitecta, el aspecto visual es fundamental para mí. Otávio creó un portfolio que realmente hace justicia a mi trabajo, con animaciones elegantes y una experiencia de usuario excepcional.",
    stars: 5,
  },
  {
    id: 4,
    name: "Roberto Alonso",
    role: "Fotógrafo",
    company: "RA Photography",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    content:
      "La capacidad de Otávio para traducir mis ideas en un diseño web funcional y hermoso ha sido clave para el crecimiento de mi negocio. Cada detalle está pensado para resaltar mi trabajo.",
    stars: 5,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextTestimonial = () => {
    setDirection("right");
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection("left");
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Autoplay
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Reset direction after animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setDirection(null);
    }, 500);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  // Pause autoplay on hover
  const pauseAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  // Resume autoplay on mouse leave
  const resumeAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      nextTestimonial();
    }, 6000);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Círculos decorativos */}
      <div className="absolute top-20 -right-40 w-96 h-96 bg-tech-blue/10 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-tech-purple/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Lo que dicen mis clientes</h2>
          <p className="section-subtitle mt-4">
            Experiencias reales de quienes confiaron en mi trabajo para crear sus sitios web
          </p>
        </div>

        <div 
          className="max-w-4xl mx-auto relative glass-card p-8 md:p-12 rounded-2xl"
          onMouseEnter={pauseAutoplay}
          onMouseLeave={resumeAutoplay}
        >
          {/* Controles */}
          <div className="absolute top-1/2 left-4 -translate-y-1/2 z-10">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white transition-colors"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          
          <div className="absolute top-1/2 right-4 -translate-y-1/2 z-10">
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white transition-colors"
              aria-label="Testimonio siguiente"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Testimonios */}
          <div className="overflow-hidden">
            <div
              className="transition-all duration-500 ease-out"
              style={{
                transform: direction === "left" 
                  ? "translateX(100px)" 
                  : direction === "right" 
                  ? "translateX(-100px)" 
                  : "translateX(0)",
                opacity: direction ? 0 : 1,
              }}
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Foto */}
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-tech-purple/20 flex-shrink-0">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Contenido */}
                <div>
                  <div className="flex mb-4">
                    {[...Array(testimonials[activeIndex].stars)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  
                  <p className="text-lg italic mb-6">
                    "{testimonials[activeIndex].content}"
                  </p>
                  
                  <div>
                    <h4 className="font-bold text-lg">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-tech-gray">
                      {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-8 bg-tech-purple"
                    : "bg-gray-500/30"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Ir al testimonio ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
