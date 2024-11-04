import { defineConfig } from "@pandacss/dev"
import { textStyles } from "./src/styles/text-styles"
import { layerStyles } from "./src/styles/layer-styles"

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
      textStyles,
      layerStyles,
      tokens: {
        sizes: {
          headerHeight: { value: "60px" },
        },
        spacing: {},
        borderWidths: {
          themeSelectorArrowWidth: { value: "0.3rem" },
        },
      },
      semanticTokens: {
        assets: {
          logo: {
            value: {
              _light: "url(/images/layout/logo-light-theme.png)",
              _dark: "url(/images/layout/logo-dark-theme.png)",
            },
          },
        },
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
