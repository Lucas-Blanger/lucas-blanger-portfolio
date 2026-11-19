import { FaGithub, FaLinkedin, FaEnvelope, FaItchIo } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Contato() {
  const { t } = useTranslation();

  return (
    <section id="contato" className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="section-title text-5xl mb-4">{t("conect")}</h2>
        <p className="text-muted text-lg mb-12">{t("inf_conect")}</p>

        <div className="flex justify-center gap-6 flex-wrap">
          <a
            id="contact-github"
            href="https://github.com/Lucas-Blanger"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button bg-surface/60 border-accent text-accent hover:bg-accent hover:text-accent-fg"
          >
            <FaGithub className="text-xl" />
            GitHub
          </a>

          <a
            id="contact-linkedin"
            href="https://www.linkedin.com/in/lucas-blanger-4668a2210/"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button bg-surface/60 border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-400 hover:bg-blue-500 hover:text-white dark:hover:text-black"
          >
            <FaLinkedin className="text-xl" />
            LinkedIn
          </a>

          <a
            id="contact-email"
            href="mailto:blangerlucas@gmail.com"
            className="neon-button bg-surface/60 border-pink-500 text-pink-600 dark:border-pink-400 dark:text-pink-400 hover:bg-pink-500 hover:text-white dark:hover:text-black"
          >
            ✉️ Email
          </a>
          <a
            id="contact-itch"
            href="https://lucs-blanger.itch.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button bg-surface/60 border-red-500 text-red-600 dark:border-red-400 dark:text-red-400 hover:bg-red-500 hover:text-white dark:hover:text-black"
          >
            <FaItchIo className="text-xl" />
            Itch.io
          </a>
        </div>

        <form
          action="https://formspree.io/f/mdkdnrll"
          method="POST"
          className="flex flex-col mt-10 gap-6 max-w-3xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row gap-6">
            <input
              id="contact-name"
              type="text"
              name="name"
              required
              placeholder={t("place_name")}
              className="input-field flex-1"
            />
            <input
              id="contact-email-input"
              type="email"
              name="email"
              required
              placeholder="Email *"
              className="input-field flex-1"
            />
          </div>
          <textarea
            id="contact-message"
            name="message"
            rows={6}
            required
            placeholder={t("place_message")}
            className="input-field w-full"
          />
          <button
            id="contact-submit"
            type="submit"
            className="self-end px-6 py-3 bg-accent text-accent-fg font-semibold rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-8px_rgb(var(--c-glow)/0.7)]"
          >
            {t("send")} <FaEnvelope className="inline ml-2" />
          </button>
        </form>
      </div>
    </section>
  );
}
