
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 glass-card bg-tech-darker/80"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <NavLink to="/" className="flex items-center">
          <span className="text-xl font-poppins font-bold gradient-text">
            Otávio Augusto
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {[
            ["Inicio", "/"],
            ["Servicios", "/servicios"],
            ["Tecnologías", "/tecnologias"],
            ["Proyectos", "/proyectos"],
            ["Sobre Mí", "/sobre-mi"],
            ["Contacto", "/contacto"],
          ].map(([title, url]) => (
            <NavLink
              key={url}
              to={url}
              className={({ isActive }) =>
                `font-medium transition-all duration-300 hover:text-tech-purple ${
                  isActive
                    ? "text-tech-purple relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-tech-purple"
                    : "text-white/80"
                }`
              }
            >
              {title}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden text-white hover:text-tech-purple"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 bg-tech-darker/90 backdrop-blur-lg z-40 transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
          {[
            ["Inicio", "/"],
            ["Servicios", "/servicios"],
            ["Tecnologías", "/tecnologias"],
            ["Proyectos", "/proyectos"],
            ["Sobre Mí", "/sobre-mi"],
            ["Contacto", "/contacto"],
          ].map(([title, url]) => (
            <NavLink
              key={url}
              to={url}
              className={({ isActive }) =>
                `font-medium transition-all duration-300 hover:text-tech-purple ${
                  isActive ? "text-tech-purple" : "text-white"
                }`
              }
              onClick={closeMenu}
            >
              {title}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
