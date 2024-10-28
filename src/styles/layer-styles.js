import { defineLayerStyles } from "@pandacss/dev"

export const layerStyles = defineLayerStyles({
  themeSelectorBeforeAfterStyles: {
    description: "(...)",
    value: {
      position: "absolute",
      content: '""',
      right: "15px",
      pointerEvents: "none",
      borderLeftStyle: "solid",
      borderLeftColor: "transparent",
      borderLeftWidth: "themeSelectorArrowWidth",
      borderRightStyle: "solid",
      borderRightColor: "transparent",
      borderRightWidth: "themeSelectorArrowWidth",
    },
  },
})
