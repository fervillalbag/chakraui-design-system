import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      50: "#f7fafc",
      900: "#171923",
    },
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Georgia, serif",
    mono: "Menlo, monospace",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "3rem",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
  },
  breakpoints: {
    sm: "30em",
    md: "48em",
    "4xl": "200em",
  },
  spacing: {
    // space: { 10: "10rem" },
    xl: "10rem",
  },
  borderRadius: {
    radii: {
      lg: "5rem",
    },
    // lg: "5rem",
  },
});

export default theme;
