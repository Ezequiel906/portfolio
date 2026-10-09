import { useLanguage } from "../../context/LanguageContext";
import "./Experience.css";

const technologies = ["React", "JavaScript", "HTML5", "CSS3"];

function Experience() {
  const { language } = useLanguage();
  const content = language === "es"
    ? {
        eyebrow: "EXPERIENCIA",
        title: "Mi experiencia profesional.",
        mainRole: "Desarrollador Front-End",
        mainPeriod: "Enero 2025 — Presente",
        mainDescription: "Desarrollo y mantenimiento de interfaces para sistemas internos, trabajando principalmente con React, JavaScript, HTML5 y CSS3.",
        areas: ["Interfaces", "Nuevos módulos", "Usuarios y permisos", "Soporte", "UX"],
        responsibilitiesTitle: "Responsabilidades",
        mainResponsibilities: [
          "Desarrollo de interfaces y nuevos módulos para diferentes áreas.",
          "Mejora y optimización de vistas para facilitar el trabajo de los usuarios.",
          "Administración de usuarios, roles y permisos dentro del sistema.",
          "Atención y resolución de incidencias técnicas.",
          "Soporte remoto y presencial a usuarios.",
          "Capacitación sobre nuevos módulos e interfaces.",
        ],
        secondaryRole: "Auxiliar de Inventarios",
        secondaryPeriod: "Julio 2024 — Octubre 2024",
        secondaryDescription: "Experiencia orientada al control, verificación y organización de inventario.",
        secondaryResponsibilities: [
          "Control, conteo y verificación de inventario.",
          "Registro y organización de información mediante Excel.",
          "Identificación y reporte de diferencias.",
        ],
        technologiesLabel: "Tecnologías utilizadas",
        areasLabel: "Áreas de trabajo",
      }
    : {
        eyebrow: "EXPERIENCE",
        title: "My professional experience.",
        mainRole: "Frontend Developer",
        mainPeriod: "January 2025 — Present",
        mainDescription: "Development and maintenance of interfaces for internal systems, working mainly with React, JavaScript, HTML5 and CSS3.",
        areas: ["Interfaces", "New modules", "Users & permissions", "Support", "UX"],
        responsibilitiesTitle: "Responsibilities",
        mainResponsibilities: [
          "Development of interfaces and new modules for different areas.",
          "Improvement and optimization of views to make users' work easier.",
          "Management of users, roles and permissions within the system.",
          "Technical issue resolution and support.",
          "Remote and on-site user support.",
          "Training users on new modules and interfaces.",
        ],
        secondaryRole: "Inventory Assistant",
        secondaryPeriod: "July 2024 — October 2024",
        secondaryDescription: "Experience focused on inventory control, verification and organization.",
        secondaryResponsibilities: [
          "Inventory counting, control and verification.",
          "Recording and organizing information using Excel.",
          "Identifying and reporting discrepancies.",
        ],
        technologiesLabel: "Technologies used",
        areasLabel: "Work areas",
      };

  return (
    <section className="experience" id="experiencia" aria-labelledby="experience-title">
      <div className="experience__content">
        <header className="experience__heading">
          <p className="experience__eyebrow">{content.eyebrow}</p>
          <h2 id="experience-title">{content.title}</h2>
        </header>

        <div className="experience__timeline">
          <article className="experience__primary">
            <div className="experience__meta">
              <span>01</span>
              <time>{content.mainPeriod}</time>
            </div>
            <h3>{content.mainRole}</h3>
            <p className="experience__company">Hospital de Especialidades Nuestra Señora de La Paz</p>
            <p className="experience__description">{content.mainDescription}</p>

            <div className="experience__labels">
              <ul aria-label={content.technologiesLabel}>
                {technologies.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
              <ul className="experience__areas" aria-label={content.areasLabel}>
                {content.areas.map((area) => <li key={area}>{area}</li>)}
              </ul>
            </div>

            <div className="experience__responsibilities">
              <h4>{content.responsibilitiesTitle}</h4>
              <ul>
                {content.mainResponsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}
              </ul>
            </div>
          </article>

          <article className="experience__secondary">
            <div className="experience__meta">
              <span>02</span>
              <time>{content.secondaryPeriod}</time>
            </div>
            <h3>{content.secondaryRole}</h3>
            <p className="experience__company">Aconsa SA de CV</p>
            <p className="experience__description">{content.secondaryDescription}</p>
            <ul className="experience__secondary-list">
              {content.secondaryResponsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Experience;
