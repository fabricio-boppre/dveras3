import { defineTextStyles } from "@pandacss/dev"

export const textStyles = defineTextStyles({
  headerAndFooter: {
    description: "Header & footer text style.",
    value: {
      fontFamily: "Noto Sans Variable, sans-serif",
      fontWeight: "400",
      fontSize: ["16px", "17px"],
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
      fontSize: ["24px", "30px"],
    },
  },
  h2Title: {
    description: "h2 title style.",
    value: {
      fontFamily: "Roboto Serif Variable, serif",
      fontWeight: "600",
      fontSize: ["20px", "24px"],
    },
  },
  article: {
    description: "Body text style.",
    value: {
      fontFamily: "Noto Sans Variable, sans-serif",
      fontWeight: "400",
      fontSize: ["17px", "20px"],
      "& h2": {
        fontSize: ["20px", "24px"],
        fontWeight: "600",
        mb: "20px",
      },
      "& h3": {
        fontSize: ["18px", "22px"],
        fontWeight: "600",
        mb: "20px",
      },
      "& p, ul": { "&:not(&:last-child)": { mb: "20px" } },
      "& img + em": { fontSize: "16px" },
      "& a": { textDecoration: "underline" },
    },
  },
})
