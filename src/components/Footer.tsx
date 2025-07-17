import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative bg-gray-900 text-white text-center pt-16 pb-8 mt-[-1px]">
      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 z-20">
        <img src="src/assets/wolfwalk.png" alt="Lobo" className="w-24 h-auto" />
      </div>

      <div className="absolute -top-16 left-10 z-10">
        <img
          src="src/assets/tree.png"
          alt="Árvore esquerda"
          className="w-20 h-auto"
        />
      </div>

      <div className="absolute -top-16 right-10 z-10">
        <img
          src="src/assets/tree.png"
          alt="Árvore direita"
          className="w-20 h-auto"
        />
      </div>

      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 90"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.39,22.66,102.53,29.26,158.23,17.51C270.89,43.35,316.55,1.11,393.74,0.64
          c67.26-.41,123.55,35.96,186.36,39.33,63.92,3.41,120.3-31.87,186.22-32.13,57.28-.23,98.89,27.21,146.51,43.52
          C977.49,77.74,1043,74.74,1100,57.05V0Z"
            className="fill-green-400"
          ></path>
        </svg>
      </div>

      <div className="relative z-10">
        <p className="text-sm text-gray-400 tracking-wide">
          © {new Date().getFullYear()} {t("f_footer")}
          <span className="text-green-400 font-semibold"> Lucas Blanger </span>
          {t("s_footer")}
        </p>
      </div>
    </footer>
  );
}
