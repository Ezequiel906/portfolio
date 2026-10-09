import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import "./Navbar.css";

const GITHUB_URL = "https://github.com/Ezequiel906/ezequiel906";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const content = language === "es"
    ? {
        mainNavigation: "Navegación principal",
        openMenu: "Abrir menú",
        closeMenu: "Cerrar menú",
        languageSelector: "Seleccionar idioma",
        navigationLinks: [
          { label: "Sobre mí", sectionId: "sobre-mi" },
          { label: "Lo que construyo", sectionId: "lo-que-construyo" },
          { label: "Stack", sectionId: "stack" },
          { label: "Experiencia", sectionId: "experiencia" },
          { label: "Proyectos", sectionId: "proyectos" },
          { label: "Contacto", sectionId: "contacto" },
        ],
      }
    : {
        mainNavigation: "Main navigation",
        openMenu: "Open menu",
        closeMenu: "Close menu",
        languageSelector: "Select language",
        navigationLinks: [
          { label: "About me", sectionId: "sobre-mi" },
          { label: "What I build", sectionId: "lo-que-construyo" },
          { label: "Stack", sectionId: "stack" },
          { label: "Experience", sectionId: "experiencia" },
          { label: "Projects", sectionId: "proyectos" },
          { label: "Contact", sectionId: "contacto" },
        ],
      };
  const closeMenu = () => setIsMenuOpen(false);

  const handleLanguageChange = (nextLanguage: "es" | "en") => {
    setLanguage(nextLanguage);
  };

  return (
    <header className="navbar">
      <nav className="navbar__content" aria-label={content.mainNavigation}>
        <Link className="navbar__logo" to="/" onClick={closeMenu}>
          EO<span>/</span>
        </Link>

        <button
          className="navbar__menu-button"
          type="button"
          aria-label={isMenuOpen ? content.closeMenu : content.openMenu}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <div
          id="main-navigation"
          className={`navbar__links ${isMenuOpen ? "navbar__links--open" : ""}`}
        >
          {content.navigationLinks.map((link) => (
            <Link
              key={link.sectionId}
              to={{ pathname: "/", hash: `#${link.sectionId}` }}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" onClick={closeMenu}>
            GitHub
          </a>
          <div className="navbar__language-selector" role="group" aria-label={content.languageSelector}>
            <button
              className={`navbar__language-button ${language === "es" ? "navbar__language-button--active" : ""}`}
              type="button"
              aria-pressed={language === "es"}
              onClick={() => handleLanguageChange("es")}
            >
              ES
            </button>
            <button
              className={`navbar__language-button ${language === "en" ? "navbar__language-button--active" : ""}`}
              type="button"
              aria-pressed={language === "en"}
              onClick={() => handleLanguageChange("en")}
            >
              EN
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
