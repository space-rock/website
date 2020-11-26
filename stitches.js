import { createStyled } from "@stitches/react";

export const { styled, css } = createStyled({
  tokens: {
    colors: {
      white: "#fff",
      black: "#222",
    },
  },
  breakpoints: {
    bp1: (rule) => `@media (min-width: 480px) { ${rule} }`,
  },
});
