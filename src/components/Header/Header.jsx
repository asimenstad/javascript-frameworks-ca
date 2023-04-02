import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import * as S from "./Header.styles.jsx";

/**
 * Header component.
 * @component
 * @returns - Header.
 */
function Header() {
  return (
    <S.Header>
      <Navbar />
    </S.Header>
  );
}

export default Header;
