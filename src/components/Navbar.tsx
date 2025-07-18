import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import brFlag from "@/assets/BR.png";
import usFlag from "@/assets/EUA.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: "pt" | "en") => {
    i18n.changeLanguage(lng);
  };
  return (
    <nav className="bg-black shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-600">Lucas Blanger</h1>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="text-green-600 w-8 h-8" />
            ) : (
              <Menu className="text-green-600 w-8 h-8" />
            )}
          </button>
        </div>

        <ul className="hidden md:flex space-x-6">
          <li>
            <a
              href="#about"
              className="hover:text-green-200 text-green-600 text-xl"
            >
              {t("about")}
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-green-200 text-green-600 text-xl"
            >
              {t("skills")}
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-green-200 text-green-600 text-xl"
            >
              {t("projects")}
            </a>
          </li>
          <li>
            <a
              href="#contato"
              className="hover:text-green-200 text-green-600 text-xl"
            >
              {t("contact")}
            </a>
          </li>
          <li className="flex space-x-2 ml-4">
            <button onClick={() => changeLanguage("pt")}>
              <img
                src={brFlag}
                alt="Português"
                className={`w-8 h-8 rounded-full ${
                  i18n.language === "pt"
                    ? "border-2 border-green-400 shadow-green-400 shadow"
                    : ""
                }`}
              />
            </button>
            <button onClick={() => changeLanguage("en")}>
              <img
                src={usFlag}
                alt="English"
                className={`w-8 h-8 rounded-full ${
                  i18n.language === "en"
                    ? "border-2 border-green-400 shadow-green-400 shadow"
                    : ""
                }`}
              />
            </button>
          </li>
        </ul>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col space-y-4">
            <li>
              <a
                href="#about"
                className="hover:text-green-200 text-green-600 text-lg"
                onClick={() => setIsOpen(false)}
              >
                {t("about")}
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-green-200 text-green-600 text-lg"
                onClick={() => setIsOpen(false)}
              >
                {t("skills")}
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-green-200 text-green-600 text-lg"
                onClick={() => setIsOpen(false)}
              >
                {t("projects")}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-green-200 text-green-600 text-lg"
                onClick={() => setIsOpen(false)}
              >
                {t("contact")}
              </a>
            </li>
            <li className="flex space-x-4 mt-4">
              <button onClick={() => changeLanguage("pt")}>
                <img
                  src={brFlag}
                  alt="Português"
                  className="w-8 h-8 rounded-full"
                />
              </button>
              <button onClick={() => changeLanguage("en")}>
                <img
                  src={usFlag}
                  alt="English"
                  className="w-8 h-8 rounded-full"
                />
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
