import { Cable, Component, Layers3, PanelsTopLeft } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import "./WhatIbuild.css";

type BuildArea = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

function WhatIbuild() {
  const { language } = useLanguage();
  const content = language === "es"
    ? {
        eyebrow: "LO QUE ME INTERESA CONSTRUIR",
        title: "Interfaces y aplicaciones pensadas para resolver problemas reales.",
        introduction: "Me interesa construir experiencias web claras, funcionales y mantenibles, desde interfaces y componentes reutilizables hasta aplicaciones conectadas con datos y servicios reales.",
        buildAreas: [
          { title: "Interfaces", description: "Interfaces claras, responsive y centradas en la experiencia del usuario.", Icon: PanelsTopLeft },
          { title: "Componentes", description: "Componentes reutilizables y estructuras fáciles de mantener y evolucionar.", Icon: Component },
          { title: "Integraciones", description: "Conexión con APIs y lógica de negocio para trabajar con datos reales.", Icon: Cable },
          { title: "Aplicaciones", description: "Aplicaciones completas que conectan interfaces, datos y lógica de negocio.", Icon: Layers3 },
        ] satisfies BuildArea[],
      }
    : {
        eyebrow: "WHAT I LIKE TO BUILD",
        title: "Interfaces and applications designed to solve real problems.",
        introduction: "I enjoy building clear, functional and maintainable web experiences, from interfaces and reusable components to applications connected to real data and services.",
        buildAreas: [
          { title: "Interfaces", description: "Clear, responsive interfaces focused on the user experience.", Icon: PanelsTopLeft },
          { title: "Components", description: "Reusable components and structures that are easy to maintain and evolve.", Icon: Component },
          { title: "Integrations", description: "Connecting APIs and business logic to work with real data.", Icon: Cable },
          { title: "Applications", description: "Complete applications that connect interfaces, data and business logic.", Icon: Layers3 },
        ] satisfies BuildArea[],
      };

  return (
    <section
      className="what-i-build"
      id="lo-que-construyo"
      aria-labelledby="what-i-build-title"
    >
      <div className="what-i-build__content">
        <header className="what-i-build__heading">
          <p className="what-i-build__eyebrow">{content.eyebrow}</p>
          <h2 id="what-i-build-title">{content.title}</h2>
          <p>{content.introduction}</p>
        </header>

        <div className="what-i-build__areas">
          {content.buildAreas.map(({ title, description, Icon }, index) => (
            <article className="what-i-build__area" key={title}>
              <div className="what-i-build__area-meta">
                <span>0{index + 1}</span>
                <Icon size={22} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatIbuild;
