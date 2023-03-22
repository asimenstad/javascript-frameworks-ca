import React from "react";
import { useStore } from "../../hooks/useStore";
import * as S from "./Cart.styles";

function Cart() {
  const cart = useStore((state) => state.cart);
  return (
    <S.IconWrapper>
      <S.Count>{cart.length}</S.Count>
      <S.Icon></S.Icon>
    </S.IconWrapper>
  );
}

export default Cart;
