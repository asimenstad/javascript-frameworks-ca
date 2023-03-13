import React from "react";
import Products from "../../components/Products/Products";
import * as S from "./Home.styles";

function Home() {
  return (
    <S.Main>
      <h1>Our Products</h1>
      <Products></Products>
    </S.Main>
  );
}

export default Home;
