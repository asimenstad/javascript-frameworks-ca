import React from "react";
import Products from "../../components/Products/Products";
import * as S from "./Home.styles";
import Search from "../../components/Search/Search";

function Home() {
  return (
    <S.Main>
      <h1>Our Products</h1>
      <S.Div>
        <Search></Search>
        <div>
          <div>Filter</div>
          <div>Sort</div>
        </div>
      </S.Div>
      <Products></Products>
    </S.Main>
  );
}

export default Home;
