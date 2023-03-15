import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
--color-lightGray: #eeeff1;
}
body {
  margin: 0;
  padding: 0;
}
main {
  margin: auto;
  padding: 20px;
  max-width: 1200px;
}
`;

export default GlobalStyle;
