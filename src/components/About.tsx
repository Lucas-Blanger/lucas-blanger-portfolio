import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-900 px-4 py-16"
    >
      <div className="bg-green-900/50 backdrop-blur-sm rounded-3xl shadow-lg max-w-6xl mx-auto p-10 text-center border border-green-500/30">
        <h2 className="text-4xl md:text-5xl font-bold text-green-300 mb-4 uppercase tracking-wide">
          {t("about_title")}
        </h2>
        <div className="h-1 w-14 bg-green-400 mx-auto mb-8 rounded"></div>

        <p className="text-gray-200 text-xl leading-relaxed text-justify tracking-wide">
          {t("about_description")}
        </p>
      </div>
      <a
        href="/LucasBlangerCV.pdf"
        download
        className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-green-600/50 text-white font-semibold rounded-full shadow-md hover:bg-green-600 transition duration-300"
      >
        <ArrowDownTrayIcon className="h-5 w-5" />
        {t("resume")}
      </a>
    </section>
  );
}
