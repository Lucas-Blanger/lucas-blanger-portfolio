import { useTranslation } from "react-i18next";

interface ExperienceEntry {
  id: string;
  period: string;
  schedule: string;
  title: string;
  description: string;
}

const experiences: ExperienceEntry[] = [
  {
    id: "bolsa",
    period: "bolsa_period",
    schedule: "experience_part_time",
    title: "bolsa_title",
    description: "bolsa_description",
  },
  {
    id: "experience_free",
    period: "experience_free_period",
    schedule: "experience_part_time",
    title: "experience_free_title",
    description: "experience_free_description",
  },
  {
    id: "ifrs-algorithms-monitor",
    period: "experience_ifrs_period",
    schedule: "experience_part_time",
    title: "experience_ifrs_title",
    description: "experience_ifrs_description",
  },
];

export default function Experience() {
  const { t } = useTranslation();

  return (
    <section id="experiences" className="bg-gray-900 pt-8 pb-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-green-400 text-center mb-12">
        {t("experience_title")}
      </h2>

      <div className="relative border-l-4 border-green-400 mx-auto max-w-2xl">
        {experiences.map((experience) => (
          <div key={experience.id} className="relative mb-12 ml-6">
            <div className="absolute w-4 h-4 bg-green-400 rounded-full -left-8 border-4 border-gray-900"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400">
              {t(experience.period)} · {t(experience.schedule)}
            </time>
            <h3 className="text-xl font-semibold text-white">
              {t(experience.title)}
            </h3>
            <p className="text-md text-gray-300">{t(experience.description)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
