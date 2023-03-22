import React from "react";
import { useStore } from "../../hooks/useStore.jsx";
import { shallow } from "zustand/shallow";
import * as S from "./CheckoutPage.styles.jsx";

function CheckoutPage() {
  const { cart, removeFromCart, clearCart } = useStore(
    (state) => ({
      cart: state.cart,
      removeFromCart: state.removeFromCart,
      clearCart: state.clearCart,
    }),
    shallow
  );
  console.log(cart);
  return (
    <main>
      <h1>Checkout</h1>
      <S.CartWrapper>
        <div>
          <h2>Your items</h2>
          <S.CartItems>
            {cart.map(({ product, quantity }) => (
              <S.CartItem key={product.id}>
                <S.CartItemInfo>
                  <S.CartItemImg src={product.imageUrl} alt={product.title} />
                  <div>
                    <h3>{product.title}</h3>
                    {product.price === product.discountedPrice ? (
                      <div>
                        <p>{product.price} KR</p>
                      </div>
                    ) : (
                      <div>
                        <p>{product.discountedPrice} KR</p>
                        <p>{product.price} KR</p>
                      </div>
                    )}
                    <p>Quantity: {quantity}</p>
                  </div>
                </S.CartItemInfo>
                <div>
                  <S.RemoveItemButton onClick={removeFromCart}>Remove item</S.RemoveItemButton>
                </div>
              </S.CartItem>
            ))}
          </S.CartItems>
          <button onClick={clearCart}>Clear cart</button>
        </div>
        <S.Form>
          <S.DeliveryInfo>
            <h2>Delivery information</h2>
            <div>
              <label htmlFor="name">Name*</label>
              <input type="text" name="name" id="name" placeholder="Name" required />
            </div>
            <div>
              <label htmlFor="email">Email*</label>
              <input type="email" name="email" id="email" placeholder="Email" required />
            </div>
            <div>
              <label htmlFor="address">Address*</label>
              <input type="text" name="address" id="address" placeholder="Address" required />
            </div>
            <div>
              <label htmlFor="phone">Phone number</label>
              <input type="tel" name="phone" id="phone" placeholder="Phone number" />
            </div>
          </S.DeliveryInfo>
          <S.RadioDiv>
            <h2>Delivery options</h2>
            <div>
              <label htmlFor="express">
                <span>Helthjem Ekspress</span>
                <span>49 KR</span>
              </label>
              <input type="radio" name="delivery" value="express" id="express" defaultChecked />
            </div>
            <div>
              <label htmlFor="standard">
                <span>Helthjem Standard</span>
                <span>19 KR</span>
              </label>
              <input type="radio" name="delivery" value="standard" id="standard" />
            </div>
          </S.RadioDiv>
          <S.RadioDiv>
            <h2>Payment method</h2>
            <div>
              <label htmlFor="klarna">
                <span>Klarna</span>
                <span>Klarna logo</span>
              </label>
              <input type="radio" name="payment" value="klarna" id="klarna" defaultChecked />
            </div>
            <div>
              <label htmlFor="vipps">
                <span>Vipps</span>
                <span>Vipps logo</span>
              </label>
              <input type="radio" name="payment" value="vipps" id="vipps" />
            </div>
            <div>
              <label htmlFor="visa">
                <span>Visa</span>
                <span>Visa logo</span>
              </label>
              <input type="radio" name="payment" value="visa" id="visa" />
            </div>
          </S.RadioDiv>
          <div>
            <h2>Summary</h2>
            <button>Checkout </button>
          </div>
        </S.Form>
      </S.CartWrapper>
    </main>
  );
}

export default CheckoutPage;
