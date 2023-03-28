import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

const useStore = create(
  devtools(
    persist(
      (set) => ({
        cart: [],
        addToCart: (data) =>
          set((state) => {
            const isPresent = state.cart.find((product) => product.data.id === data.id);
            if (!isPresent) {
              return {
                ...state,
                cart: [...state.cart, { data, quantity: 1 }],
              };
            }
            const updatedCart = state.cart.map((product) =>
              product.data.id === data.id ? { ...product, quantity: product.quantity + 1 } : product
            );

            return {
              ...state,
              cart: updatedCart,
            };
          }),
        removeFromCart: (data) =>
          set((state) => {
            const isPresent = state.cart.findIndex((product) => product.data.id === data.id);
            if (isPresent === -1) {
              return {
                ...state,
              };
            }
            const updatedCart = state.cart
              .map((product) =>
                product.data.id === data.id ? { ...product, quantity: Math.max(product.quantity - 1, 0) } : product
              )
              .filter((product) => product.quantity);
            return {
              ...state,
              cart: updatedCart,
            };
          }),
        clearCart: () => set({ cart: [] }),
      }),
      {
        name: "cart",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);

export { useStore };
