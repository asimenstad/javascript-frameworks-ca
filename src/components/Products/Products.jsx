import React from "react";
import Card from "../Card/Card";
import * as S from "./Products.styles";
import useApi from "../../hooks/useApi";

function Products() {
  const { data, isLoading, isError } = useApi("https://api.noroff.dev/api/v1/online-shop");

  if (isLoading) {
    return <div>Loading</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <S.ProductsWrapper>
      {data.map((product) => (
        <S.StyledLink to={product.id} key={product.id}>
          <Card imageUrl={product.imageUrl} title={product.title} price={product.price}></Card>
        </S.StyledLink>
      ))}
    </S.ProductsWrapper>
  );
}

export default Products;
