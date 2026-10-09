import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import { X } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import type { Project, ProjectScreenshot } from "../../types/project";
import "./ProjectGallery.css";

type ProjectGalleryProps = {
  project: Project;
};

function ProjectGallery({ project }: ProjectGalleryProps) {
  const { language } = useLanguage();
  const [selectedScreenshot, setSelectedScreenshot] = useState<ProjectScreenshot | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const content = language === "es"
    ? {
        eyebrow: "GALERÍA",
        title: "Vistas del proyecto.",
        close: "Cerrar vista ampliada",
      }
    : {
        eyebrow: "GALLERY",
        title: "Project views.",
        close: "Close expanded view",
      };

  useEffect(() => {
    if (selectedScreenshot) {
      closeButtonRef.current?.focus();
      return;
    }

    if (triggerRef.current?.isConnected) {
      triggerRef.current.focus();
    }
  }, [selectedScreenshot]);

  useEffect(() => {
    if (!selectedScreenshot) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedScreenshot(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedScreenshot]);

  const handleLightboxKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab") {
      return;
    }

    const focusableElements = Array.from(
      event.currentTarget.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ),
    );

    if (focusableElements.length === 0) {
      return;
    }

    event.preventDefault();
    const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement);
    const nextIndex = event.shiftKey
      ? (currentIndex - 1 + focusableElements.length) % focusableElements.length
      : (currentIndex + 1) % focusableElements.length;

    focusableElements[nextIndex].focus();
  };

  if (project.screenshots.gallery.length === 0) {
    return null;
  }

  return (
    <section className="project-gallery" aria-labelledby="project-gallery-title">
      <div className="project-gallery__content">
        <header className="project-gallery__heading">
          <p>{content.eyebrow}</p>
          <h2 id="project-gallery-title">{content.title}</h2>
        </header>

        <div className="project-gallery__grid">
          {project.screenshots.gallery.map((screenshot) => (
            <button
              className="project-gallery__image-button"
              type="button"
              key={screenshot.image}
              onClick={(event) => {
                triggerRef.current = event.currentTarget;
                setSelectedScreenshot(screenshot);
              }}
            >
              <img src={screenshot.image} alt={`${project.name}: ${screenshot.label[language]}`} />
              <span>{screenshot.label[language]}</span>
            </button>
          ))}
        </div>
      </div>

      {selectedScreenshot && (
        <div className="project-gallery__lightbox" role="dialog" aria-modal="true" aria-label={selectedScreenshot.label[language]} onClick={() => setSelectedScreenshot(null)} onKeyDown={handleLightboxKeyDown}>
          <div className="project-gallery__lightbox-content" onClick={(event) => event.stopPropagation()}>
            <button ref={closeButtonRef} className="project-gallery__close" type="button" aria-label={content.close} onClick={() => setSelectedScreenshot(null)}>
              <X size={20} aria-hidden="true" />
            </button>
            <img src={selectedScreenshot.image} alt={`${project.name}: ${selectedScreenshot.label[language]}`} />
          </div>
        </div>
      )}
    </section>
  );
}

export default ProjectGallery;
