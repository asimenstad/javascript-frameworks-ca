import React from "react";

/**
 * Sort component.
 * @component
 * @param {*} props - Sort select value and onChange function.
 * @returns - Sort select.
 */
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
