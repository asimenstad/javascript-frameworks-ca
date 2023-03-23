import React from "react";
import * as S from "./CheckoutSuccessPage.styles";

function CheckoutSuccessPage() {
  return (
    <S.Main>
      <h1>Thank you for you purchase!</h1>
      <p>You will receive an order confirmation email with details of you order shortly.</p>
      <S.StyledLink to="/">Continue shopping</S.StyledLink>
    </S.Main>
  );
}

export default CheckoutSuccessPage;
