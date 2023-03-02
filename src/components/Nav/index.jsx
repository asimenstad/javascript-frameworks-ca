import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <button className="hamburger">
        <span className="top"></span>
        <span className="middle"></span>
        <span className="bottom"></span>
      </button>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>Checkout</li>
      </ul>
    </nav>
  );
}

export default Nav;
