
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
              Desenvolvedor front-end especializado em criar experiências web
              modernas, rápidas e visualmente impactantes para clientes no
              Brasil e na América Latina.
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
            <h3 className="text-lg font-bold text-white mb-4">Navegação</h3>
            <ul className="space-y-2">
              {[
                ["Início", "/"],
                ["Serviços", "/servicos"],
                ["Tecnologias", "/tecnologias"],
                ["Projetos", "/projetos"],
                ["Sobre Mim", "/sobre-mim"],
                ["Contato", "/contato"],
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
            <h3 className="text-lg font-bold text-white mb-4">Fale comigo</h3>
            <p className="text-tech-gray mb-2">
              Tem um projeto em mente? Vamos conversar!
            </p>
            <p className="text-white font-medium mb-4">otaviodevelop@gmail.com</p>
            <a
              href="mailto:otaviodevelop@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="tech-btn inline-block"
            >
              Enviar mensagem
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-tech-gray text-sm">
            © {new Date().getFullYear()} Otávio Augusto. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="/politica-privacidade"
              className="text-tech-gray hover:text-tech-purple text-sm transition-colors"
            >
              Política de Privacidade
            </a>
            <a
              href="/termos-servico"
              className="text-tech-gray hover:text-tech-purple text-sm transition-colors"
            >
              Termos de Serviço
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
