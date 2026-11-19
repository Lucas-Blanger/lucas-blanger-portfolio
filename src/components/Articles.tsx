import { useTranslation } from "react-i18next";
import { FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Articles() {
  const { t } = useTranslation();

  return (
    <section id="artigos" className="px-4 pt-8 pb-20">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <h2 className="section-title text-5xl mb-6">{t("my_articles")}</h2>
        <p className="text-lg text-muted mb-12">{t("articles_desc")}</p>
        <Link
          id="see-articles"
          to="/articles"
          className="neon-button border-accent text-accent hover:bg-accent hover:text-accent-fg"
        >
          <FaBook className="text-xl" />
          {t("see_articles")}
        </Link>
      </div>
    </section>
  );
}
