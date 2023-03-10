import React from "react";
import { Image } from "./Card.styled";

function Card(props) {
  return (
    <div>
      <Image src={props.imageUrl} alt={props.title} />
      <div>
        <h2>{props.title}</h2>
        <p>{props.price}</p>
      </div>
      <button>Add to cart</button>
    </div>
  );
}

export default Card;
