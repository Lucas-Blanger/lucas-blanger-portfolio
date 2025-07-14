import { FaGithub, FaLinkedin, FaEnvelope, FaItchIo } from "react-icons/fa";

export default function Contato() {
  return (
    <section
      id="contato"
      className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-8 px-4 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-green-400 mb-4">
          Conecte-se comigo
        </h2>
        <p className="text-gray-300 text-lg mb-12">
          Dê uma olhada no que eu faço nas outras plataformas e entre em contato
          para colaborações, oportunidades ou apenas para trocar uma ideia!
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="https://github.com/Lucas-Blanger"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button border-green-400 text-green-400 hover:bg-green-500 hover:text-black"
          >
            <FaGithub className="text-xl" />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/lucas-blanger-4668a2210/"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-black"
          >
            <FaLinkedin className="text-xl" />
            LinkedIn
          </a>

          <a
            href="mailto:blangerlucas@gmail.com"
            className="neon-button border-pink-400 text-pink-400 hover:bg-pink-500 hover:text-black"
          >
            ✉️ Email
          </a>
          <a
            href="https://lucs-blanger.itch.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button border-red-400 text-red-400 hover:bg-red-500 hover:text-black"
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
              type="text"
              name="name"
              required
              placeholder="Seu Nome *"
              className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white outline-none border border-green-400/40 focus:ring-2 focus:ring-green-400"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email *"
              className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white outline-none border border-green-400/40 focus:ring-2 focus:ring-green-400"
            />
          </div>
          <textarea
            name="message"
            rows={6}
            required
            placeholder="Mensagem *"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white outline-none border border-green-400/40 focus:ring-2 focus:ring-green-400"
          />
          <button
            type="submit"
            className="self-end px-6 py-3 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition-all"
          >
            Enviar <FaEnvelope className="inline ml-2" />
          </button>
        </form>
      </div>
    </section>
  );
}
