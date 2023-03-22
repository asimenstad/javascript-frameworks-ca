import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

export const useStore = create(
  devtools(
    persist(
      (set) => ({
        cart: [],
        total: 0,
        addToCart: (product) => set((state) => ({ cart: [...state.cart, { product, quantity: 1 }] })),
        removeFromCart: (product) => set((state) => ({ cart: [...state.cart, { product, quantity: 1 }] })),
        clearCart: () => set({ cart: [] }),
      }),
      {
        name: "cart",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
