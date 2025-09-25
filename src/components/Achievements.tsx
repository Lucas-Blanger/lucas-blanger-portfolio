import { FaMedal, FaBullseye } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const achievements = [
  {
    icon: <FaMedal className="text-yellow-400" />,
    texto: "2° (VICE-CAMPEÃO) da Maratona Gaúcha de Programação 2025",
  },
  {
    icon: <FaMedal className="text-yellow-400" />,
    texto: "f_achievement",
  },
  {
    icon: <FaBullseye className="text-pink-400" />,
    texto: "s_achievement",
  },
  {
    icon: <FaMedal className="text-orange-400" />,
    texto: "t_achievement",
  },
  {
    icon: <FaMedal className="text-orange-400" />,
    texto: "p_achievement",
  },
];

export default function Achievements() {
  const { t } = useTranslation();

  return (
    <section
      id="achievements"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20 px-4 text-white"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-green-400 mb-4">
          {t("my_achievements")}
        </h2>
        <p className="text-center mb-12 text-lg text-gray-300">
          {t("about_achievements")}
        </p>

        <div className="flex flex-col gap-6">
          {achievements.map((c, i) => (
            <div
              key={i}
              className="flex items-center gap-5 bg-gradient-to-r from-gray-800/60 to-gray-800/20 p-5 rounded-2xl ring-1 ring-green-400/30 shadow-xl 
                         hover:ring-green-400/70 transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm shadow-inner">
                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {c.icon}
                </div>
              </div>
              <p className="text-lg text-gray-100 font-medium leading-snug">
                {t(c.texto)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
