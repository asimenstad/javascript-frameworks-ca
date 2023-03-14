import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  gap: 40px;
  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #000;
`;

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
  text-align: center;
  padding: 0;
  @media screen and (min-width: 600px) {
    flex-direction: row;
    display: flex;
    justify-content: end;
    align-items: center;
    width: 100%;
  }
  display: ${(props) => (props.isOpen ? "flex" : "none")};
`;

export const MenuItem = styled.li`
  list-style: none;
`;

export const HamburgerWrapper = styled.div`
  @media screen and (min-width: 600px) {
    display: none;
  }
`;
