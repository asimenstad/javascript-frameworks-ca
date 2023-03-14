import React from "react";
import * as S from "./Search.styles";

function Search(props) {
  return (
    <div>
      <S.Label htmlFor="search">Search</S.Label>
      <S.SearchInput
        type="search"
        name="search"
        placeholder="Search"
        onChange={props.onInputChange}
        value={props.searchInput}
      />
      <S.SearchIcon></S.SearchIcon>
    </div>
  );
}

export default Search;
