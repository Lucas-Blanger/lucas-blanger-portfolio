import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "es2020",
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // Split rarely-changing libraries into their own long-cacheable chunks,
        // so a content change only invalidates the small app chunk.
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (/[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/.test(id))
            return "react";
          if (id.includes("react-router")) return "router";
          if (id.includes("i18next")) return "i18n";
          if (id.includes("react-icons") || id.includes("lucide-react"))
            return "icons";
        },
      },
    },
  },
});
