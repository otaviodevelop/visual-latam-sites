
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/ui/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactPage = () => {
  return (
    <Layout>
      {/* Hero de Contacto */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-tech-purple/20 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-tech-blue/20 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
              <span className="gradient-text">Contáctame</span>
            </h1>
            <p className="text-xl text-tech-gray">
              ¿Tienes un proyecto en mente? Estoy listo para escuchar tus ideas y 
              ayudarte a crear una experiencia web impactante
            </p>
          </div>
        </div>
      </section>

      {/* Formulario y Datos de Contacto */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Formulario */}
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-bold mb-6">Envíame un mensaje</h2>
              <ContactForm />
            </div>
            
            {/* Info de Contacto */}
            <div className="w-full md:w-1/3">
              <h2 className="text-2xl font-bold mb-6">Información de contacto</h2>
              
              <div className="glass-card p-8 rounded-xl h-full">
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-tech-purple/10 text-tech-purple mr-4">
                      <Mail size={18} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Correo electrónico</h3>
                      <a
                        href="mailto:contacto@otavioaugusto.com"
                        className="text-tech-gray hover:text-tech-purple transition-colors"
                      >
                        contacto@otavioaugusto.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-tech-purple/10 text-tech-purple mr-4">
                      <Phone size={18} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">WhatsApp</h3>
                      <a
                        href="https://wa.me/+5521995444161"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-tech-gray hover:text-tech-purple transition-colors"
                      >
                        +55 21 99544-4161
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-tech-purple/10 text-tech-purple mr-4">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Ubicación</h3>
                      <p className="text-tech-gray">
                        Brasil / Remoto en toda Latinoamérica
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-tech-purple/10 text-tech-purple mr-4">
                      <Clock size={18} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Horario de atención</h3>
                      <p className="text-tech-gray">
                        Lunes a Viernes: 9:00 - 18:00 (GMT-6)
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-white/10 mt-8 pt-8">
                  <h3 className="font-medium mb-3">Respuesta rápida</h3>
                  <p className="text-tech-gray mb-4">
                    Te respondo en menos de 1 hora en días laborables
                  </p>
                  <div className="flex gap-3">
                    <span className="inline-block w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-sm text-tech-gray">Disponible para nuevos proyectos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section className="py-16 bg-tech-darker">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Preguntas Frecuentes</h2>
            <p className="section-subtitle mt-4">
              Respuestas a las dudas más comunes sobre mi trabajo
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">¿Cuál es tu proceso de trabajo?</h3>
                <p className="text-tech-gray">
                  Mi proceso incluye una etapa de consulta inicial, planificación del proyecto, 
                  diseño UI/UX, desarrollo frontend, pruebas y finalmente la entrega. Me mantengo 
                  en constante comunicación durante todo el proceso para asegurar que el resultado 
                  final cumpla con tus expectativas.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">¿Cuánto tiempo toma desarrollar un sitio web?</h3>
                <p className="text-tech-gray">
                  El tiempo de desarrollo varía según la complejidad del proyecto. Una landing page 
                  sencilla puede estar lista en 2-3 semanas, mientras que un sitio web más completo 
                  puede tomar entre 4-8 semanas. Todo depende de los requerimientos específicos y 
                  la cantidad de páginas y funcionalidades.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">¿Trabajas con clientes fuera de México?</h3>
                <p className="text-tech-gray">
                  ¡Absolutamente! Trabajo con clientes de toda Latinoamérica y más allá. La comunicación 
                  se realiza principalmente por mensajería, lo que permite colaborar 
                  efectivamente sin importar la ubicación.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">¿Qué necesito para comenzar un proyecto contigo?</h3>
                <p className="text-tech-gray">
                  Para comenzar, necesito entender tu visión y objetivos. Es útil tener una idea clara 
                  del propósito del sitio, el público objetivo, ejemplos de sitios que te gusten y cualquier 
                  material de marca que puedas compartir (logo, colores, etc.). Luego de una consulta inicial, 
                  prepararé una propuesta detallada.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">¿Ofreces mantenimiento después de la entrega?</h3>
                <p className="text-tech-gray">
                  Aunque mi enfoque es crear sitios nuevos y no ofrezco servicios de mantenimiento continuo, 
                  proporciono soporte técnico durante el primer mes después de la entrega para asegurar que 
                  todo funcione correctamente. También puedo recomendar servicios de mantenimiento confiables 
                  si los necesitas a futuro.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">¿Cuáles son tus métodos de pago?</h3>
                <p className="text-tech-gray">
                  Acepto transferencias bancarias, PayPal y pagos con tarjeta de crédito. Generalmente, 
                  el proyecto se divide en fases con un anticipo inicial del 50% para comenzar y el resto 
                  al finalizar el proyecto. Para proyectos más grandes, podemos establecer un cronograma 
                  de pagos por etapas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto glass-card p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-4">¿Aún tienes dudas?</h2>
            <p className="text-lg text-tech-gray mb-6">
              Llámame ahora mismo para discutir tu proyecto 
              y resolver todas tus preguntas sin compromiso
            </p>
            <a
              href="https://wa.me/+5521995444161"
              target="_blank"
              rel="noopener noreferrer"
              className="tech-btn"
            >
              Llamar ahora
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
