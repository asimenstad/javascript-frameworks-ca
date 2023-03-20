import React from "react";
import { Link, useParams } from "react-router-dom";
import Discount from "../../components/Discount/Discount";
import Rating from "../../components/Rating/Rating";
import useApi from "../../hooks/useApi";
import * as S from "./ProductPage.styles";
import AddToCartButton from "../../components/AddToCartButton/AddToCartButton";

function ProductPage() {
  let { id } = useParams();
  const { data, isLoading, isError } = useApi(`https://api.noroff.dev/api/v1/online-shop/${id}`);

  if (isLoading) {
    return <div>Loading</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  const { title, description, price, discountedPrice, rating, imageUrl, reviews } = data;

  return (
    <main>
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
            <AddToCartButton product={data}></AddToCartButton>
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
