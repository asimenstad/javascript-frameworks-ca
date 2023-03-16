import styled from "styled-components";

export const Image = styled.img`
  aspect-ratio: 4 / 5;
  object-fit: cover;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  > * {
    font-size: 1rem;
    margin: 0;
  }
  > h2 {
    font-family: ${(props) => props.theme.font.secondary};
    font-weight: 500;
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const DiscountedPrice = styled.p`
  color: ${(props) => props.theme.color.red};
`;

export const Price = styled.p`
  text-decoration: line-through;
  color: ${(props) => props.theme.color.muted};
`;
