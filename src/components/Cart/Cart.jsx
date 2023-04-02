import React from "react";
import { useStore } from "../../hooks/useStore.jsx";
import * as S from "./Cart.styles.jsx";

/**
 * Cart icon component that displays the number of items in cart.
 * @component
 * @returns Cart with amount of products.
 */
function Cart() {
  const cart = useStore((state) => state.cart);
  const quantity = cart.map(({ quantity }) => quantity);
  const amount = quantity.reduce((a, b) => {
    return a + b;
  }, 0);
  return (
    <S.IconWrapper>
      <S.Count>{amount}</S.Count>
      <S.Icon></S.Icon>
    </S.IconWrapper>
  );
}

export default Cart;
