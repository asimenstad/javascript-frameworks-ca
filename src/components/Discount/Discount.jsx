import React from "react";
import * as S from "./Discount.styles";

function Discount(props) {
  const price = props.price;
  const discountedPrice = props.discountedPrice;
  const discount = price - discountedPrice;
  const percentage = (discount * 100) / price;

  return (
    <div>
      <S.Discount>{percentage.toFixed()}% </S.Discount>
    </div>
  );
}

export default Discount;
