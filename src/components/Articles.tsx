import { useTranslation } from "react-i18next";
import { FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Articles() {
  const { t } = useTranslation();

  return (
    <section id="artigos" className="bg-black px-4 text-white pb-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-green-400 mb-6">
          {t("my_articles")}
        </h2>
        <p className="text-lg text-gray-300 mb-12">{t("articles_desc")}</p>
        <Link
          to="/articles"
          className="neon-button border-green-400 text-green-400 hover:bg-green-500 hover:text-black"
        >
          <FaBook className="text-xl" />
          {t("see_articles")}
        </Link>
      </div>
    </section>
  );
}
