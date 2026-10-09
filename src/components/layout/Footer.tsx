import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import "./Footer.css";

const GITHUB_URL = "https://github.com/Ezequiel906/ezequiel906";
const LINKEDIN_URL = "https://www.linkedin.com/in/ezequiel-ortiz-05aa17182/";
const EMAIL_ADDRESS = "kima.eze16@gmail.com";

function Footer() {
  const { language } = useLanguage();
  const { pathname } = useLocation();
  const content = language === "es"
    ? {
        role: "Desarrollador frontend",
        navigationLinksLabel: "Navegación del sitio",
        contactLinksLabel: "Enlaces de contacto",
        contact: "Contacto",
        about: "Sobre mí",
        whatIBuild: "Lo que construyo",
        stack: "Stack",
        experience: "Experiencia",
        projects: "Proyectos",
        backToTop: "Volver arriba",
        rights: "Todos los derechos reservados.",
      }
    : {
        role: "Frontend Developer",
        navigationLinksLabel: "Site navigation",
        contactLinksLabel: "Contact links",
        contact: "Contact",
        about: "About me",
        whatIBuild: "What I build",
        stack: "Stack",
        experience: "Experience",
        projects: "Projects",
        backToTop: "Back to top",
        rights: "All rights reserved.",
      };

  const handleBackToTop = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="footer" id="contacto">
      <div className="footer__content">
        <div>
          <p className="footer__brand">EZEQUIEL<span>.</span></p>
          <p>{content.role}</p>
        </div>

        <div className="footer__links">
          <nav className="footer__navigation" aria-label={content.navigationLinksLabel}>
            <Link to={{ pathname: "/", hash: "#sobre-mi" }}>{content.about}</Link>
            <Link to={{ pathname: "/", hash: "#lo-que-construyo" }}>{content.whatIBuild}</Link>
            <Link to={{ pathname: "/", hash: "#stack" }}>{content.stack}</Link>
            <Link to={{ pathname: "/", hash: "#experiencia" }}>{content.experience}</Link>
            <Link to={{ pathname: "/", hash: "#proyectos" }}>{content.projects}</Link>
          </nav>

          <nav className="footer__contact-links" aria-label={content.contactLinksLabel}>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub</a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={`mailto:${EMAIL_ADDRESS}`}>{content.contact}</a>
          </nav>

          <Link className="footer__back-to-top" to="/" onClick={handleBackToTop}>{content.backToTop}</Link>
        </div>
      </div>
      <p className="footer__copyright">© {new Date().getFullYear()} Ezequiel. {content.rights}</p>
    </footer>
  );
}

export default Footer;
