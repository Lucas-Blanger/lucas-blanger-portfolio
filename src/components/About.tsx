import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-900 px-4 py-16"
    >
      <div className="bg-green-900/50 backdrop-blur-sm rounded-3xl shadow-lg max-w-6xl mx-auto p-10 text-center border border-green-500/30">
        <h2 className="text-4xl md:text-5xl font-bold text-green-300 mb-4 uppercase tracking-wide">
          Sobre Mim
        </h2>
        <div className="h-1 w-14 bg-green-400 mx-auto mb-8 rounded"></div>

        <p className="text-gray-200 text-xl leading-relaxed text-justify tracking-wide">
          Comecei a usar o computador com apenas 4 anos, influenciado pelo meu
          irmão, inicialmente jogando. Aos 14 anos, fui apresentado ao mundo da
          programação, o que despertou minha paixão pela área. Aos 15, ingressei
          no curso Técnico em Informática integrado ao Ensino Médio no Instituto
          Federal do Rio Grande do Sul - Campus Erechim, onde tive meus
          primeiros contatos acadêmicos com desenvolvimento de software.
          Atualmente, sou graduando em Ciência da Computação pela Universidade
          Regional Integrada do Alto Uruguai e das Missões (URI - Erechim).
          Durante minha trajetória, trabalhei em projetos utilizando diversas
          tecnologias, como Java, Web (HTML, CSS, JavaScript, Node.js), Flutter,
          C/C++, Python e desenvolvimento de jogos, além de experiência com
          Sistemas ERP e projetos autorais, com um foco maior em desenvolvimento
          back-end. Tenho grande facilidade para aprender e me adaptar a novas
          tecnologias, além de entusiasmo e dedicação para encarar novos
          desafios, contribuir com equipes e sempre buscar evolução constante
          como profissional e pessoa.
        </p>
      </div>
      <a
        href="public/LucasBlanger.pdf"
        download
        className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-green-600/50 text-white font-semibold rounded-full shadow-md hover:bg-green-600 transition duration-300"
      >
        <ArrowDownTrayIcon className="h-5 w-5" />
        Baixar Currículo
      </a>
    </section>
  );
}
