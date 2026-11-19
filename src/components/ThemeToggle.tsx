import type { MouseEvent } from "react";
import { Moon, Sun } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/hooks/useTheme";

interface ThemeToggleProps {
  id?: string;
}

export default function ThemeToggle({ id = "theme-toggle" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const isDark = theme === "dark";
  const label = isDark ? t("theme_light") : t("theme_dark");

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    toggleTheme({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
  };

  return (
    <button
      id={id}
      type="button"
      onClick={handleClick}
      aria-label={label}
      title={label}
      className="group relative grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-line bg-surface/80 text-accent shadow-sm transition-all duration-300 hover:scale-110 hover:border-accent/60 hover:shadow-[0_0_16px_rgb(var(--c-glow)/0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
    >
      <Sun
        className={`absolute h-5 w-5 transition-all duration-500 ${
          isDark ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"
        }`}
      />
      <Moon
        className={`absolute h-5 w-5 transition-all duration-500 ${
          isDark ? "-rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
        }`}
      />
    </button>
  );
}
