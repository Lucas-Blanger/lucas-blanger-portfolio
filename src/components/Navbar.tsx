export default function Navbar() {
  return (
    <nav className="bg-black shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-600">Lucas Blanger</h1>
        <ul className="flex space-x-6">
          <li>
            <a
              href="#about"
              className="hover:text-green-200 text-green-600 text-xl"
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-green-200 text-green-600 text-xl"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-green-200 text-green-600 text-xl"
            >
              Projetos
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-green-200 text-green-600 text-xl"
            >
              Contato
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
