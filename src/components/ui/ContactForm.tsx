
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulamos envío del formulario
    setTimeout(() => {
      // Construir mensaje de WhatsApp
      const message = encodeURIComponent(
        `¡Hola Otávio! Mi nombre es ${formData.name}. Me interesa un proyecto de tipo ${formData.projectType}. ${formData.message}`
      );
      
      // Redirigir a WhatsApp
      window.open(`https://wa.me/5215555555555?text=${message}`, "_blank");
      
      // Mostrar notificación
      toast({
        title: "¡Formulario enviado!",
        description: "Te estamos redirigiendo a WhatsApp para continuar la conversación.",
      });
      
      // Resetear formulario
      setFormData({
        name: "",
        email: "",
        projectType: "",
        message: "",
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card p-8 rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium">
            Nombre completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tech-purple/50 transition"
            placeholder="Tu nombre"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tech-purple/50 transition"
            placeholder="correo@ejemplo.com"
          />
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <label htmlFor="projectType" className="block text-sm font-medium">
          Tipo de proyecto
        </label>
        <select
          id="projectType"
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          required
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tech-purple/50 transition appearance-none text-white"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
        >
          <option value="" disabled className="bg-tech-dark text-white">
            Selecciona una opción
          </option>
          <option value="Sitio institucional" className="bg-tech-dark text-white">Sitio institucional</option>
          <option value="Landing page" className="bg-tech-dark text-white">Landing page</option>
          <option value="Portfolio" className="bg-tech-dark text-white">Portfolio</option>
          <option value="Otro" className="bg-tech-dark text-white">Otro</option>
        </select>
      </div>

      <div className="mt-6 space-y-2">
        <label htmlFor="message" className="block text-sm font-medium">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tech-purple/50 transition"
          placeholder="Cuéntame sobre tu proyecto..."
        ></textarea>
      </div>

      <div className="mt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`tech-btn w-full ${
            isSubmitting ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? "Enviando..." : "Enviar mensaje"}
        </button>
        <p className="text-center text-sm text-tech-gray mt-4">
          ¡Te respondo en menos de 1 hora por WhatsApp!
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
