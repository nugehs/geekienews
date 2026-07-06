// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import sitemap from "@astrojs/sitemap";
import keystatic from "@keystatic/astro";
import tailwindcss from "@tailwindcss/vite";

const cmsEnabled = process.env.KEYSTATIC_CMS !== "0";

// https://geekienews.com — custom domain on GitHub Pages
export default defineConfig({
  site: "https://geekienews.com",
  base: "/",
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
