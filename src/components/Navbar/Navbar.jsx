import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";
import * as S from "./Navbar.styled";
import Cart from "../Cart/Cart";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <S.Nav>
      <S.MenuWrapper>
        <NavLink to="/">Logo</NavLink>
        <S.HamburgerWrapper>
          <Hamburger className="hamburger" toggled={isOpen} toggle={setOpen} size={20}></Hamburger>
        </S.HamburgerWrapper>
      </S.MenuWrapper>
      <S.Menu isOpen={isOpen}>
        <S.MenuItem>
          <NavLink to="/">Home</NavLink>
        </S.MenuItem>
        <S.MenuItem>
          <NavLink to="/contact">Contact</NavLink>
        </S.MenuItem>
        <S.MenuItem>
          <NavLink to="/cart">
            <Cart></Cart>
          </NavLink>
        </S.MenuItem>
      </S.Menu>
    </S.Nav>
  );
}

export default Navbar;
