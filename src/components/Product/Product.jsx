import React from "react";
import * as S from "./Product.styles.jsx";

function Product(props) {
  return (
    <div>
      <S.Image src={props.imageUrl} alt={props.title} />
      <S.Div>
        <h2>{props.title}</h2>
        {props.price === props.discountedPrice ? (
          <S.PriceWrapper>
            <p>{props.price} KR</p>
          </S.PriceWrapper>
        ) : (
          <S.PriceWrapper>
            <S.DiscountedPrice>{props.discountedPrice} KR</S.DiscountedPrice>
            <S.Price>{props.price} KR</S.Price>
          </S.PriceWrapper>
        )}
      </S.Div>
      <div>
        <button>View Product</button>
      </div>
    </div>
  );
}

export default Product;
