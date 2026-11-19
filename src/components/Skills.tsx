import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaFlagUsa,
  FaChartLine,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiMysql,
  SiPostgresql,
  SiExpress,
  SiFlask,
  SiGodotengine,
  SiDjango,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiKubernetes,
  SiFastapi,
  SiRedis,
} from "react-icons/si";
import { useTranslation } from "react-i18next";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", icon: <FaHtml5 color="#E34F26" />, level: 90 },
      { name: "CSS3", icon: <FaCss3Alt color="#1572B6" />, level: 85 },
      { name: "JavaScript", icon: <FaJs color="#F7DF1E" />, level: 80 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Python", icon: <FaPython color="#3776AB" />, level: 80 },
      { name: "C++", icon: <SiCplusplus color="#00599C" />, level: 80 },
      { name: "Node.js", icon: <FaNodeJs color="#339933" />, level: 30 },
    ],
  },
  {
    category: "Frameworks",
    items: [
      { name: "Flask", icon: <SiFlask className="text-fg" />, level: 80 },
      { name: "Django Rest", icon: <SiDjango className="text-[#092E20] dark:text-[#44B78B]" />, level: 80 },
      { name: "FastAPI", icon: <SiFastapi color="#009688" />, level: 80 },
      { name: "Express.js", icon: <SiExpress className="text-fg" />, level: 30 },
    ],
  },
  {
    category: "Data Analysis / Machine Learning",
    items: [
      { name: "Pandas", icon: <SiPandas className="text-[#150458] dark:text-[#a5a1ff]" />, level: 75 },
      { name: "Numpy", icon: <SiNumpy className="text-[#013243] dark:text-[#4DABCF]" />, level: 75 },
      { name: "Matplotlib", icon: <FaChartLine color="#11557C" />, level: 75 },
      {
        name: "Scikit-learn",
        icon: <SiScikitlearn color="#F7931E" />,
        level: 75,
      },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", icon: <SiMysql color="#4479A1" />, level: 90 },
      { name: "PostgreSQL", icon: <SiPostgresql color="#336791" />, level: 90 },
      { name: "Redis", icon: <SiRedis color="#DC382D" />, level: 50 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Godot", icon: <SiGodotengine color="#478CBF" />, level: 70 },
      { name: "Git/GitHub", icon: <FaGitAlt color="#F1502F" />, level: 80 },
      { name: "Docker", icon: <FaDocker color="#2496ED" />, level: 70 },
      { name: "Kubernetes", icon: <SiKubernetes color="#326CE5" />, level: 40 },
      { name: "Linux", icon: <FaLinux color="#FCC624" />, level: 70 },
      { name: "English", icon: <FaFlagUsa color="#4285F4" />, level: 90 },
    ],
  },
];

export default function Skills() {
  const { t } = useTranslation();
  return (
    <section id="skills" className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title text-5xl">{t("my_skills")}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {skills.map((group, idx) => (
            <div key={idx} className="card card-hover p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-semibold text-accent mb-6 border-b border-line pb-2">
                {group.category}
              </h3>
              <ul className="space-y-5">
                {group.items.map((skill, i) => (
                  <li key={i} className="group flex items-center space-x-5">
                    <div className="text-[36px] w-10 transition-transform duration-300 group-hover:scale-110">
                      {skill.icon}
                    </div>
                    <div className="w-full">
                      <div className="flex justify-between text-base font-medium text-fg mb-1">
                        <span>{skill.name}</span>
                        <span className="text-sm text-muted">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-line/70 h-2.5 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-accent shadow-[0_0_10px_rgb(var(--c-glow)/0.6)] transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
