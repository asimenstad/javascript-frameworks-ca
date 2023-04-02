import React from "react";
import * as S from "./Footer.styles.jsx";

/**
 * Footer component.
 * @component
 * @returns - Footer.
 */
function Footer() {
  return (
    <S.Footer>
      <S.FooterWrapper>
        <S.LogoWrapper>&copy; 2023 Market</S.LogoWrapper>
        <S.Socials>
          <S.Instagram></S.Instagram>
          <S.Facebook></S.Facebook>
          <S.Twitter></S.Twitter>
        </S.Socials>
      </S.FooterWrapper>
    </S.Footer>
  );
}

export default Footer;
