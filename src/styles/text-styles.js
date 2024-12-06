import { defineTextStyles } from "@pandacss/dev"

export const textStyles = defineTextStyles({
  headerAndFooter: {
    description: "Header & footer text style.",
    value: {
      fontFamily: "Noto Sans Variable, sans-serif",
      fontWeight: "400",
      fontSize: ["18px"],
    },
  },
  graySmallLabel: {
    description: "Labels text style.",
    value: {
      fontFamily: "Noto Sans Variable, sans-serif",
      fontWeight: "400",
      fontSize: ["16px"],
      color: "gray.400",
    },
  },
  h1Title: {
    description: "h1 title style.",
    value: {
      fontFamily: "Roboto Serif Variable, serif",
      fontWeight: "700",
      fontSize: ["30px"],
    },
  },
  body: {
    description: "Body text style.",
    value: {
      fontFamily: "Noto Sans Variable, sans-serif",
      fontWeight: "400",
      fontSize: ["20px"],
      "& h2": {
        fontSize: ["26px"],
        fontWeight: "600",
        mb: "20px",
      },
      "& h3": {
        fontSize: ["24px"],
        fontWeight: "500",
        mb: "20px",
      },
      "& p": { "&:not(&:last-child)": { mb: "20px" } },
    },
  },
})
