import styled from "styled-components";

export const Discount = styled.p`
  background-color: ${(props) => props.theme.color.red};
  color: ${(props) => props.theme.color.white};
  padding: 0.15rem 1rem;
  margin: auto;
  border-radius: 0.1rem;
`;
