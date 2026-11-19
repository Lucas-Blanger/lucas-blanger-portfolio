import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import AnimatedBackground from "@/components/AnimatedBackground";
import ThemeToggle from "@/components/ThemeToggle";

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
    {
      id: 4,
      title: "title_4",
      desc: "desc_4",
      pdf: "/Desenvolvimento_de_uma_Plataforma_de_E_commerce_para_Artigos_de_Churrasco_Integrada_a_uma_API_REST.pdf",
    },
    {
      id: 5,
      title: "title_5",
      desc: "desc_5",
      pdf: "/Time_Forge-Um_Sistema_Para_Geração_Automática_De_Grades_Horárias_Em_Instituições_De_Ensino_Usando_Uma_Abordagem_Híbrida_Com_Constraint_Satisfaction_Problem_Backtracking_E_First_Fit_Decreasing.pdf",
    },
    {
      id: 6,
      title: "title_6",
      desc: "desc_6",
      pdf: "/O_Problema_de_Josephus__Análise_e_Soluções_sob_Diferentes_Paradigmas.pdf",
    },
  ];

  return (
    <section className="relative min-h-screen px-4 py-20 text-fg">
      <AnimatedBackground />
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <h1 className="section-title text-5xl">
            {t("my_articles") || "Meus Artigos"}
          </h1>
        </div>
        <p className="text-center mb-12 text-lg text-muted">
          {t("articles_desc") ||
            "Aqui estão alguns artigos sobre minha experiência, estudos e dicas na área de tecnologia."}
        </p>

        <div className="grid sm:grid-cols-2 gap-8 mb-12">
          {articles.map((article) => (
            <div
              key={article.id}
              className="card card-hover flex flex-col p-6"
            >
              <h2 className="text-2xl font-semibold text-accent mb-2">
                {t(article.title)}
              </h2>
              <p className="text-muted mb-4 flex-1">{t(article.desc)}</p>
              <a
                href={article.pdf}
                download
                className="self-start inline-block px-4 py-2 border border-accent rounded-lg text-accent hover:bg-accent hover:text-accent-fg transition"
              >
                {t("read_more") || "Leia mais"}
              </a>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            id="back-home"
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 border border-accent rounded-lg text-accent hover:bg-accent hover:text-accent-fg transition"
          >
            {t("back_home") || "Voltar"}
          </Link>
        </div>
      </div>
    </section>
  );
}
