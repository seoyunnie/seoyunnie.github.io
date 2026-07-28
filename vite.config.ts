import path from "node:path";

import babel from "@rolldown/plugin-babel";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { ViteImageOptimizer as imageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
    },
  },

  plugins: [
    tanstackRouter({
      target: "react",
      quoteStyle: "double",
      generatedRouteTree: "./src/route-tree.gen.ts",
      autoCodeSplitting: true,
    }),
    react(),
    babel({
      presets: [reactCompilerPreset()],
    }),

    imageOptimizer(),
  ],
});
