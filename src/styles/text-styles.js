import { defineTextStyles } from "@pandacss/dev"

export const textStyles = defineTextStyles({
  headerAndFooter: {
    description: "Header & footer text style.",
    value: {
      fontFamily: "Verdana, sans-serif",
      fontWeight: "400",
      fontSize: ["18px"],
    },
  },
})
