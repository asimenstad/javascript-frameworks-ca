import styled from "styled-components";
import { HiArrowNarrowUp } from "react-icons/hi";

export const Button = styled.button`
  display: ${(props) => (props.isActive ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 5px;
  bottom: 15%;
  background-color: ${(props) => props.theme.color.pink};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding: 0;
  z-index: 100;
  :hover {
    background-color: ${(props) => props.theme.color.black};
  }
  @media screen and (min-width: 1100px) {
    right: 10px;
  }
  @media screen and (min-width: 1300px) {
    right: 10%;
  }
`;

export const Arrow = styled(HiArrowNarrowUp)`
  font-size: 1.1rem;
  color: ${(props) => props.theme.color.white};
`;
