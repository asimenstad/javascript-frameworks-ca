import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function Rating(props) {
  const totalStars = 5;
  const filledStars = props.rating;

  return (
    <div>
      {[...new Array(totalStars)].map((arr, index) => {
        return index < filledStars ? <AiFillStar key={index} /> : <AiOutlineStar key={index} />;
      })}
    </div>
  );
}

export default Rating;
