import { css } from "../stitches";

const beat = css.keyframes({
  "0%": { transform: "scale(1)" },
  "30%": { transform: "scale(0.75)" },
  "60%": { transform: "scale(1)" },
});

const styles = {
  wrapper: css({
    backgroundColor: "$white",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),
  logo: css({
    width: "min(max(50vw, 50vw), 50vh)",
    height: "min(max(50vw, 50vw), 50vh)",
    maxWidth: "180px",
    animation: `${beat} .6s linear infinite`,
    transformOrigin: "center",
  }),
};

export default styles;
