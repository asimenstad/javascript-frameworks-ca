import React, { useState } from "react";
import * as S from "./ScrollToTop.styles";

function ScrollToTop() {
  const [isActive, setIsActive] = useState(false);

  function toggleIsActive() {
    const scroll = document.documentElement.scrollTop;
    if (scroll > 400) {
      setIsActive(true);
    } else if (scroll <= 400) {
      setIsActive(false);
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  window.addEventListener("scroll", toggleIsActive);

  return (
    <S.Button onClick={scrollToTop} isActive={isActive}>
      <S.Arrow></S.Arrow>
    </S.Button>
  );
}

export default ScrollToTop;
