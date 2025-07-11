export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-10">Projetos</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded shadow p-4">
            <h4 className="text-xl font-bold mb-2">Projeto 1</h4>
            <p className="text-gray-600 mb-4">Descrição breve do projeto.</p>
            <a href="#" className="text-blue-500 hover:underline">
              Ver mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
