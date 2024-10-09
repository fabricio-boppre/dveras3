import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/**/*.{ts,tsx,js,jsx,astro}",
    "./pages/**/*.{ts,tsx,js,jsx,astro}",
  ],

  // Files to exclude
  exclude: [],

  // Conditions to apply different styles and behaviors based on specific conditions or states
  conditions: {
    light: "[data-theme=light] &",
    dark: "[data-theme=dark] &",
  },

  // Useful for theme customization
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          mainBg: {
            value: {
              _light: "{colors.white}",
              _dark: "{colors.black}",
            },
          },
          basicText: {
            value: {
              _light: "{colors.black}",
              _dark: "{colors.white}",
            },
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
})
