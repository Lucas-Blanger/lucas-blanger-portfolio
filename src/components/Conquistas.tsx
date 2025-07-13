import { FaMedal, FaBullseye } from "react-icons/fa";

const conquistas = [
  {
    icon: <FaMedal className="text-yellow-400" />,
    texto: "9º Lugar na Maratona de Programação Seletiva da UFRGS 2024",
  },
  {
    icon: <FaBullseye className="text-pink-400" />,
    texto: "13º Lugar na Maratona Gaúcha de Programação 2024",
  },
  {
    icon: <FaMedal className="text-orange-400" />,
    texto: "10º Lugar na Maratona SBC Fase Zero 2025 - Rio Grande do Sul",
  },
];

export default function Conquistas() {
  return (
    <section
      id="conquistas"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20 px-4 text-white"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-green-400 mb-4">
          Conquistas
        </h2>
        <p className="text-center mb-12 text-lg text-gray-300">
          Alguns dos meus resultados em competições
        </p>

        <div className="flex flex-col gap-6">
          {conquistas.map((c, i) => (
            <div
              key={i}
              className="flex items-center gap-5 bg-gradient-to-r from-gray-800/60 to-gray-800/20 p-5 rounded-2xl ring-1 ring-green-400/30 shadow-xl 
                         hover:ring-green-400/70 transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm shadow-inner">
                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {c.icon}
                </div>
              </div>
              <p className="text-lg text-gray-100 font-medium leading-snug">
                {c.texto}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
