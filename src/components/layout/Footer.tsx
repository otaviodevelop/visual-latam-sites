
import { NavLink } from "react-router-dom";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-tech-darker mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">Otávio Augusto</h3>
            <p className="text-tech-gray mb-4">
              Desarrollador front-end especializado en crear experiencias web
              modernas, rápidas y visualmente impactantes para clientes en
              Latinoamérica.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-tech-purple transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-tech-purple transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-tech-purple transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:otaviodevelop@gmail.com"
                className="text-white/70 hover:text-tech-purple transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Navegación</h3>
            <ul className="space-y-2">
              {[
                ["Inicio", "/"],
                ["Servicios", "/servicios"],
                ["Tecnologías", "/tecnologias"],
                ["Proyectos", "/proyectos"],
                ["Sobre Mí", "/sobre-mi"],
                ["Contacto", "/contacto"],
              ].map(([title, url]) => (
                <li key={url}>
                  <NavLink
                    to={url}
                    className="text-tech-gray hover:text-tech-purple transition-colors"
                  >
                    {title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contáctame</h3>
            <p className="text-tech-gray mb-2">
              ¿Tienes un proyecto en mente? ¡Hablemos!
            </p>
            <p className="text-white font-medium mb-4">otaviodevelop@gmail.com</p>
            <a
              href="https://wa.me/+5521995444161"
              target="_blank"
              rel="noopener noreferrer"
              className="tech-btn inline-block"
            >
              Enviar mensaje
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-tech-gray text-sm">
            © {new Date().getFullYear()} Otávio Augusto. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="/politica-privacidad"
              className="text-tech-gray hover:text-tech-purple text-sm transition-colors"
            >
              Política de Privacidad
            </a>
            <a
              href="/terminos-servicio"
              className="text-tech-gray hover:text-tech-purple text-sm transition-colors"
            >
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
