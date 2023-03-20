import React, { useReducer } from "react";
import { initialState, reducer } from "../../hooks/reducer";

function AddToCartButton(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <button onClick={() => dispatch({ type: "addProduct", payload: props.product })}>Add to cart</button>;
}

export default AddToCartButton;
