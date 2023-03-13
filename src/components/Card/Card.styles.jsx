import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border-radius: 0.1rem;
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  color: #000;
  > * {
    font-size: 1rem;
  }
`;
