import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function ArticlesPage() {
  const { t } = useTranslation();

  const articles = [
    {
      id: 1,
      title: "title_1",
      desc: "desc_1",
      pdf: "/Bancos de Dados a Serviço da Sustentabilidade_ Monitoramento e Redução de Impactos Ambientais por Meio da Tecnologia.pdf",
    },
    {
      id: 2,
      title: "title_2",
      desc: "desc_2",
      pdf: "/DESENVOLVIMENTO E VALIDAÇÃO DE UM JOGO DIGITAL PARA O ENSINO DE ASTRONOMIA NAS SÉRIES FINAIS DO ENSINO FUNDAMENTAL.pdf",
    },
    {
      id: 3,
      title: "title_3",
      desc: "desc_3",
      pdf: "/DESENVOLVIMENTO E IMPLEMENTAÇÃO DE JOGOS CLÁSSICOS NO ARDUINO UNO.pdf",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 px-4 py-20 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-green-400 mb-6 text-center">
          {t("my_articles") || "Meus Artigos"}
        </h2>
        <p className="text-center mb-12 text-lg text-gray-300">
          {t("articles_desc") ||
            "Aqui estão alguns artigos sobre minha experiência, estudos e dicas na área de tecnologia."}
        </p>

        <div className="grid sm:grid-cols-2 gap-8 mb-12">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-gray-800 rounded-2xl p-6 shadow-lg ring-1 ring-green-500/30 hover:ring-green-400/80 transition"
            >
              <h3 className="text-2xl font-semibold text-green-300 mb-2">
                {t(article.title)}
              </h3>
              <p className="text-gray-300 mb-4">{t(article.desc)}</p>
              <a
                href={article.pdf}
                download
                className="inline-block px-4 py-2 border border-green-400 rounded-lg text-green-400 hover:bg-green-400 hover:text-black transition"
              >
                {t("read_more") || "Leia mais"}
              </a>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 border border-green-400 rounded-lg text-green-400 hover:bg-green-400 hover:text-black transition"
          >
            ⬅️ {t("back_home") || "Voltar"}
          </Link>
        </div>
      </div>
    </section>
  );
}
