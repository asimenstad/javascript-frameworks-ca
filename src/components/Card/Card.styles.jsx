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

export const Button = styled.button`
  background-color: #000;
  color: #eeeff1;
  border: none;
  border-radius: 1rem;
  padding: 0.4rem 1rem;
  cursor: pointer;
  margin-left: auto;
`;
