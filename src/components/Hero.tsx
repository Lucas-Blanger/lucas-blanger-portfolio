import { FaLinkedin, FaGithub, FaEnvelope, FaItchIo } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center text-white bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,0,0.2),transparent_70%)] animate-pulse"></div>

      <div className="z-10 flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-20">
        <p className="text-green-400 text-2xl mb-2">{t("hello")}</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-2">Lucas</h1>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Blanger</h1>

        <div className="flex space-x-6 mt-4">
          <a
            href="https://www.linkedin.com/in/lucas-blanger-4668a2210/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-green-400 hover:text-green-200 text-4xl transition" />
          </a>
          <a
            href="https://github.com/Lucas-Blanger"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-green-400 hover:text-green-200 text-4xl transition" />
          </a>
          <a href="mailto:blangerlucas@gmail.com">
            <FaEnvelope className="text-green-400 hover:text-green-200 text-4xl transition" />
          </a>
          <a href="https://lucs-blanger.itch.io/">
            <FaItchIo className="text-green-400 hover:text-green-200 text-4xl transition" />
          </a>
        </div>
      </div>

      <div className="z-10 mt-8 md:mt-0 md:ml-12">
        <img
          src="src\assets\lucas.png"
          alt="Lucas Blanger"
          className="w-80 h-80 object-cover rounded-3xl shadow-lg"
        />
      </div>
    </section>
  );
}
