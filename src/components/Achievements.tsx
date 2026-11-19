import { FaMedal, FaBullseye } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const achievements = [
  {
    icon: <FaMedal className="text-yellow-500 dark:text-yellow-400" />,
    texto: "2° (VICE-CAMPEÃO) da Maratona Gaúcha de Programação 2025",
  },
  {
    icon: <FaMedal className="text-yellow-500 dark:text-yellow-400" />,
    texto: "f_achievement",
  },
  {
    icon: <FaBullseye className="text-pink-500 dark:text-pink-400" />,
    texto: "s_achievement",
  },
  {
    icon: <FaMedal className="text-orange-500 dark:text-orange-400" />,
    texto: "t_achievement",
  },
  {
    icon: <FaMedal className="text-orange-500 dark:text-orange-400" />,
    texto: "p_achievement",
  },
];

export default function Achievements() {
  const { t } = useTranslation();

  return (
    <section id="achievements" className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-4">
          <h2 className="section-title text-5xl">{t("my_achievements")}</h2>
        </div>
        <p className="text-center mb-12 text-lg text-muted">
          {t("about_achievements")}
        </p>

        <div className="flex flex-col gap-6">
          {achievements.map((c, i) => (
            <div
              key={i}
              className="card card-hover group flex items-center gap-5 p-5"
            >
              <div className="w-14 h-14 shrink-0 flex items-center justify-center rounded-full bg-surface-2 border border-line shadow-inner">
                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {c.icon}
                </div>
              </div>
              <p className="text-lg text-fg font-medium leading-snug">
                {t(c.texto)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
