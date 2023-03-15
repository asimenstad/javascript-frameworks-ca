import styled from "styled-components";

export const Image = styled.img`
  aspect-ratio: 4 / 5;
  object-fit: cover;
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  > * {
    font-size: 1rem;
  }
  > h2 {
    font-family: ${(props) => props.theme.font.secondary};
    font-weight: 500;
  }
`;
