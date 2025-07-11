export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-white">
      <h2 className="text-4xl md:text-6xl font-bold mb-4">Olá, sou Lucas</h2>
      <p className="text-lg md:text-2xl text-gray-600 max-w-xl text-center">
        Desenvolvedor Full Stack focado em React, Node.js e soluções criativas
        para web.
      </p>
      <a
        href="#projects"
        className="mt-8 px-6 py-3 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition"
      >
        Veja meus projetos
      </a>
    </section>
  );
}
