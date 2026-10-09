import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "./NotFoundPage.css";

function NotFoundPage() {
  const { language } = useLanguage();
  const content = language === "es"
    ? {
        title: "Página no encontrada",
        description: "La página que buscas no existe o ya no está disponible.",
        action: "Volver al inicio",
      }
    : {
        title: "Page not found",
        description: "The page you're looking for doesn't exist or is no longer available.",
        action: "Back to home",
      };

  return (
    <main className="not-found-page">
      <section className="not-found-page__content" aria-labelledby="not-found-title">
        <p className="not-found-page__code">404</p>
        <h1 id="not-found-title">{content.title}</h1>
        <p>{content.description}</p>
        <Link to="/">{content.action}</Link>
      </section>
    </main>
  );
}

export default NotFoundPage;
