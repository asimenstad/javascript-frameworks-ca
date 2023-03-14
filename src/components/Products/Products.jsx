import React from "react";
import Card from "../Product/Product";
import * as S from "./Products.styles";
import useApi from "../../hooks/useApi";

function Products(props) {
  const { data, isLoading, isError } = useApi("https://api.noroff.dev/api/v1/online-shop");

  if (isLoading) {
    return <div>Loading</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  const filteredProducts = data.filter((product) => {
    return props.searchInput === "" ? product : product.title.toLowerCase().includes(props.searchInput.toLowerCase());
  });

  return (
    <S.ProductsWrapper>
      {filteredProducts.map((product) => (
        <S.StyledLink to={product.id} key={product.id}>
          <Card imageUrl={product.imageUrl} title={product.title} price={product.price}></Card>
        </S.StyledLink>
      ))}
    </S.ProductsWrapper>
  );
}

export default Products;
