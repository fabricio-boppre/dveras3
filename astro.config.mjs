import { defineConfig } from "astro/config"

import metaTags from "astro-meta-tags";

import pageInsight from "astro-page-insight";

// https://astro.build/config
export default defineConfig({
  site: "https://v3.dauroveras.com.br",
  integrations: [metaTags(), pageInsight()],
})