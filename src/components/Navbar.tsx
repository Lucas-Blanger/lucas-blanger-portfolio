import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import brFlag from "/assets/BR.webp";
import usFlag from "/assets/EUA.webp";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "#about", key: "about" },
  { href: "#skills", key: "skills" },
  { href: "#experiences", key: "experiences" },
  { href: "#projects", key: "projects" },
  { href: "#contato", key: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: "pt" | "en") => {
    i18n.changeLanguage(lng);
  };

  const flagClass = (lng: string) =>
    `w-8 h-8 rounded-full transition-all duration-300 hover:scale-110 ${
      i18n.language === lng
        ? "ring-2 ring-accent shadow-[0_0_12px_rgb(var(--c-glow)/0.5)]"
        : "opacity-60 hover:opacity-100"
    }`;

  const flags = (
    <>
      <button
        id="lang-pt"
        onClick={() => changeLanguage("pt")}
        aria-label="Português"
      >
        <img src={brFlag} alt="Português" className={flagClass("pt")} />
      </button>
      <button
        id="lang-en"
        onClick={() => changeLanguage("en")}
        aria-label="English"
      >
        <img src={usFlag} alt="English" className={flagClass("en")} />
      </button>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 border-b border-line/60 bg-bg/75 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <a
          href="#hero"
          className="font-display text-2xl font-bold tracking-tight text-fg"
        >
          Lucas <span className="text-accent">Blanger</span>
        </a>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle id="theme-toggle-mobile" />
          <button
            id="menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="text-accent w-8 h-8" />
            ) : (
              <Menu className="text-accent w-8 h-8" />
            )}
          </button>
        </div>

        <ul className="hidden md:flex items-center space-x-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-lg font-medium text-muted transition-colors hover:text-accent"
              >
                {t(l.key)}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
          <li className="flex items-center space-x-2 pl-2">{flags}</li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col space-y-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-lg font-medium text-muted hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {t(l.key)}
                </a>
              </li>
            ))}
            <li className="flex space-x-2">{flags}</li>
          </ul>
        </div>
      )}
    </nav>
  );
}
