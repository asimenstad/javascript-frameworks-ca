import React from "react";
import { useStore } from "../../hooks/useStore.jsx";
import * as S from "./CartDropdown.styles.jsx";

function CartDropdown(props) {
  const cart = useStore((state) => state.cart);
  return (
    <S.Container isActive={props.isActive}>
      {cart.map(({ data, quantity }) => (
        <S.Product key={data.id}>
          <S.Thumbnail src={data.imageUrl} alt={data.title} />
          <S.ProductInfo>
            <h2>{data.title}</h2>
            <p>{data.discountedPrice} KR</p>
            <p>Quantity: {quantity}</p>
          </S.ProductInfo>
        </S.Product>
      ))}
    </S.Container>
  );
}

export default CartDropdown;
