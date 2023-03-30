import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CartDropdown from "../../components/CartDropdown/CartDropdown.jsx";
import Discount from "../../components/Discount/Discount.jsx";
import Rating from "../../components/Rating/Rating.jsx";
import useApi from "../../hooks/useApi.jsx";
import { useStore } from "../../hooks/useStore.jsx";
import * as S from "./ProductPage.styles.jsx";

function ProductPage(props) {
  let { id } = useParams();
  const { data, isLoading, isError } = useApi(`https://api.noroff.dev/api/v1/online-shop/${id}`);
  const { title, description, price, discountedPrice, rating, imageUrl, reviews } = data;

  const addToCart = useStore((state) => state.addToCart);
  const [isActive, setIsActive] = useState(false);

  function onAddToCart() {
    addToCart(data);
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
    }, 3000);
  }

  if (isLoading) {
    return <div>Loading</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  return (
    <main>
      <CartDropdown isActive={isActive}></CartDropdown>
      <S.Breadcrumb>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>/</li>
        <li>{title}</li>
      </S.Breadcrumb>
      <S.Section>
        <div>
          <h1>{title}</h1>
          {price === discountedPrice ? (
            <S.PriceWrapper>
              <p>{price} KR</p>
            </S.PriceWrapper>
          ) : (
            <S.Div>
              <S.PriceWrapper>
                <S.DiscountedPrice>{discountedPrice} KR</S.DiscountedPrice>
                <S.Price>{price} KR</S.Price>
              </S.PriceWrapper>
              <Discount price={price} discountedPrice={discountedPrice}></Discount>
            </S.Div>
          )}
          {reviews && reviews.length > 0 && (
            <S.RatingWrapper>
              {rating}
              <Rating rating={rating}></Rating>
            </S.RatingWrapper>
          )}
          <p>{description}</p>
          <div>
            <button onClick={onAddToCart}>Add to cart</button>
          </div>
          <S.Hr></S.Hr>
          <S.Reviews>
            <h2>Reviews {reviews && reviews.length > 0 && <span>({reviews.length})</span>}</h2>
            {reviews && reviews.length > 0 ? (
              reviews.map((review) => (
                <S.Review key={review.id}>
                  <h3>{review.username}</h3>
                  <p>{review.description}</p>
                  <S.RatingWrapper>
                    {review.rating}
                    <Rating rating={review.rating}></Rating>
                  </S.RatingWrapper>
                </S.Review>
              ))
            ) : (
              <div>No reviews</div>
            )}
          </S.Reviews>
        </div>
        <div>
          <S.Image src={imageUrl} alt={title} />
        </div>
      </S.Section>
    </main>
  );
}

export default ProductPage;
