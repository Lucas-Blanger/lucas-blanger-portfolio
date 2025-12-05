import { useEffect, useState, type ReactNode } from "react";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useTranslation } from "react-i18next";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaPython,
  FaPhp,
  FaDocker,
  FaGitAlt,
  //FaLinux,
  //FaJava,
  FaReact,
  FaGithub,
  FaItchIo,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiCplusplus,
  //SiFlutter,
  //SiLaravel,
  SiMysql,
  //SiPostgresql,
  SiPostman,
  SiExpress,
  SiFlask,
  SiGodotengine,
  SiTypescript,
  SiTailwindcss,
  //SiDart,
  //SiFigma,
  SiLaravel,
  SiDjango,
} from "react-icons/si";

interface StackItem {
  name: string;
  icon: ReactNode;
}

interface Project {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  cover: string;
  repo?: string;
  itch?: string;
  postman?: string;
  stack: StackItem[];
  gallery: string[];
}

const projects: Project[] = [
  {
    id: "nego-maq-api",
    title: "Nego Maq API",
    shortDesc: "nego-maq-api_short",
    longDesc: "nego-maq-api_long",
    cover: "/assets/img/nego-maq-api/maq.png",
    repo: "https://github.com/Lucas-Blanger/nego-maq-api",
    postman: "https://documenter.getpostman.com/view/42551640/2sB3WpSMJN",
    stack: [
      { name: "Python", icon: <FaPython color="#3776AB" />},
      { name: "Flask", icon: <SiFlask color="#000000" /> },
      { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
      { name: "Docker", icon: <FaDocker color="#2496ED" />},
      { name: "Git/GitHub", icon: <FaGitAlt color="#F1502F" /> },
    ],
    gallery: [
      "/assets/img/nego-maq-api/maq.png",
      "/assets/img/nego-maq-api/tela_inicial.png",
      "/assets/img/nego-maq-api/tela-categoria.png",
      "/assets/img/portfolio/tela_checkout.png",
    ],
  },
  {
    id: "portfolio",
    title: "Lucas Blanger Portfólio",
    shortDesc: "portfolio_short",
    longDesc: "portfolio_long",
    cover: "/assets/img/portfolio/port1.png",
    repo: "https://github.com/Lucas-Blanger/lucas-blanger-portfolio",
    stack: [
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss color="#38BDF8" />,
      },
      { name: "React", icon: <FaReact color="#61DAFB" /> },
      { name: "Typescript", icon: <SiTypescript color="#3178C6" /> },
      { name: "Git/GitHub", icon: <FaGitAlt color="#F1502F" /> },
    ],
    gallery: [
      "/assets/img/portfolio/port1.png",
      "/assets/img/portfolio/port2.png",
      "/assets/img/portfolio/port3.png",
      "/assets/img/portfolio/port4.png",
      "/assets/img/portfolio/port6.png",
      "/assets/img/portfolio/port7.png",
      "/assets/img/portfolio/port8.png",
    ],
  },
  {
    id: "m83",
    title: "M83",
    shortDesc: "m83_short",
    longDesc: "m83_long",
    cover: "/assets/img/m83/m831 (1).png",
    repo: "https://github.com/Lucas-Blanger/M83",
    itch: "https://lucasblanger.itch.io/m83",
    stack: [
      { name: "Godot", icon: <SiGodotengine color="#478CBF" /> },
      { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
      { name: "Git/GitHub", icon: <FaGitAlt color="#F1502F" /> },
    ],
    gallery: ["/assets/img/m83/m831 (1).png", "/assets/img/m83/m831 (2).png"],
  },

  {
    id: "adminlte-crud",
    title: "AdminLTE CRUD",
    shortDesc: "laravel_adminlte_short",
    longDesc: "laravel_adminlte_long",
    cover: "/assets/img/adminlte-crud/dash.png",
    repo: "https://github.com/Lucas-Blanger/adminlte-crud",
    stack: [
      { name: "PHP", icon: <FaPhp color="#777BB4" /> },
      { name: "Laravel", icon: <SiLaravel color="#FF2D20" /> },
      { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" /> },
      { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
      { name: "Git/GitHub", icon: <FaGitAlt color="#F05033" /> },
    ],
    gallery: [
      "/assets/img/adminlte-crud/dash.png",
      "/assets/img/adminlte-crud/add.png",
      "/assets/img/adminlte-crud/login.png",
      "/assets/img/adminlte-crud/register.png",
      "/assets/img/adminlte-crud/edit.png",
    ],
  },
  {
    id: "ewaste",
    title: "E-Waste",
    shortDesc: "ewaste_short",
    longDesc: "ewaste_long",
    cover: "/assets/img/e-waste/ewaste-1 (2).png",
    repo: "https://github.com/Lucas-Blanger/e-waste",
    stack: [
      { name: "Python", icon: <FaPython color="#3776AB" /> },
      { name: "PHP", icon: <FaPhp color="#8892be" /> },
      { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
      { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
      { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
      { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
      { name: "Git/GitHub", icon: <FaGitAlt color="#F1502F" /> },
    ],
    gallery: [
      "/assets/img/e-waste/ewaste-1 (1).png",
      "/assets/img/e-waste/ewaste-1 (2).png",
    ],
  },
  {
    id: "fluxo",
    title: "Fluxo de Caixa",
    shortDesc: "fluxo_short",
    longDesc: "fluxo_long",
    cover: "/assets/img/fluxodecaixa/fluxodecaixa.png",
    repo: "https://github.com/Lucas-Blanger/Fluxo-de-caixa",
    stack: [
      { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
      { name: "Express.js", icon: <SiExpress color="#000000" /> },
      { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
      { name: "Git/GitHub", icon: <FaGitAlt color="#F1502F" /> },
    ],
    gallery: ["/assets/img/fluxodecaixa/fluxodecaixa.png"],
  },
  {
    id: "conta",
    title: "Conta Horas",
    shortDesc: "conta_short",
    longDesc: "conta_long",
    cover: "/assets/img/contahoras/contahoras (1).png",
    repo: "https://github.com/Lucas-Blanger/contaHoras",
    stack: [
      { name: "Python", icon: <FaPython color="#3776AB" /> },
      { name: "Flask", icon: <SiFlask color="#000000" /> },
      { name: "Django", icon: <SiDjango color="#F1502F" /> },
      { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
      { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
      { name: "Git/GitHub", icon: <FaGitAlt color="#F1502F" /> },
    ],
    gallery: [
      "/assets/img/contahoras/contahoras (1).png",
      "/assets/img/contahoras/contahoras (2).png",
      "/assets/img/contahoras/contahoras (3).png",
    ],
  },
  {
    id: "competetive",
    title: "Competetive Programming",
    shortDesc: "competetive_short",
    longDesc: "competetive_long",
    cover: "/assets/img/competetive-programs/competetive.png",
    repo: "https://github.com/Lucas-Blanger/Competitive-problems",
    stack: [
      { name: "Python", icon: <FaPython color="#3776AB" /> },
      { name: "C/C++", icon: <SiCplusplus color="#00599C" /> },
      { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
      { name: "Git/GitHub", icon: <FaGitAlt color="#F1502F" /> },
    ],
    gallery: [
      "/assets/img/competetive-programs/competetive.png",
      "/assets/img/competetive-programs/competetive (1).png",
      "/assets/img/competetive-programs/competetive (2).png",
    ],
  },
  {
    id: "automantion",
    title: "Automantion House",
    shortDesc: "automantion_short",
    longDesc: "automantion_long",
    cover: "/assets/img/automationhouse/automantionhouse.png",
    repo: "https://github.com/Lucas-Blanger/automantionHouse",
    stack: [
      { name: "Python", icon: <FaPython color="#3776AB" /> },
      { name: "C/C++", icon: <SiCplusplus color="#00599C" /> },
      { name: "Git/GitHub", icon: <FaGitAlt color="#F1502F" /> },
    ],
    gallery: [
      "/assets/img/automationhouse/automation.png",
      "/assets/img/automationhouse/automantionhouse.png",
    ],
  },
];

export default function Projects() {
  const [active, setActive] = useState<string | null>(null);
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20 px-4 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-green-400 mb-4">
          {t("my_projects")}
        </h2>
        <p className="text-center mb-14 text-lg text-gray-300">
          {t("about_projects")}{" "}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p) => (
            <ProjectCard key={p.id} data={p} onOpen={setActive} />
          ))}
        </div>
      </div>

      {active && (
        <ProjectModal
          data={projects.find((p): p is Project => p.id === active)}
          onClose={() => setActive(null)}
        />
      )}
    </section>
  );
}

interface ProjectCardProps {
  data: Project;
  onOpen: (id: string) => void;
}

function ProjectCard({ data, onOpen }: ProjectCardProps) {
  const { t } = useTranslation();

  return (
    <button
      onClick={() => onOpen(data.id)}
      className="relative flex flex-col bg-gradient-to-b from-gray-800 via-gray-800/60 to-gray-800/30 rounded-2xl overflow-hidden shadow-lg outline-none
                 ring-1 ring-green-500/30 hover:scale-[1.03] hover:ring-green-400/80 transition-transform duration-300"
    >
      <img
        src={data.cover}
        alt={data.title}
        className="h-44 w-full object-cover"
      />

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-green-300">
            {data.title}
          </h3>
          <p className="text-sm mt-2 text-gray-300 line-clamp-3">
            {t(data.shortDesc)}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mt-6">
          {data.stack.map((s, i) => (
            <span key={i} className="text-xl">
              {s.icon}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}

interface ProjectModalProps {
  data: Project | undefined;
  onClose: () => void;
}

function ProjectModal({ data, onClose }: ProjectModalProps) {
  const [zoomIndex, setZoomIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (!data) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (zoomIndex !== null) {
        if (e.key === "ArrowLeft") {
          setZoomIndex((prev) =>
            prev !== null
              ? (prev - 1 + data.gallery.length) % data.gallery.length
              : null
          );
        } else if (e.key === "ArrowRight") {
          setZoomIndex((prev) =>
            prev !== null ? (prev + 1) % data.gallery.length : null
          );
        } else if (e.key === "Escape") {
          setZoomIndex(null);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [zoomIndex, data?.gallery?.length, data]);

  if (!data) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-3xl w-full bg-black/80 rounded-3xl ring-2 ring-green-500/60 p-8 overflow-y-auto max-h-[90vh] shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-white text-2xl"
        >
          ✕
        </button>

        <h3 className="text-4xl font-bold text-green-400 mb-4">{data.title}</h3>
        <p className="text-lg text-gray-300 mb-6">{t(data.longDesc)}</p>

        <div className="flex flex-wrap gap-4 mb-6">
          {data.stack.map((s, i) => (
            <span
              key={i}
              className="flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/50 text-sm"
            >
              {s.icon}
              {s.name}
            </span>
          ))}
        </div>

        {data.repo && (
          <a
            href={data.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-green-400 hover:text-green-200 mb-8"
          >
            <FaGithub /> {t("github")}
          </a>
        )}

        {data.itch && (
          <a
            href={data.itch}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 mb-8 ml-6"
          >
            <FaItchIo /> {t("itchio")}
          </a>
        )}

        {data.postman && (
          <a
            href={data.postman}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-600 mb-8 ml-6"
          >
            <SiPostman /> {t("postman")}
          </a>
        )}
        {data.gallery?.length > 0 && (
          <>
            <h4 className="text-2xl font-semibold mb-3">{t("gallery")}</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {data.gallery.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${data.title} screenshot ${i + 1}`}
                  onClick={() => setZoomIndex(i)}
                  className="cursor-zoom-in w-full h-40 object-cover rounded-lg ring-1 ring-green-500/30 hover:ring-green-300 transition"
                />
              ))}
            </div>
          </>
        )}

        {zoomIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setZoomIndex(null)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full"
            >
              <button
                onClick={() => setZoomIndex(null)}
                className="absolute top-4 right-4 text-white text-3xl hover:text-green-200 z-10"
              >
                <FiX />
              </button>

              <button
                onClick={() =>
                  setZoomIndex((prev) =>
                    prev !== null
                      ? (prev - 1 + data.gallery.length) % data.gallery.length
                      : null
                  )
                }
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-green-200 z-10"
              >
                <FiChevronLeft />
              </button>

              <button
                onClick={() =>
                  setZoomIndex((prev) =>
                    prev !== null ? (prev + 1) % data.gallery.length : null
                  )
                }
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-green-200 z-10"
              >
                <FiChevronRight />
              </button>

              <img
                src={data.gallery[zoomIndex]}
                alt={`Imagem ${zoomIndex + 1}`}
                className="w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
