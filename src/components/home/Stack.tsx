import {
  SiCss,
  SiCssHex,
  SiFigma,
  SiFigmaHex,
  SiGit,
  SiGitHex,
  SiGithub,
  SiGithubHex,
  SiHtml5,
  SiHtml5Hex,
  SiJavascript,
  SiJavascriptHex,
  SiJira,
  SiJiraHex,
  SiNpm,
  SiNpmHex,
  SiPostman,
  SiPostmanHex,
  SiReact,
  SiReactHex,
  SiReacthookform,
  SiReacthookformHex,
  SiReactrouter,
  SiReactrouterHex,
  SiTypescript,
  SiTypescriptHex,
  SiVite,
  SiViteHex,
  SiZod,
  SiZodHex,
} from "@icons-pack/react-simple-icons";
import type { IconType } from "@icons-pack/react-simple-icons";
import type { CSSProperties } from "react";
import SlackIcon from "../icons/SlackIcon";
import VSCodeIcon from "../icons/VSCodeIcon";
import { useLanguage } from "../../context/LanguageContext";
import "./Stack.css";

type Technology = {
  name: string;
  Icon?: IconType | typeof VSCodeIcon | typeof SlackIcon;
  color?: string;
};

type StackGroup = {
  title: string;
  technologies: Technology[];
};

const stackGroups: StackGroup[] = [
  {
    title: "Frontend",
    technologies: [
      { name: "React", Icon: SiReact, color: SiReactHex },
      { name: "TypeScript", Icon: SiTypescript, color: SiTypescriptHex },
      { name: "JavaScript", Icon: SiJavascript, color: SiJavascriptHex },
      { name: "HTML5", Icon: SiHtml5, color: SiHtml5Hex },
      { name: "CSS3", Icon: SiCss, color: SiCssHex },
      { name: "React Router", Icon: SiReactrouter, color: SiReactrouterHex },
      { name: "React Hook Form", Icon: SiReacthookform, color: SiReacthookformHex },
      { name: "Zod", Icon: SiZod, color: SiZodHex },
    ],
  },
  {
    title: "Herramientas y flujo de trabajo",
    technologies: [
      { name: "Git", Icon: SiGit, color: SiGitHex },
      { name: "GitHub", Icon: SiGithub, color: SiGithubHex },
      { name: "Vite", Icon: SiVite, color: SiViteHex },
      { name: "npm", Icon: SiNpm, color: SiNpmHex },
      { name: "VS Code", Icon: VSCodeIcon, color: "#007ACC" },
      { name: "Postman", Icon: SiPostman, color: SiPostmanHex },
      { name: "Figma", Icon: SiFigma, color: SiFigmaHex },
      { name: "Jira", Icon: SiJira, color: SiJiraHex },
      { name: "Slack", Icon: SlackIcon, color: "#4A154B" },
    ],
  },
];

function Stack() {
  const { language } = useLanguage();
  const content = language === "es"
    ? {
        eyebrow: "TECNOLOGÍAS",
        title: "Las herramientas que utilizo para construir.",
        introduction: "Tecnologías y herramientas que forman parte de mi flujo de desarrollo.",
        frontendGroup: "Frontend",
        toolsGroup: "Herramientas y flujo de trabajo",
      }
    : {
        eyebrow: "TECHNOLOGIES",
        title: "The tools I use to build.",
        introduction: "Technologies and tools that are part of my development workflow.",
        frontendGroup: "Frontend",
        toolsGroup: "Tools & Workflow",
      };

  return (
    <section className="stack" id="stack" aria-labelledby="stack-title">
      <div className="stack__content">
        <header className="stack__heading">
          <p className="stack__eyebrow">{content.eyebrow}</p>
          <h2 id="stack-title">{content.title}</h2>
          <p>{content.introduction}</p>
        </header>

        <div className="stack__groups">
          {stackGroups.map((group) => {
            const groupTitle = group.title === "Frontend" ? content.frontendGroup : content.toolsGroup;
            const groupId = `${groupTitle.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}-title`;

            return (
            <section className={`stack__group ${group.title === "Frontend" ? "stack__group--frontend" : ""}`} key={group.title} aria-labelledby={groupId}>
              <h3 id={groupId}>{groupTitle}</h3>
              <ul>
                {group.technologies.map(({ name, Icon, color }) => (
                  <li
                    key={name}
                    className="stack__technology"
                    style={color ? { "--technology-color": color } as CSSProperties : undefined}
                    tabIndex={0}
                  >
                    {Icon && <Icon size={24} aria-hidden="true" />}
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Stack;
