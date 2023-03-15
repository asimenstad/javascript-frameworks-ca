import React from "react";
import * as S from "./Product.styles";

function Card(props) {
  return (
    <div>
      <S.Image src={props.imageUrl} alt={props.title} />
      <S.Div>
        <h2>{props.title}</h2>
        <p>{props.price}</p>
      </S.Div>
      <button>View Product</button>
    </div>
  );
}

export default Card;
