import React from "react";
import { useParams } from "react-router-dom";
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
          <S.StyledLink to="/">Home</S.StyledLink>
        </li>
        <li>/</li>
        <li>{title}</li>
      </S.Breadcrumb>
      <S.Section>
        <div>
          <h1>{title}</h1>
          {price === discountedPrice ? (
            <p>{price}</p>
          ) : (
            <div>
              <p>{discountedPrice}</p>
              <p>{price}</p>
            </div>
          )}
          <p>{rating}</p>
          <p>{description}</p>
          <div>
            <button>Add to cart</button>
          </div>
          <h2>Reviews</h2>
          {reviews && reviews.length > 0 ? (
            reviews.map((review) => (
              <div key={review.id}>
                <h3>{review.username}</h3>
                <p>{review.description}</p>
                <p>{review.rating}</p>
              </div>
            ))
          ) : (
            <div>No reviews</div>
          )}
        </div>
        <div>
          <S.Image src={imageUrl} alt={title} />
        </div>
      </S.Section>
    </main>
  );
}

export default ProductPage;
