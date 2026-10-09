import { ArrowDown, ArrowRight, Braces } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import "./Hero.css";

function Hero() {
  const { language } = useLanguage();
  const content = language === "es"
    ? {
        eyebrow: "DESARROLLADOR FRONTEND",
        titleStart: "Construyo experiencias web",
        titleHighlight: "modernas",
        titleEnd: "y funcionales.",
        description: "Desarrollo interfaces web con React, TypeScript y JavaScript, enfocándome en crear experiencias claras, responsive y mantenibles.",
        primaryAction: "Ver proyectos",
        secondaryAction: "Sobre mí",
        scrollLabel: "Desplaza para explorar",
        visualLabel: "Composición visual de desarrollo frontend",
        componentLabel: "COMPONENTE",
        componentTitle: "Interfaz React",
        typedLabel: "TIPADO",
      }
    : {
        eyebrow: "FRONTEND DEVELOPER",
        titleStart: "I build",
        titleHighlight: "modern",
        titleEnd: "and functional web experiences.",
        description: "I build web interfaces with React, TypeScript and JavaScript, focusing on creating clear, responsive and maintainable experiences.",
        primaryAction: "View projects",
        secondaryAction: "About me",
        scrollLabel: "Scroll to explore",
        visualLabel: "Frontend development visual composition",
        componentLabel: "COMPONENT",
        componentTitle: "React interface",
        typedLabel: "TYPED",
      };

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__content">
        <div className="hero__copy">
          <p className="hero__eyebrow">{content.eyebrow}</p>
          <h1 id="hero-title">
            {content.titleStart} <span>{content.titleHighlight}</span> {content.titleEnd}
          </h1>
          <p className="hero__description">{content.description}</p>

          <div className="hero__actions">
            <a className="hero__button hero__button--primary" href="#proyectos">
              {content.primaryAction} <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="hero__button hero__button--secondary" href="#sobre-mi">
              {content.secondaryAction}
            </a>
          </div>
        </div>

        <div className="hero__visual" aria-label={content.visualLabel}>
          <div className="hero__code-window">
            <div className="hero__window-bar">
              <span />
              <span />
              <span />
              <p>Portfolio.tsx</p>
            </div>
            <div className="hero__code-content" aria-hidden="true">
              <p><span className="hero__code-keyword">const</span> developer = {'{'}</p>
              <p className="hero__code-indent">name: <span className="hero__code-string">&quot;Ezequiel&quot;</span>,</p>
              <p className="hero__code-indent">focus: <span className="hero__code-string">&quot;Frontend&quot;</span>,</p>
              <p className="hero__code-indent">build: <span className="hero__code-function">createExperience</span></p>
              <p>{'}'};</p>
            </div>
          </div>

          <div className="hero__component-card hero__component-card--react">
            <Braces size={22} aria-hidden="true" />
            <div>
              <span>{content.componentLabel}</span>
              <strong>{content.componentTitle}</strong>
            </div>
          </div>

          <div className="hero__component-card hero__component-card--typescript">
            <span className="hero__typescript-badge">TS</span>
            <div>
              <span>{content.typedLabel}</span>
              <strong>TypeScript</strong>
            </div>
          </div>
        </div>
      </div>

      <a className="hero__scroll" href="#sobre-mi">
        <span>{content.scrollLabel}</span>
        <ArrowDown size={16} aria-hidden="true" />
      </a>
    </section>
  );
}

export default Hero;
