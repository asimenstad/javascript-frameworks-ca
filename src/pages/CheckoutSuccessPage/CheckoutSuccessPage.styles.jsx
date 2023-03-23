import { Link } from "react-router-dom";
import styled from "styled-components";

export const Main = styled.main`
  padding: 50px 20px;
  text-align: center;
  > p {
    margin: auto;
    margin-bottom: 40px;
    max-width: 450px;
  }
`;

export const StyledLink = styled(Link)`
  background-color: ${(props) => props.theme.color.black};
  color: ${(props) => props.theme.color.white};
  border-radius: 1rem;
  padding: 0.4rem 1.5rem;
  transition: 0.15s ease-in-out;
  text-transform: uppercase;
  :hover {
    background-color: ${(props) => props.theme.color.pink};
  }
`;
