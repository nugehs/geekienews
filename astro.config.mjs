// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import sitemap from "@astrojs/sitemap";
import keystatic from "@keystatic/astro";
import tailwindcss from "@tailwindcss/vite";

const cmsEnabled = process.env.KEYSTATIC_CMS !== "0";
const projectBase = process.env.GITHUB_PAGES_PROJECT === "true";

// Project page: nugehs.github.io/geekienews
// Custom domain: geekienews.com (set GITHUB_PAGES_PROJECT=false in workflow)
export default defineConfig({
  site: projectBase ? "https://nugehs.github.io" : "https://geekienews.com",
  base: projectBase ? "/geekienews/" : "/",
  trailingSlash: "always",
  integrations: [
    react(),
    markdoc(),
    sitemap(),
    ...(cmsEnabled ? [keystatic()] : []),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
