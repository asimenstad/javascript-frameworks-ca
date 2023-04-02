import React from "react";
import * as S from "./Products.styles";
import useApi from "../../hooks/useApi.jsx";
import { Link } from "react-router-dom";
import Product from "../Product/Product.jsx";

/**
 * Component for displaying list of products, search bar and sort.
 * @component
 * @param {string} props - Search and sort useState.
 * @returns - Search bar, sort and list of products.
 */
function Products(props) {
  const { data, isLoading, isError } = useApi("https://api.noroff.dev/api/v1/online-shop");

  if (isLoading) {
    return <div>Loading</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  const filteredProducts = [...data].filter((product) => {
    return props.searchInput === "" ? product : product.title.toLowerCase().includes(props.searchInput.toLowerCase());
  });

  let products = filteredProducts;

  /*
  if (props.sortOption === "newest" || props.sortOption === "") {
    return (products = [...filteredProducts].sort((a, b) => a - b));
  } else if (props.sortOption === "lowest") {
    return (products = [...filteredProducts].sort((a, b) => a.discountedPrice - b.discountedPrice));
  } else if (props.sortOption === "highest") {
    return (products = [...filteredProducts].sort((a, b) => b.discountedPrice - a.discountedPrice));
  }
  */

  return (
    <S.ProductsWrapper>
      {products.map((product) => (
        <Link to={product.id} key={product.id}>
          <Product
            imageUrl={product.imageUrl}
            title={product.title}
            price={product.price}
            discountedPrice={product.discountedPrice}></Product>
        </Link>
      ))}
    </S.ProductsWrapper>
  );
}

export default Products;
