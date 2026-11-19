import { Download } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16"
    >
      <div className="card relative max-w-6xl mx-auto p-10 text-center overflow-hidden">
        {/* Accent line on top of the card */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
        <h2 className="section-title text-4xl md:text-5xl mb-8 uppercase tracking-wide">
          {t("about_title")}
        </h2>

        <p className="text-fg/85 text-xl leading-relaxed text-justify tracking-wide">
          {t("about_description")}
        </p>
      </div>
      <a
        id="download-cv"
        href="/LucasBlangerCV.pdf"
        download
        className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-fg font-semibold rounded-full shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-8px_rgb(var(--c-glow)/0.7)]"
      >
        <Download className="h-5 w-5" />
        {t("resume")}
      </a>
    </section>
  );
}
