import { createContext, ReactNode, useContext, useState } from "react";

type shoppingCardContextProviderProps = {
  children: ReactNode;
};
type cartItem = {
  id: number;
  quantity: number;
};
type shoppingCardContextProps = {
  getProductQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  deleteProducts: (id: number) => void;
  cartQuantity: number;
  cartItems: cartItem[];
};

export const shoppingCardContext = createContext(
  {} as shoppingCardContextProps
);

export function useShoppingCartContext() {
  return useContext(shoppingCardContext);
}
export function ShoppingCardContextProvider({
  children,
}: shoppingCardContextProviderProps) {
  const [cartItems, setCartItems] = useState<cartItem[]>([]);

  function getProductQuantity(id: number) {
    const product = cartItems.find((item) => item.id === id);
    return product?.quantity || 0;
  }
  function increaseCartQuantity(id: number) {
    setCartItems((items) => {
      if (!items.find((item) => item.id === id)) {
        return [...items, { id, quantity: 1 }];
      } else {
        return items.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
    });
    console.log(cartItems);
  }
  function decreaseCartQuantity(id: number) {
    setCartItems((items) => {
      if (items.find((item) => item.id === id)?.quantity === 1) {
        return items.filter((item) => item.id !== id);
      } else {
        return items.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
    });
  }
  function deleteProducts(id: number) {
    setCartItems((items) => items.filter((item) => item.id !== id));
  }
  const cartQuantity = cartItems.reduce((prev, cur) => prev + cur.quantity, 0);
  return (
    <shoppingCardContext.Provider
      value={{
        getProductQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        deleteProducts,
        cartQuantity,
        cartItems,
      }}
    >
      {children}
    </shoppingCardContext.Provider>
  );
}
