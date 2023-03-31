import React from "react";
import * as S from "./Search.styles.jsx";

function Search(props) {
  return (
    <div>
      <label className="hidden" htmlFor="search">
        Search
      </label>
      <input
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
