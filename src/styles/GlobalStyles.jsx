import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
  --color-primary: #000;
  --color-secondary: #eeeff1;
  --font-primary: 'Prata', serif;
  --font-secondary: 'Work Sans', sans-serif;
}
body {
  margin: 0;
  padding: 0;
  font-family: var(--font-secondary)
}
main {
  margin: auto;
  padding: 20px;
  max-width: 1200px;
  min-height: 100vh; 
}
li {
  list-style: none;
}
a{
  text-decoration: none;
  color: #000;
}
h1, h2{
  font-family: var(--font-primary)
}
img{
  width: 100%;
  border-radius: 0.1rem;
}
button{
  background-color: var(--color-primary);
  color: var(--color-secondary);
  font-family: var(--font-secondary);
  text-transform: uppercase;
  border: none;
  border-radius: 1rem;
  padding: 0.4rem 1rem;
  cursor: pointer;
  margin-left: auto;
}
`;

export default GlobalStyle;
