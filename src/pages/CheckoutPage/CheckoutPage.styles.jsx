import styled from "styled-components";

export const CartWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 40px;
  > div {
    background-color: ${(props) => props.theme.color.lightGray};
    padding: 30px;
    border-radius: 0.1rem;
  }
  @media screen and (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
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
`;

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CartItem = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
`;

export const CartItemImg = styled.img`
  max-width: 100px;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  position: relative;
`;

export const CartItemInfo = styled.div`
  display: flex;
  gap: 10px;
  > h3 {
    font-size: 1rem;
  }
`;

export const RemoveItemButton = styled.button`
  padding: 0;
  color: ${(props) => props.theme.color.muted};
  font-size: 0.8rem;
  background-color: transparent;
  :hover {
    background-color: transparent;
    color: ${(props) => props.theme.color.black};
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
