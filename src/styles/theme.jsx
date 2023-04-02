import { ThemeProvider } from "styled-components";

const theme = {
  color: {
    black: "var(--color-black)",
    white: "var(--color-white)",
    lightGray: "var(--color-lightGray)",
    red: "var(--color-red)",
    muted: "var(--color-muted)",
    pink: "var(--color-pink)",
    pinkTransparentDark: "var(--color-pinkTransparentDark)",
    pinkTransparentLight: "var(--color-pinkTransparentLight)",
  },
  font: {
    primary: "var(--font-primary)",
    secondary: "var(--font-secondary)",
  },
};

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
