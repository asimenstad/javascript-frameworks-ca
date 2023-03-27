import styled from "styled-components";

export const Main = styled.main`
  max-width: 700px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${(props) => props.theme.color.lightGray};
  border-radius: 0.1rem;
  padding: 30px;
  > div {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }
`;
