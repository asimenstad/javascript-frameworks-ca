import styled from "styled-components";

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(4, auto);
  gap: 40px;
  > div {
    background-color: ${(props) => props.theme.color.lightGray};
    border-radius: 0.1rem;
    padding: 30px;
    > h2 {
      font-size: 1.2rem;
      margin: 0;
    }
  }

  @media screen and (min-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const CartItems = styled.div`
  @media screen and (min-width: 750px) {
    grid-row: span 4;
  }
`;

export const DeliveryInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  > div {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }
`;

export const RadioDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  > div {
    display: flex;
    flex-direction: row-reverse;
    justify-content: start;
    > label {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
`;
