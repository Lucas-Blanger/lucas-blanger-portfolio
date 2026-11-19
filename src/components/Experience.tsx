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
    id: "dbc",
    period: "dbc_period",
    schedule: "experience_part_time",
    title: "dbc_title",
    description: "dbc_description",
  },
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
    <section id="experiences" className="pt-8 pb-16 px-4">
      <div className="text-center mb-12">
        <h2 className="section-title text-3xl md:text-4xl">
          {t("experience_title")}
        </h2>
      </div>

      <div className="relative border-l-2 border-accent/50 mx-auto max-w-2xl">
        {experiences.map((experience) => (
          <div key={experience.id} className="group relative mb-12 ml-6">
            <div className="absolute w-4 h-4 bg-accent rounded-full -left-[33px] ring-4 ring-bg shadow-[0_0_12px_rgb(var(--c-glow)/0.7)] transition-transform duration-300 group-hover:scale-125"></div>
            <time className="mb-1 text-sm font-normal leading-none text-muted">
              {t(experience.period)} · {t(experience.schedule)}
            </time>
            <h3 className="text-xl font-semibold text-fg transition-colors group-hover:text-accent">
              {t(experience.title)}
            </h3>
            <p className="text-md text-muted">{t(experience.description)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
