import { defineTextStyles } from "@pandacss/dev"

export const textStyles = defineTextStyles({
  headerOptions: {
    description: "Header options text style.",
    value: {
      fontFamily: "Noto Sans Variable, sans-serif",
      fontWeight: "400",
      fontSize: ["18px", undefined, "20px"],
      lineHeight: "headerOptionsLineHeight",
    },
  },
})
