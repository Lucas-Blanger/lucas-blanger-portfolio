import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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

      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col space-y-4">
            <li>
              <a
                href="#about"
                className="hover:text-green-200 text-green-600 text-lg"
                onClick={() => setIsOpen(false)}
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-green-200 text-green-600 text-lg"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-green-200 text-green-600 text-lg"
                onClick={() => setIsOpen(false)}
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-green-200 text-green-600 text-lg"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
