import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import ProjectGallery from "../components/projects/ProjectGallery";
import { projects } from "../data/projects";
import { useLanguage } from "../context/LanguageContext";
import "./ProjectPage.css";

function ProjectPage() {
  const { slug } = useParams();
  const { language } = useLanguage();
  const project = projects.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [slug]);

  const content = language === "es"
    ? {
        back: "Volver a proyectos",
        preview: "Vista previa del proyecto",
        notFound: "Proyecto no encontrado",
        home: "Volver al inicio",
        technologies: "Tecnologías",
        overview: "OVERVIEW",
        overviewTitle: "Una mirada general al proyecto.",
        projectType: "Tipo de proyecto",
        role: "Mi rol",
        features: "FUNCIONALIDADES",
        featuresTitle: "Lo que incluye el proyecto.",
      }
    : {
        back: "Back to projects",
        preview: "Project preview",
        notFound: "Project not found",
        home: "Back to home",
        technologies: "Technologies",
        overview: "OVERVIEW",
        overviewTitle: "A general look at the project.",
        projectType: "Project type",
        role: "My role",
        features: "FEATURES",
        featuresTitle: "What the project includes.",
      };

  if (!project) {
    return (
      <main className="project-page">
        <section className="project-page__not-found">
          <h1>{content.notFound}</h1>
          <Link to="/">{content.home}</Link>
        </section>
      </main>
    );
  }

  return (
    <main className="project-page">
      <section className="project-hero" aria-labelledby="project-title">
        <div className="project-hero__content">
      <Link
        className="project-hero__back"
        to={{ pathname: "/", hash: "#proyectos" }}
      >
            <ArrowLeft size={17} aria-hidden="true" />
            {content.back}
          </Link>

          <div className="project-hero__layout">
            <div className="project-hero__copy">
              <p className="project-hero__category">{project.category[language]}</p>
              <h1 id="project-title">{project.name}</h1>
              <p className="project-hero__description">{project.description[language]}</p>
              <ul className="project-hero__technologies" aria-label={content.technologies}>
                {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
            </div>

            <div className="project-hero__preview">
              <img src={project.previewImage} alt={`${project.name} ${content.preview}`} />
            </div>
          </div>
        </div>
      </section>

      <section className="project-overview" aria-labelledby="project-overview-title">
        <div className="project-overview__content">
          <header className="project-overview__heading">
            <p>{content.overview}</p>
            <h2 id="project-overview-title">{content.overviewTitle}</h2>
          </header>

          <div className="project-overview__details">
            <article>
              <p>{content.projectType}</p>
              <strong>{project.category[language]}</strong>
            </article>
            <article>
              <p>{content.role}</p>
              <strong>{project.role[language]}</strong>
            </article>
          </div>

          <p className="project-overview__description">{project.description[language]}</p>
        </div>
      </section>

      <section className="project-features" aria-labelledby="project-features-title">
        <div className="project-features__content">
          <header className="project-features__heading">
            <p>{content.features}</p>
            <h2 id="project-features-title">{content.featuresTitle}</h2>
          </header>

          <div className="project-features__groups">
            {project.features.map((group, groupIndex) => {
              const featureOffset = project.features
                .slice(0, groupIndex)
                .reduce((total, currentGroup) => total + currentGroup.items.length, 0);

              return (
                <section className="project-features__group" key={group.title?.en ?? groupIndex}>
                  {group.title && <h3>{group.title[language]}</h3>}
                  <ol>
                    {group.items.map((feature, featureIndex) => (
                      <li key={feature.en}>
                        <span>0{featureOffset + featureIndex + 1}</span>
                        <p>{feature[language]}</p>
                      </li>
                    ))}
                  </ol>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      <ProjectGallery project={project} />
    </main>
  );
}

export default ProjectPage;
