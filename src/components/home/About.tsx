import { Blocks, Braces, Database } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import "./About.css";

const skills = ["React", "TypeScript", "JavaScript", "REST APIs", "Git", "Responsive Design"];

function About() {
  const { language } = useLanguage();
  const content = language === "es"
    ? {
        eyebrow: "SOBRE MÍ",
        title: "Un poco sobre mí.",
        paragraphs: [
          "Soy desarrollador frontend enfocado en construir aplicaciones web modernas, funcionales y responsive.",
          "Trabajo principalmente con React, JavaScript y TypeScript, y me interesa especialmente crear interfaces claras, componentes reutilizables y experiencias que realmente funcionen bien para el usuario.",
          "Mi formación en Manejo y Gestión de Bases de Datos también me ha dado una perspectiva orientada a datos y lógica de negocio.",
        ],
        skillsLabel: "Tecnologías y habilidades",
        visualLabel: "Representación de componentes, datos e interfaces",
        buildLabel: "CONSTRUIR",
        componentTitle: "Interfaces",
        componentDescription: "Componentes · Experiencias",
        connectLabel: "CONECTAR",
        dataTitle: "APIs y datos",
        dataDescription: "Servicios · Sistemas",
      }
    : {
        eyebrow: "ABOUT ME",
        title: "A little about me.",
        paragraphs: [
          "I’m a frontend developer focused on building modern, functional and responsive web applications.",
          "I mainly work with React, JavaScript and TypeScript, with a particular interest in creating clear interfaces, reusable components and experiences that work well for users.",
          "My background in Database Management has also given me a data-oriented perspective and an understanding of business logic.",
        ],
        skillsLabel: "Technologies and skills",
        visualLabel: "Representation of components, data and interfaces",
        buildLabel: "BUILD",
        componentTitle: "Interfaces",
        componentDescription: "Components · Experiences",
        connectLabel: "CONNECT",
        dataTitle: "APIs and data",
        dataDescription: "Services · Systems",
      };

  return (
    <section className="about" id="sobre-mi" aria-labelledby="about-title">
      <div className="about__content">
        <div className="about__copy">
          <p className="about__eyebrow">{content.eyebrow}</p>
          <h2 id="about-title">{content.title}</h2>
          <div className="about__text">
            <p>{content.paragraphs[0]}</p>
            <p>{content.paragraphs[1]}</p>
            <p>{content.paragraphs[2]}</p>
          </div>
          <ul className="about__skills" aria-label={content.skillsLabel}>
            {skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        </div>

        <div className="about__visual" aria-label={content.visualLabel}>
          <article className="about__visual-card about__visual-card--component">
            <Blocks size={24} aria-hidden="true" />
            <div>
              <span>{content.buildLabel}</span>
              <strong>{content.componentTitle}</strong>
              <p className="about__visual-card-description">{content.componentDescription}</p>
            </div>
          </article>
          <article className="about__visual-card about__visual-card--data">
            <Database size={24} aria-hidden="true" />
            <div>
              <span>{content.connectLabel}</span>
              <strong>{content.dataTitle}</strong>
              <p className="about__visual-card-description">{content.dataDescription}</p>
            </div>
          </article>
          <div className="about__interface" aria-hidden="true">
            <div className="about__interface-bar"><span /><span /><span /></div>
            <div className="about__interface-content">
              <Braces size={30} />
              <div className="about__code">
                <p><span>01</span><code><strong>const</strong> interface = {'{'}</code></p>
                <p><span>02</span><code>&nbsp; build: <em>&quot;React&quot;</em>,</code></p>
                <p><span>03</span><code>&nbsp; style: <em>&quot;CSS&quot;</em>,</code></p>
                <p><span>04</span><code>&nbsp; type: <em>&quot;TypeScript&quot;</em></code></p>
                <p><span>05</span><code>{'}'};</code></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
