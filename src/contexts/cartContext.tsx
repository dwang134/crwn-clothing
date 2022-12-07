import React, { useState, createContext, useContext, useEffect } from "react";
import { CartItemType, Product } from "../../types/Types";

type CartContextObject = {
  isOpen: boolean;
  setIsOpen: (opened: boolean) => void;
  cartCount: number;
  setCartCount: (num: number) => void;
  cartItems: CartItemType[];
  addItemToCart: (productToAdd: Product) => void;
  removeItemFromCart: (productToRemove: Product) => void;
  removeItemFromCheckout: (productToRemove: Product) => void;
  cartTotal: number;
  setCartTotal: (productPrice: number) => void;
};

const CartContext = createContext<CartContextObject>({
  isOpen: false,
  setIsOpen: () => {},
  cartCount: 0,
  setCartCount: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: ()=> {},
  removeItemFromCheckout: () => {},
  cartTotal: 0,
  setCartTotal: () => {}
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
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (carTotal, cartItem) => carTotal + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (carTotal, cartItem) => carTotal + cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
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

  const removeItemFromCart = (productToRemove: Product) => {
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

  const removeItemFromCheckout = (productToRemove: Product) => {
    const newItems= cartItems.filter(cartItem=> cartItem.id !== productToRemove.id);
    setCartItems(newItems);
  }

  const value = {
    isOpen,
    setIsOpen,
    cartCount,
    setCartCount,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    removeItemFromCheckout,
    cartTotal,
    setCartTotal
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};