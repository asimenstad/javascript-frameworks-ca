import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

/**
 * Star rating component.
 * @component
 * @param {number} props - Product rating.
 * @returns - Star rating.
 */
function Rating(props) {
  const totalStars = 5;
  const filledStars = Math.floor(props.rating);

  return (
    <div>
      {[...new Array(totalStars)].map((arr, index) => {
        return index < filledStars ? <AiFillStar key={index} /> : <AiOutlineStar key={index} />;
      })}
    </div>
  );
}

export default Rating;
