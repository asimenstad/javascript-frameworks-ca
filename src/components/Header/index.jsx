import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav";

function Header() {
  return (
    <header>
      <div>
        <Link to="/">Logo</Link>
      </div>
      <Nav />
    </header>
  );
}

export default Header;
