import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  padding: 20px 6px 0 20px;
  background-color: ${(props) => props.theme.color.white};
  position: relative;
  z-index: 100;
  @media screen and (min-width: 600px) {
    padding-right: 20px;
  }
`;
