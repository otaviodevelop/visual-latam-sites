
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import ProjectsShowcase from "@/components/home/ProjectsShowcase";
import Technologies from "@/components/home/Technologies";
import Testimonials from "@/components/home/Testimonials";
import ContactForm from "@/components/ui/ContactForm";
import Layout from "@/components/layout/Layout";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <ProjectsShowcase />
      <Technologies />
      <Testimonials />
      
      {/* Sección de Contacto */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-tech-gradient opacity-5"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">¿Listo para crear algo increíble?</h2>
            <p className="section-subtitle mt-4">
              Cuéntame sobre tu proyecto y juntos podemos crear una experiencia web que destaque tu marca
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
