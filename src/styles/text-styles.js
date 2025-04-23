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
      "& p, ul, blockquote": { "&:not(&:last-child)": { mb: "20px" } },
      "& ul": { li: { listStyle: "inside" } },
      "& img + em": { fontSize: "16px" },
      "& a": { textDecoration: "underline" },
      "& blockquote": {
        fontStyle: "italic",
        position: "relative",
        bgColor: "footerBg",
        p: ["20px 20px 20px 45px", "20px 20px 20px 60px"],
        "&::before": {
          fontFamily: "serif",
          content: "open-quote",
          position: "absolute",
          fontSize: ["3.5em", "4em"],
          left: "10px",
          top: ["3px", "-5px"],
          color: "gray.500",
        },
      },
    },
  },
})
