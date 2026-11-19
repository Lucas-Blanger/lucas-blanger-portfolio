import { useEffect, useState, type ReactNode } from "react";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useTranslation } from "react-i18next";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  //FaLinux,
  //FaJava,
  FaReact,
  FaGithub,
  FaItchIo,
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
  SiTypescript,
  SiTailwindcss,
  //SiDart,
  //SiFigma,
  SiDjango,
  SiPostgresql,
  SiFastapi,
  SiMongodb,
  SiRedis,
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
    id: "melitrack",
    title: "Melitrack",
    shortDesc: "Melitrack_short",
    longDesc: "Melitrack_long",
    cover: "/assets/img/melitrack/Melitrack.webp",
    repo: "https://github.com/Lucas-Blanger/Melitrack",
    stack: [
      { name: "Python", icon: <FaPython color="#3776AB" /> },
      { name: "FastAPI", icon: <SiFastapi color="#009688" /> },
      { name: "React", icon: <FaReact color="#61DAFB" /> },
      { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
      { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> },
      { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
      { name: "Redis", icon: <SiRedis color="#FF4438" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
      { name: "Docker", icon: <FaDocker color="#2496ED" /> },
      { name: "Git/GitHub", icon: <FaGitAlt color="#F05032" /> },
    ],
    gallery: [
      "/assets/img/melitrack/Melitrack.webp",
      "/assets/img/melitrack/06.webp",
      "/assets/img/melitrack/04.webp",
      "/assets/img/melitrack/03.webp",
      "/assets/img/melitrack/02.webp",
      "/assets/img/melitrack/entrada.webp",
    ],
  },
  {
    id: "nego-maq-api",
    title: "Nego Maq API",
    shortDesc: "nego-maq-api_short",
    longDesc: "nego-maq-api_long",
    cover: "/assets/img/nego-maq-api/maq.webp",
    repo: "https://github.com/Lucas-Blanger/nego-maq-api",
    postman: "https://documenter.getpostman.com/view/42551640/2sB3WpSMJN",
    stack: [
      { name: "Python", icon: <FaPython color="#3776AB" /> },
      { name: "Flask", icon: <SiFlask className="text-fg" /> },
      { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
      { name: "Docker", icon: <FaDocker color="#2496ED" /> },
      { name: "Git/GitHub", icon: <FaGitAlt color="#F1502F" /> },
    ],
    gallery: [
      "/assets/img/nego-maq-api/maq.webp",
      "/assets/img/nego-maq-api/tela_inicial.webp",
      "/assets/img/nego-maq-api/tela-categoria.webp",
      "/assets/img/nego-maq-api/tela_checkout.webp",
    ],
  },
  {
    id: "agendify",
    title: "Agendify API",
    shortDesc: "agendify_short",
    longDesc: "agendify_long",
    cover: "/assets/img/agendify/1.webp",
    repo: "https://github.com/Lucas-Blanger/Agendify",
    stack: [
      { name: "Python", icon: <FaPython color="#3776AB" /> },
      { name: "Django Rest Framework", icon: <SiDjango className="text-[#092E20] dark:text-[#44B78B]" /> },
      { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
      { name: "Docker", icon: <FaDocker color="#2496ED" /> },
      { name: "Git/GitHub", icon: <FaGitAlt color="#F05032" /> },
    ],
    gallery: [
      "/assets/img/agendify/1.webp",
      "/assets/img/agendify/2.webp",
      "/assets/img/agendify/3.webp",
      "/assets/img/agendify/capa.webp",
    ],
  },
  {
    id: "agro-clima",
    title: "AgroClima",
    shortDesc: "agroclima_short",
    longDesc: "agroclima_long",
    cover: "/assets/img/agro-clima/dash.webp",
    repo: "https://github.com/Lucas-Blanger/AgroClima",
    stack: [
      { name: "Python", icon: <FaPython color="#3776AB" /> },
      { name: "Django Rest Framework", icon: <SiDjango className="text-[#092E20] dark:text-[#44B78B]" /> },
      { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
      { name: "Docker", icon: <FaDocker color="#2496ED" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss color="#38BDF8" />,
      },
      { name: "React", icon: <FaReact color="#61DAFB" /> },
      { name: "Typescript", icon: <SiTypescript color="#3178C6" /> },
      { name: "Git/GitHub", icon: <FaGitAlt color="#F05032" /> },
    ],
    gallery: [
      "/assets/img/agro-clima/dash.webp",
      "/assets/img/agro-clima/weather.webp",
      "/assets/img/agro-clima/news.webp",
    ],
  },
  {
    id: "portfolio",
    title: "Lucas Blanger Portfólio",
    shortDesc: "portfolio_short",
    longDesc: "portfolio_long",
    cover: "/assets/img/portfolio/port1.webp",
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
      "/assets/img/portfolio/port1.webp",
      "/assets/img/portfolio/port2.webp",
      "/assets/img/portfolio/port3.webp",
      "/assets/img/portfolio/port4.webp",
      "/assets/img/portfolio/port6.webp",
      "/assets/img/portfolio/port7.webp",
      "/assets/img/portfolio/port8.webp",
    ],
  },
  {
    id: "fluxo",
    title: "Fluxo de Caixa",
    shortDesc: "fluxo_short",
    longDesc: "fluxo_long",
    cover: "/assets/img/fluxodecaixa/fluxodecaixa.webp",
    repo: "https://github.com/Lucas-Blanger/Fluxo-de-caixa",
    stack: [
      { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
      { name: "Express.js", icon: <SiExpress className="text-fg" /> },
      { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
      { name: "Git/GitHub", icon: <FaGitAlt color="#F1502F" /> },
    ],
    gallery: ["/assets/img/fluxodecaixa/fluxodecaixa.webp"],
  },
  {
    id: "conta",
    title: "Conta Horas",
    shortDesc: "conta_short",
    longDesc: "conta_long",
    cover: "/assets/img/contahoras/contahoras (1).webp",
    repo: "https://github.com/Lucas-Blanger/contaHoras",
    stack: [
      { name: "Python", icon: <FaPython color="#3776AB" /> },
      { name: "Flask", icon: <SiFlask className="text-fg" /> },
      { name: "Django", icon: <SiDjango color="#F1502F" /> },
      { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
      { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
      { name: "Git/GitHub", icon: <FaGitAlt color="#F1502F" /> },
    ],
    gallery: [
      "/assets/img/contahoras/contahoras (1).webp",
      "/assets/img/contahoras/contahoras (2).webp",
      "/assets/img/contahoras/contahoras (3).webp",
    ],
  },
  {
    id: "competetive",
    title: "Competetive Programming",
    shortDesc: "competetive_short",
    longDesc: "competetive_long",
    cover: "/assets/img/competetive-programs/competetive.webp",
    repo: "https://github.com/Lucas-Blanger/Competitive-problems",
    stack: [
      { name: "Python", icon: <FaPython color="#3776AB" /> },
      { name: "C/C++", icon: <SiCplusplus color="#00599C" /> },
      { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
      { name: "Git/GitHub", icon: <FaGitAlt color="#F1502F" /> },
    ],
    gallery: [
      "/assets/img/competetive-programs/competetive.webp",
      "/assets/img/competetive-programs/competetive (1).webp",
      "/assets/img/competetive-programs/competetive (2).webp",
    ],
  },
  {
    id: "automantion",
    title: "Automantion House",
    shortDesc: "automantion_short",
    longDesc: "automantion_long",
    cover: "/assets/img/automationhouse/automantionhouse.webp",
    repo: "https://github.com/Lucas-Blanger/automantionHouse",
    stack: [
      { name: "Python", icon: <FaPython color="#3776AB" /> },
      { name: "C/C++", icon: <SiCplusplus color="#00599C" /> },
      { name: "Git/GitHub", icon: <FaGitAlt color="#F1502F" /> },
    ],
    gallery: [
      "/assets/img/automationhouse/automation.webp",
      "/assets/img/automationhouse/automantionhouse.webp",
    ],
  },
];

export default function Projects() {
  const [active, setActive] = useState<string | null>(null);
  const { t } = useTranslation();

  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4">
          <h2 className="section-title text-5xl">{t("my_projects")}</h2>
        </div>
        <p className="text-center mb-14 text-lg text-muted">
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
      id={`project-${data.id}`}
      onClick={() => onOpen(data.id)}
      className="card card-hover group relative flex flex-col overflow-hidden text-left outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
    >
      <div className="relative h-44 w-full overflow-hidden">
        <img
          src={data.cover}
          alt={data.title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent" />
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-accent">
            {data.title}
          </h3>
          <p className="text-sm mt-2 text-muted line-clamp-3">
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
              : null,
          );
        } else if (e.key === "ArrowRight") {
          setZoomIndex((prev) =>
            prev !== null ? (prev + 1) % data.gallery.length : null,
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-3xl w-full bg-surface text-fg rounded-3xl border border-accent/40 p-8 overflow-y-auto max-h-[90vh] shadow-2xl"
      >
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-4 right-4 text-muted hover:text-fg text-2xl"
        >
          ✕
        </button>

        <h3 className="text-4xl font-bold text-accent mb-4">{data.title}</h3>
        <p className="text-lg text-muted mb-6">{t(data.longDesc)}</p>

        <div className="flex flex-wrap gap-4 mb-6">
          {data.stack.map((s, i) => (
            <span
              key={i}
              className="flex items-center gap-2 px-3 py-1 rounded-full border border-accent/40 bg-surface-2/60 text-sm"
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
            className="inline-flex items-center gap-2 text-accent hover:text-accent-strong mb-8"
          >
            <FaGithub /> {t("github")}
          </a>
        )}

        {data.itch && (
          <a
            href={data.itch}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-pink-600 dark:text-pink-400 hover:text-pink-500 dark:hover:text-pink-300 mb-8 ml-6"
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
                  loading="lazy"
                  decoding="async"
                  onClick={() => setZoomIndex(i)}
                  className="cursor-zoom-in w-full h-40 object-cover rounded-lg ring-1 ring-accent/30 hover:ring-accent transition"
                />
              ))}
            </div>
          </>
        )}

        {zoomIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setZoomIndex(null)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full"
            >
              <button
                onClick={() => setZoomIndex(null)}
                className="absolute top-4 right-4 text-white text-3xl hover:text-emerald-300 z-10"
              >
                <FiX />
              </button>

              <button
                onClick={() =>
                  setZoomIndex((prev) =>
                    prev !== null
                      ? (prev - 1 + data.gallery.length) % data.gallery.length
                      : null,
                  )
                }
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-emerald-300 z-10"
              >
                <FiChevronLeft />
              </button>

              <button
                onClick={() =>
                  setZoomIndex((prev) =>
                    prev !== null ? (prev + 1) % data.gallery.length : null,
                  )
                }
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-emerald-300 z-10"
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
