import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

const useStore = create(
  devtools(
    persist(
      (set) => ({
        cart: [],
        total: 0,
        addToCart: (id) =>
          set((state) => {
            const isPresent = state.cart.find((product) => product.id === id);
            if (!isPresent) {
              return {
                ...state,
                cart: [...state.cart, { id, quantity: 1 }],
              };
            }
            const updatedCart = state.cart.map((product) =>
              product.id === id ? { ...product, quantity: product.quantity + 1 } : product
            );

            return {
              ...state,
              cart: updatedCart,
            };
          }),
        setTotal: (price) => set((state) => ({ total: state.total + parseInt(price) })),
        removeFromCart: (id) =>
          set((state) => ({
            cart: state.cart.filter((product) => product.id !== id),
          })),
        clearCart: () => set({ cart: [], total: 0 }),
      }),
      {
        name: "cart",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);

export { useStore };
