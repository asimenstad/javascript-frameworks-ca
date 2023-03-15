import { ThemeProvider } from "styled-components";

const theme = {
  color: {
    lightGray: "var(--color-lightGray)",
  },
};

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
