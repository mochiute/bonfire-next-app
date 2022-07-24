import {
  mauveDark,
  tomatoDark,
  crimsonDark,
  pinkDark,
  plumDark,
  purpleDark,
  violetDark,
} from "@radix-ui/colors";

import { createStitches } from "@stitches/react";

export const { styled, css, globalCss } = createStitches({
  theme: {
    colors: {
      ...tomatoDark,
      ...crimsonDark,
      ...pinkDark,
      ...plumDark,
      ...purpleDark,
      ...mauveDark,
      ...violetDark,

      background1: "$mauve1",
      backgroundUI1: "$mauve3",

      font1: "$mauve12",
      font2: "$mauve11",

      border1: "$mauve7",
    },
    space: {
      1: "5px",
      2: "10px",
      3: "15px",
    },
    fontSizes: {
      12: "0.75rem",
      14: "0.875rem",
      16: "1rem",
      18: "1.125rem",
      20: "1.25rem",
      24: "1.5rem",
      36: "2rem",
      48: "3rem",
    },
    fonts: {
      untitled: "Untitled Sans, apple-system, sans-serif",
      mono: "Söhne Mono, menlo, monospace",
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
});
