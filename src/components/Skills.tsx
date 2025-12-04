import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaPython,
  FaPhp,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaFlagUsa,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiMysql,
  SiPostgresql,
  SiExpress,
  SiFlask,
  SiGodotengine,
  SiTailwindcss,
  SiFigma,
  SiDjango,
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
      { name: "Node.js", icon: <FaNodeJs color="#339933" />, level: 50 },
    ],
  },
  {
    category: "Frameworks",
    items: [
      { name: "Flask", icon: <SiFlask color="#000000" />, level: 80 },
      { name: "Django Rest", icon: <SiDjango color="#092E20" />, level: 80 },
      { name: "Express.js", icon: <SiExpress color="#000000" />, level: 50 },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss color="#38BDF8" />,
        level: 50,
      },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", icon: <SiMysql color="#4479A1" />, level: 90 },
      { name: "PostgreSQL", icon: <SiPostgresql color="#336791" />, level: 50 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Godot", icon: <SiGodotengine color="#478CBF" />, level: 70 },
      { name: "Git/GitHub", icon: <FaGitAlt color="#F1502F" />, level: 80 },
      { name: "Docker", icon: <FaDocker color="#2496ED" />, level: 70 },
      { name: "Linux", icon: <FaLinux color="#FCC624" />, level: 70 },
      { name: "Figma", icon: <SiFigma color="#F24E1E" />, level: 50 },
      { name: "English", icon: <FaFlagUsa color="#4285F4" />, level: 90 },
    ],
  },
];

export default function Skills() {
  const { t } = useTranslation();
  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-16 px-4 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-green-400 text-center mb-16">
          {t("my_skills")}
        </h2>

        <div className="grid md:grid-cols-2 gap-x-24 gap-y-16">
          {skills.map((group, idx) => (
            <div key={idx}>
              <h3 className="text-3xl font-semibold text-green-300 mb-6 border-b border-green-600 pb-2">
                {group.category}
              </h3>
              <ul className="space-y-5">
                {group.items.map((skill, i) => (
                  <li key={i} className="flex items-center space-x-5">
                    <div className="text-[36px] w-10">{skill.icon}</div>
                    <div className="w-full">
                      <div className="text-base font-medium text-green-200 mb-1">
                        {skill.name}
                      </div>
                      <div className="w-full bg-gray-700 h-3 rounded">
                        <div
                          className="bg-green-500 h-3 rounded transition-all duration-500"
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
