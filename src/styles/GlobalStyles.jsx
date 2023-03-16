import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
  --color-black: #000;
  --color-white: #fff;
  --color-lightGray: #eeeff1;
  --color-red: #D12121;
  --color-muted: #4f4f4f;
  --color-pink: #CC3B89;
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
  background-color: var(--color-black);
  color: var(--color-white);
  font-family: var(--font-secondary);
  text-transform: uppercase;
  border: none;
  border-radius: 1rem;
  padding: 0.4rem 1.5rem;
  cursor: pointer;
  margin-left: auto;
  transition: 0.15s ease-in-out;
  :hover{
    background-color: var(--color-pink);
  }
}
`;

export default GlobalStyle;
