import { FaLinkedin, FaGithub, FaEnvelope, FaItchIo } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const socials = [
  {
    href: "https://www.linkedin.com/in/lucas-blanger-4668a2210/",
    label: "LinkedIn",
    icon: FaLinkedin,
    external: true,
  },
  {
    href: "https://github.com/Lucas-Blanger",
    label: "GitHub",
    icon: FaGithub,
    external: true,
  },
  { href: "mailto:blangerlucas@gmail.com", label: "Email", icon: FaEnvelope },
  {
    href: "https://lucs-blanger.itch.io/",
    label: "Itch.io",
    icon: FaItchIo,
    external: true,
  },
];

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-73px)] flex flex-col md:flex-row items-center justify-center overflow-hidden px-4 py-16"
    >
      <div className="z-10 flex flex-col items-center md:items-start text-center md:text-left md:px-20">
        <p className="text-accent text-2xl mb-2 font-medium">{t("hello")}</p>
        <h1 className="font-display text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
          <span className="block text-fg">Lucas</span>
          <span className="block bg-gradient-to-r from-accent via-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Blanger
          </span>
        </h1>

        <div className="flex gap-4 mt-8">
          {socials.map(({ href, label, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="grid h-12 w-12 place-items-center rounded-xl border border-line bg-surface/70 text-accent text-2xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:text-accent-strong hover:shadow-[0_8px_24px_-8px_rgb(var(--c-glow)/0.6)]"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      <div className="z-10 mt-12 md:mt-0 md:ml-12 animate-float">
        <div className="relative">
          {/* Glow ring behind the photo */}
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent/60 via-emerald-400/30 to-teal-400/60 opacity-70 blur-2xl" />
          <img
            src="/assets/lucas.webp"
            alt="Lucas Blanger"
            fetchPriority="high"
            decoding="async"
            className="relative w-72 h-72 md:w-80 md:h-80 object-cover rounded-3xl border border-accent/40 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
