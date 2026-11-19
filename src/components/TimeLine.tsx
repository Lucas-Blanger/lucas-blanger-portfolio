import { useTranslation } from "react-i18next";

export default function Timeline() {
  const { t } = useTranslation();
  const education = [
    {
      year: "2025-atualmente",
      institution:
        "Universidade Regional Integrada do Alto Uruguai e das Missões - Campus Erechim (URI - Erechim)",
      course: t("bacharel"),
    },
    {
      year: "2024-2024",
      institution: "Universidade Federal de Santa Maria (UFSM)",
      course: t("bacharel"),
    },
    {
      year: "2020-2022",
      institution:
        "Instituto Federal de Educação,Ciência e Tecnologia do Rio Grande do Sul - Campus Erechim",
      course: t("high_school"),
    },
  ];

  return (
    <section className="pt-8 pb-16 px-4">
      <div className="text-center mb-12">
        <h2 className="section-title text-3xl md:text-4xl">{t("time")}</h2>
      </div>

      <div className="relative border-l-2 border-accent/50 mx-auto max-w-2xl">
        {education.map((item, index) => (
          <div key={index} className="group mb-12 ml-6">
            <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] ring-4 ring-bg shadow-[0_0_12px_rgb(var(--c-glow)/0.7)] transition-transform duration-300 group-hover:scale-125"></div>
            <time className="mb-1 text-sm font-normal leading-none text-muted">
              {item.year}
            </time>
            <h3 className="text-xl font-semibold text-fg transition-colors group-hover:text-accent">
              {item.institution}
            </h3>
            <p className="text-md text-muted">{item.course}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
