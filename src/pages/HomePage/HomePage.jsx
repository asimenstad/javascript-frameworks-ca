import React, { useState } from "react";
import Products from "../../components/Products/Products.jsx";
import * as S from "./HomePage.styles.jsx";
import Search from "../../components/Search/Search.jsx";
import Sort from "../../components/Sort/Sort.jsx";

function HomePage() {
  const [searchInput, setSearchInput] = useState("");
  const [sortOption, setSortOption] = useState("");

  function onInputChange(e) {
    e.preventDefault();
    setSearchInput(e.target.value);
  }

  function onOptionChange(e) {
    e.preventDefault();
    setSortOption(e.target.value);
  }

  return (
    <main>
      <h1>Our Products</h1>
      <S.Section>
        <Search onInputChange={onInputChange} searchInput={searchInput}></Search>
        <Sort onOptionChange={onOptionChange} sortOption={sortOption}></Sort>
      </S.Section>
      <Products searchInput={searchInput}></Products>
    </main>
  );
}

export default HomePage;
