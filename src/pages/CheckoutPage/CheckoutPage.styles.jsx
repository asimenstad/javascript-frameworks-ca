import styled from "styled-components";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

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
  > div {
    > h3 {
      font-size: 1rem;
      font-weight: 500;
    }
  }
`;

export const DiscountedPrice = styled.p`
  margin: 0;
  color: ${(props) => props.theme.color.red};
`;

export const Price = styled.p`
  margin: 0;
  text-decoration: line-through;
  color: ${(props) => props.theme.color.muted};
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: ${(props) => props.theme.color.muted};
  > button {
    width: 1.5rem;
    height: 1.5rem;
    padding: 0;
    background-color: ${(props) => props.theme.color.lightGray};
    :hover {
      background-color: ${(props) => props.theme.color.lightGray};
    }
  }
`;

export const MinusButton = styled(AiOutlineMinusCircle)`
  color: ${(props) => props.theme.color.muted};
  font-size: 1.5rem;
  transition: 0.15s ease-in-out;
  :hover {
    color: ${(props) => props.theme.color.pink};
  }
`;

export const PlusButton = styled(AiOutlinePlusCircle)`
  color: ${(props) => props.theme.color.muted};
  font-size: 1.5rem;
  transition: 0.15s ease-in-out;
  :hover {
    color: ${(props) => props.theme.color.pink};
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

export const EmptyCart = styled.div`
  margin: auto;
  text-align: center;
`;

export const BackToShopLink = styled(Link)`
  background-color: ${(props) => props.theme.color.black};
  color: ${(props) => props.theme.color.white};
  border-radius: 1rem;
  padding: 0.4rem 1.5rem;
  transition: 0.15s ease-in-out;
  text-transform: uppercase;
  :hover {
    background-color: ${(props) => props.theme.color.pink};
  }
`;
