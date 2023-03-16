import React from "react";
import * as S from "./Discount.styles";

function Discount(props) {
  const price = props.price;
  const discountedPrice = props.discountedPrice;
  const discount = price - discountedPrice;
  const percentage = (discount * 100) / price;

  return (
    <div>
      <S.P>{percentage.toFixed()}% </S.P>
    </div>
  );
}

export default Discount;
