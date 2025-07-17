import { useTranslation } from "react-i18next";

export default function Timeline() {
  const { t } = useTranslation();
  const education = [
    {
      year: "2020-2022",
      institution:
        "Instituto Federal de Educação,Ciência e Tecnologia do Rio Grande do Sul - Campus Erechim",
      course: t("high_school"),
    },
    {
      year: "2024-2024",
      institution: "Universidade Federal de Santa Maria (UFSM)",
      course: t("bacharel"),
    },
    {
      year: "2025-atualmente",
      institution:
        "Universidade Regional Integrada do Alto Uruguai e das Missões - Campus Erechim (URI - Erechim)",
      course: t("bacharel"),
    },
  ];

  return (
    <section className="bg-gray-900 pt-8 pb-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-green-400 text-center mb-12    ">
        {t("time")}
      </h2>

      <div className="relative border-l-4 border-green-400 mx-auto max-w-2xl">
        {education.map((item, index) => (
          <div key={index} className="mb-12 ml-6">
            <div className="absolute w-4 h-4 bg-green-400 rounded-full -left-2 border-4 border-gray-900"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400">
              {item.year}
            </time>
            <h3 className="text-xl font-semibold text-white">
              {item.institution}
            </h3>
            <p className="text-md text-gray-300">{item.course}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
