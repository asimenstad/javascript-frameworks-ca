import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

export const useStore = create(
  devtools(
    persist(
      (set) => ({
        cart: [],
        total: 0,
        quantity: 0,
        addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
        removeFromCart: (productId) =>
          set((state) => ({ cart: state.cart.filter((product) => product.id !== productId) })),
        clearCart: () => set({ cart: [] }),
      }),
      {
        name: "cart",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
