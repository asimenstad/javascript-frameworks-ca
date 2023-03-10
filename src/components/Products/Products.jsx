import React from "react";
import Card from "../Card/Card";
import { ProductsWrapper } from "./Products.styled";
import useApi from "../../hooks/useApi";
import { Link } from "react-router-dom";

function Products() {
  const { data, isLoading, isError } = useApi("https://api.noroff.dev/api/v1/online-shop");

  if (isLoading) {
    return <div>Loading</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <ProductsWrapper>
      {data.map((product) => (
        <Link to={product.id} key={product.id}>
          <Card imageUrl={product.imageUrl} title={product.title} price={product.price}></Card>
        </Link>
      ))}
    </ProductsWrapper>
  );
}

export default Products;
