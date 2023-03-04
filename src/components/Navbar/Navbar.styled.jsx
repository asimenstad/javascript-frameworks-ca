import styled from "styled-components";

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

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  padding: 0;
  @media screen and (min-width: 600px) {
    flex-direction: row;
    display: flex;
  }
  display: ${(props) => (props.isOpen ? "flex" : "none")};
`;

export const MenuItem = styled.li`
  list-style: none;
  > * {
    text-decoration: none;
  }
`;

export const HamburgerWrapper = styled.div`
  @media screen and (min-width: 600px) {
    display: none;
  }
`;
