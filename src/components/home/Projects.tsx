import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { projects } from "../../data/projects";
import "./Projects.css";

function Projects() {
  const { language } = useLanguage();
  const content =
    language === "es"
      ? {
          eyebrow: "PROYECTOS",
          title: "Proyectos en los que he trabajado.",
          introduction:
            "Una selección de proyectos donde he aplicado diferentes tecnologías, patrones y formas de resolver problemas.",
          action: "Ver proyecto",
          technologiesLabel: "Tecnologías de",
          previewAlt: "Vista previa de",
        }
      : {
          eyebrow: "PROJECTS",
          title: "A selection of projects I've worked on.",
          introduction:
            "A selection of projects where I've applied different technologies, patterns and approaches to solving problems.",
          action: "View project",
          technologiesLabel: "Technologies used in",
          previewAlt: "Preview of",
        };

  return (
    <section
      className="projects"
      id="proyectos"
      aria-labelledby="projects-title"
    >
      <div className="projects__content">
        <header className="projects__heading">
          <p className="projects__eyebrow">{content.eyebrow}</p>
          <h2 id="projects-title">{content.title}</h2>
          <p>{content.introduction}</p>
        </header>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <article
              className={`projects__card ${project.name === "AutoCare SV" ? "projects__card--featured" : ""}`}
              key={project.slug}
            >
              <div className="projects__preview">
                <img
                  src={project.previewImage}
                  alt={`${content.previewAlt} ${project.name}`}
                />
              </div>
              <div className="projects__card-content">
                <div className="projects__meta">
                  <span>0{index + 1}</span>
                  <p>{project.category[language]}</p>
                </div>
                <h3>{project.name}</h3>
                <p className="projects__description">
                  {project.description[language]}
                </p>
                <ul
                  className="projects__technologies"
                  aria-label={`${content.technologiesLabel} ${project.name}`}
                >
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <Link
                  className="projects__link"
                  to={`/projects/${project.slug}`}
                  aria-label={`${content.action}: ${project.name}`}
                >
                  {content.action} <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
