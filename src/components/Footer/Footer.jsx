import React from "react";
import { Link } from "react-router-dom";
import * as S from "./Footer.styled";

function Footer() {
  return (
    <S.Footer>
      <S.FooterWrapper>
        <div>Logo etc</div>
        <div>Social media</div>
      </S.FooterWrapper>
    </S.Footer>
  );
}

export default Footer;
