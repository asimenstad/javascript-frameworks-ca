import React, { useState } from "react";
import Hamburger from "hamburger-react";
import * as S from "./Navbar.styles";
import Cart from "../Cart/Cart";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <S.Nav>
      <S.MenuWrapper>
        <S.StyledNavLink to="/">Logo</S.StyledNavLink>
        <S.HamburgerWrapper>
          <Hamburger className="hamburger" toggled={isOpen} toggle={setOpen} size={20}></Hamburger>
        </S.HamburgerWrapper>
      </S.MenuWrapper>
      <S.Menu isOpen={isOpen}>
        <S.MenuItem>
          <S.StyledNavLink to="/">Home</S.StyledNavLink>
        </S.MenuItem>
        <S.MenuItem>
          <S.StyledNavLink to="/contact">Contact</S.StyledNavLink>
        </S.MenuItem>
        <S.MenuItem>
          <S.StyledNavLink to="/checkout">
            <Cart></Cart>
          </S.StyledNavLink>
        </S.MenuItem>
      </S.Menu>
    </S.Nav>
  );
}

export default Navbar;
