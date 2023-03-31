import styled from "styled-components";
import { AiOutlineShop } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  gap: 40px;
  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
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

export const HamburgerWrapper = styled.div`
  @media screen and (min-width: 600px) {
    display: none;
  }
`;

export const Logo = styled(AiOutlineShop)`
  font-size: 1.6rem;
`;

export const LogoWrapper = styled(NavLink)`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-family: ${(props) => props.theme.font.primary};
`;

export const StyledNavLink = styled(NavLink)`
  background: linear-gradient(currentColor, currentColor) left bottom / 0 2px no-repeat;
  padding-bottom: 2px;
  transition: 0.5s background-size;
  :hover {
    background-size: 100% 2px;
  }
`;
