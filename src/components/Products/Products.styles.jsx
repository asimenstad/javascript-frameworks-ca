import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 40px 20px;
  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;
