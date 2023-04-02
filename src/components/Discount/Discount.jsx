import React from "react";
import * as S from "./Discount.styles.jsx";

/**
 * Component for calculating and displaying percent of discount.
 * @component
 * @param {*} props - The price and discounted price of the product.
 * @returns - The discount percent.
 */
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
