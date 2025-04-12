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
    
    // Enviando para o número correto de contato
    setTimeout(() => {
      const message = encodeURIComponent(
        `Olá! Meu nome é ${formData.name}. Estou interessado em um projeto do tipo ${formData.projectType}. ${formData.message}`
      );
      
      window.open(`https://wa.me/+5521995444161?text=${message}`, "_blank");
      
      toast({
        title: "Formulário enviado!",
        description: "Estamos redirecionando para o WhatsApp para continuar a conversa.",
      });
      
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
            Nome completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tech-purple/50 transition"
            placeholder="Seu nome"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tech-purple/50 transition"
            placeholder="email@exemplo.com"
          />
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <label htmlFor="projectType" className="block text-sm font-medium">
          Tipo de projeto
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
            Selecione uma opção
          </option>
          <option value="Site institucional" className="bg-tech-dark text-white">Site institucional</option>
          <option value="Landing page" className="bg-tech-dark text-white">Landing page</option>
          <option value="Portfólio" className="bg-tech-dark text-white">Portfólio</option>
          <option value="Outro" className="bg-tech-dark text-white">Outro</option>
        </select>
      </div>

      <div className="mt-6 space-y-2">
        <label htmlFor="message" className="block text-sm font-medium">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tech-purple/50 transition"
          placeholder="Conte-me sobre seu projeto..."
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
          {isSubmitting ? "Enviando..." : "Enviar mensagem"}
        </button>
        <p className="text-center text-sm text-tech-gray mt-4">
          Respondo em menos de 1 hora pelo WhatsApp!
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
