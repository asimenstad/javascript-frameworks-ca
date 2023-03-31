import React from "react";

function Sort(props) {
  return (
    <div>
      <label className="hidden" htmlFor="sort">
        Sort by
      </label>
      <select name="sort" id="sort" onChange={props.onOptionChange} value={props.sortOption}>
        <option value="">Sort by</option>
        <option value="newest">Newest</option>
        <option value="lowest">Lowest price</option>
        <option value="highest">Highest price</option>
      </select>
    </div>
  );
}

export default Sort;
