import styled from "styled-components";

export const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 30px 10px;
  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
