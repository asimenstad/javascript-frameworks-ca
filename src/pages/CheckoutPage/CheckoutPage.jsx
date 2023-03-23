import React from "react";
import { useStore } from "../../hooks/useStore.jsx";
import { shallow } from "zustand/shallow";
import * as S from "./CheckoutPage.styles.jsx";

function CheckoutPage() {
  const { cart, addToCart, removeFromCart, clearCart } = useStore(
    (state) => ({
      cart: state.cart,
      addToCart: state.addToCart,
      removeFromCart: state.removeFromCart,
      clearCart: state.clearCart,
    }),
    shallow
  );

  return (
    <main>
      <h1>Checkout</h1>
      <S.CartWrapper>
        <div>
          {cart.length > 0 && <h2>Your items</h2>}
          <S.CartItems>
            {cart.length === 0 && (
              <S.EmptyCart>
                <p>Your bag is empty</p>
                <S.BackToShopLink to="/">Back to shop</S.BackToShopLink>
              </S.EmptyCart>
            )}
            {cart.map(({ id, quantity }) => (
              <S.CartItem key={id.id}>
                <S.CartItemInfo>
                  <S.CartItemImg src={id.imageUrl} alt={id.title} />
                  <div>
                    <h3>{id.title}</h3>
                    {id.price === id.discountedPrice ? (
                      <p>{(id.price * quantity).toFixed(2)} KR</p>
                    ) : (
                      <div>
                        <S.DiscountedPrice>{(id.discountedPrice * quantity).toFixed(2)} KR</S.DiscountedPrice>
                        <S.Price>{(id.price * quantity).toFixed(2)} KR</S.Price>
                      </div>
                    )}
                  </div>
                </S.CartItemInfo>
                <S.Counter>
                  <button onClick={() => removeFromCart(id)}>
                    <S.MinusButton></S.MinusButton>
                  </button>
                  <p>{quantity}</p>
                  <button onClick={() => addToCart(id)}>
                    <S.PlusButton></S.PlusButton>
                  </button>
                </S.Counter>
              </S.CartItem>
            ))}
          </S.CartItems>
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
            <div>Total KR</div>
            <button>Checkout order</button>
          </div>
        </S.Form>
      </S.CartWrapper>
    </main>
  );
}

export default CheckoutPage;
