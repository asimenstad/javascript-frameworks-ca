import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
  --color-black: #000;
  --color-white: #fff;
  --color-lightGray: #eeeff1;
  --color-red: #D12121;
  --color-muted: #949494;
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
  position: relative;
  margin: auto;
  padding: 0 20px;
  max-width: 1000px;
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
  font-family: var(--font-primary);
  font-weight: 400;
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

input, textarea{
  border: none;
  border-radius: 0.1rem;
  padding: 0.4rem;
}

input[type=search], select{
  background-color: var(--color-lightGray);
  border: none;
  border-radius: 1rem;
  padding: 0.4rem 1rem;
  position: relative;
}
select{
  border-right: 0.8rem solid transparent;
}
.hidden{
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
`;

export default GlobalStyle;
