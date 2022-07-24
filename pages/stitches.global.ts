import { globalCss } from "./stitches.config";

export const globalStyles = globalCss({
  html: {
    background: "$background1",
    fontFamily:
      "Poppins, Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif",
    fontWeight: "$regular",
  },

  "*": {
    margin: 0,
    padding: 0,
    outline: 0,

    boxSizing: "border-box",

    color: "$font2",

    "& p": {
      fontFamily:
        "Poppins, Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif",
      color: "$font2",
    },
    "& h1,h2,h3,h4,h5,h6": {
      fontFamily:
        "Poppins, Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif",
      fontWeight: "$medium",
      color: "$font1",
    },

    fontFamily:
      "Poppins, Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif",

    "input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill :active":
      {
        boxShadow: "0 0 0 30px $colors$background1 inset !important",
        border: "none",
      },

    a: {
      textDecoration: "none",
    },
  },

  "::-webkit-scrollbar": {
    width: "0.2vw",
    height: "0.5vh",
    borderRadius: "15px",
    backgroundColor: "$shadow",

    zIndex: 99999999,
  },
  "::-webkit-scrollbar-track": {
    backgroundColor: "$background2",
    borderRadius: "2px",

    zIndex: 99999999,
  },
  "::-webkit-scrollbar-thumb": {
    background: "$primary",
    borderRadius: "25px ",

    zIndex: 99999999,
  },

  "::-moz-selection": {
    background: "$gray8",
  },

  "::selection": {
    background: "$gray8",
  },
});
