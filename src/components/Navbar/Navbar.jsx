import React, { useState } from "react";
import Hamburger from "hamburger-react";
import * as S from "./Navbar.styles.jsx";
import Cart from "../Cart/Cart.jsx";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <S.Nav>
      <S.MenuWrapper>
        <S.LogoWrapper to="/">
          <S.Logo></S.Logo> Market
        </S.LogoWrapper>
        <S.HamburgerWrapper>
          <Hamburger className="hamburger" toggled={isOpen} toggle={setOpen} size={20}></Hamburger>
        </S.HamburgerWrapper>
      </S.MenuWrapper>
      <S.Menu isOpen={isOpen}>
        <li>
          <S.StyledNavLink to="/">Home</S.StyledNavLink>
        </li>
        <li>
          <S.StyledNavLink to="/contact">Contact</S.StyledNavLink>
        </li>
        <li>
          <NavLink to="/checkout">
            <Cart></Cart>
          </NavLink>
        </li>
      </S.Menu>
    </S.Nav>
  );
}

export default Navbar;
