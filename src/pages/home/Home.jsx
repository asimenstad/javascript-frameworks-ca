import React, { useState } from "react";
import Products from "../../components/Products/Products";
import * as S from "./Home.styles";
import Search from "../../components/Search/Search";

function Home() {
  const [searchInput, setSearchInput] = useState("");
  function onInputChange(e) {
    e.preventDefault();
    setSearchInput(e.target.value);
  }

  return (
    <S.Main>
      <h1>Our Products</h1>
      <S.Section>
        <Search onInputChange={onInputChange} searchInput={searchInput}></Search>
        <div>
          <div>Filter</div>
          <div>Sort</div>
        </div>
      </S.Section>
      <Products searchInput={searchInput}></Products>
    </S.Main>
  );
}

export default Home;
