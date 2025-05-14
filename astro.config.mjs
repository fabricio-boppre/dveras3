import { defineConfig, fontProviders } from "astro/config"
import metaTags from "astro-meta-tags"
import pageInsight from "astro-page-insight"
import sitemap from "@astrojs/sitemap"
import aiRobotsTxt from "astro-ai-robots-txt"
import remarkYoutube from "remark-youtube"

// https://astro.build/config
export default defineConfig({
  site: "https://v3.dauroveras.com.br",
  integrations: [metaTags(), pageInsight(), sitemap(), aiRobotsTxt()],
  markdown: {
    remarkPlugins: [remarkYoutube],
  },
  vite: { server: { allowedHosts: ["macleod.local"] } },
  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: "Roboto Serif",
        cssVariable: "--font-roboto-serif",
        weights: ["600", "700"],
        fallbacks: ["serif"],
      },
      {
        provider: fontProviders.fontsource(),
        name: "Noto Sans",
        cssVariable: "--font-noto-sans",
        fallbacks: ["sans-serif"],
      },
    ],
  },
})
