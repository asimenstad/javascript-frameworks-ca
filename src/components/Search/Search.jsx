import React from "react";
import * as S from "./Search.styles";

function Search() {
  return (
    <div>
      <S.Label htmlFor="search">Search</S.Label>
      <S.SearchInput type="search" name="search" placeholder="Search" />
      <S.SearchButton type="submit">
        <S.SearchIcon></S.SearchIcon>
      </S.SearchButton>
    </div>
  );
}

export default Search;
