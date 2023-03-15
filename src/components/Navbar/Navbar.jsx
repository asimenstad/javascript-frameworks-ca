import React, { useState } from "react";
import Hamburger from "hamburger-react";
import * as S from "./Navbar.styles";
import Cart from "../Cart/Cart";
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
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
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
