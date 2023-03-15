import React from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../../components/Rating/Rating";
import useApi from "../../hooks/useApi";
import * as S from "./ProductPage.styles";

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
  console.log(data);
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
            <S.Div>
              <p>{price} KR</p>
            </S.Div>
          ) : (
            <S.Div>
              <S.DiscountedPrice>{discountedPrice} KR</S.DiscountedPrice>
              <S.Price>{price} KR</S.Price>
            </S.Div>
          )}
          <p>{description}</p>
          <div>
            <button>Add to cart</button>
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
