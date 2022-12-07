import React, { useState, createContext, useContext, useEffect } from "react";
import { CartItemType, Product } from "../../types/Types";

type CartContextObject = {
  isOpen: boolean;
  setIsOpen: (opened: boolean) => void;
  cartCount: number;
  setCartCount: (num: number) => void;
  cartItems: CartItemType[];
  addItemToCart: (productToAdd: Product) => void;
  removeItem: (productToRemove: Product) => void;
};

const CartContext = createContext<CartContextObject>({
  isOpen: false,
  setIsOpen: () => {},
  cartCount: 0,
  setCartCount: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItem: ()=> {}
});

interface Props {
  children: React.ReactNode;
}

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartContextProvider: React.FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd: Product) => {
    //find if cartItems contains productToAdd
    const existingItem = cartItems.find(
      (cartItem) => cartItem.id === productToAdd.id
    );

    if (!existingItem) {
        setCartItems([...cartItems, { ...productToAdd, quantity: 1 }]);
    } else {
      const newItems: CartItemType[] = cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCartItems(newItems);
    }

    //return new array with new modified cartItems/new cart item
  };

  const removeItem = (productToRemove: Product) => {
    const existingItem = cartItems.find(
        (cartItem) => cartItem.id === productToRemove.id
      );

      if (existingItem){

        if (existingItem.quantity === 1){
            //returns back anything thats not same as product id
            const newItems= cartItems.filter(cartItem=> cartItem.id !== productToRemove.id);
            setCartItems(newItems);
        }else{
            const newItems: CartItemType[] = cartItems.map((cartItem) =>
            cartItem.id === productToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1} : cartItem
          );
          setCartItems(newItems);
        }

      }
  };

  const value = {
    isOpen,
    setIsOpen,
    cartCount,
    setCartCount,
    cartItems,
    addItemToCart,
    removeItem
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
