import React from "react";
import * as S from "./Card.styles";

function Card(props) {
  return (
    <div>
      <S.Image src={props.imageUrl} alt={props.title} />
      <S.Div>
        <h2>{props.title}</h2>
        <p>{props.price}</p>
      </S.Div>
      <S.Button>View Product</S.Button>
    </div>
  );
}

export default Card;
