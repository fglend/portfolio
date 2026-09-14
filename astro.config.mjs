import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://fglend.github.io",
  base: "/portfolio",
  vite: {
    plugins: [tailwindcss()],
  },
});
