import { defineConfig, fontProviders } from "astro/config"
import metaTags from "astro-meta-tags"
import sitemap from "@astrojs/sitemap"
import aiRobotsTxt from "astro-ai-robots-txt"
import { unified } from "@astrojs/markdown-remark"
import remarkYoutube from "remark-youtube"

// https://astro.build/config
export default defineConfig({
  site: "https://dveras3.dauro-veras.workers.dev",
  integrations: [metaTags(), sitemap(), aiRobotsTxt()],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkYoutube],
    }),
  },
  vite: { server: { allowedHosts: ["macleod.local"] } },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Roboto Serif",
      cssVariable: "--font-roboto-serif",
      weights: [600, 700],
      fallbacks: ["serif"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Nunito Sans",
      cssVariable: "--font-nunito-sans",
      fallbacks: ["sans-serif"],
    },
  ],
})
