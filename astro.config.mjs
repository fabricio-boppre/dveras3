import { defineConfig } from "astro/config"

import metaTags from "astro-meta-tags"

import pageInsight from "astro-page-insight"

import sitemap from "@astrojs/sitemap"

import aiRobotsTxt from "astro-ai-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://v3.dauroveras.com.br",
  integrations: [metaTags(), pageInsight(), sitemap(), aiRobotsTxt()],
  vite: { server: { allowedHosts: ["macleod.local"] } },
})