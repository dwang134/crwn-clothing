import React, { useState, createContext, useContext, useEffect, useReducer } from "react";
import { CartItemType, Item, Product } from "../../types/Types";

type CartContextObject = {
  isOpen: boolean;
  setIsOpen: (opened: boolean) => void;
  cartCount: number;
  // setCartCount: (num: number) => void;
  cartItems: CartItemType[];
  addItemToCart: (productToAdd: Product) => void;
  removeItemFromCart: (productToRemove: Product) => void;
  removeItemFromCheckout: (productToRemove: Product) => void;
  cartTotal: number;
  // setCartTotal: (productPrice: number) => void;
};

const CartContext = createContext<CartContextObject>({
  isOpen: false,
  setIsOpen: () => {},
  cartCount: 0,
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: ()=> {},
  removeItemFromCheckout: () => {},
  cartTotal: 0,
});

interface Props {
  children: React.ReactNode;
}

export const useCartContext = () => {
  return useContext(CartContext);
};

const INITIAL_STATE = {
  isOpen: false,
  cartCount: 0,
  cartItems: [],
  cartTotal: 0
}

const cartReducer = (state: any, action: any)=> {
  const {type, payload} = action;

  switch(type){
    case 'SET_CART_ITEMS':
      return {
        ...state,
        ...payload
      }
  }

  switch(type){
    default:
      throw new Error(`unhandled type of ${type} in cartReducer`)
  }
}

export const CartContextProvider: React.FC<Props> = ({ children }) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [cartCount, setCartCount] = useState(0);
  // const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  // const [cartTotal, setCartTotal] = useState(0);

  // useEffect(() => {
  //   const newCartCount = cartItems.reduce(
  //     (carTotal, cartItem) => carTotal + cartItem.quantity,
  //     0
  //   );
  //   setCartCount(newCartCount);
  // }, [cartItems]);

  // useEffect(() => {
  //   const newCartTotal = cartItems.reduce(
  //     (carTotal, cartItem) => carTotal + cartItem.price,
  //     0
  //   );
  //   setCartTotal(newCartTotal);
  // }, [cartItems]);
  const [isOpen, setIsOpen] = useState(false);
  const [{cartCount, cartItems, cartTotal}, dispatch] = useReducer(cartReducer, INITIAL_STATE);


  const updateCartItemsReducer = (newCartItems: CartItemType []) => {

    const newCartCount = newCartItems.reduce(
      (cartTotal, cartItem) => cartTotal + cartItem.quantity,
      0
    );

    const newCartTotal = newCartItems.reduce(
      (cartTotal, cartItem) => cartTotal + cartItem.price,
      0
    );

    dispatch({type: 'SET_CART_ITEMS', payload: {cartItems: newCartItems, cartTotal: newCartTotal, cartCount: newCartCount}})

  }

  
  const addItemToCart = (productToAdd: Product) => {
    const newCartItems = addItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };


  const removeItemFromCart = (productToRemove: Product) => {
    const newCartItems = removeItem(cartItems, productToRemove);
    updateCartItemsReducer(newCartItems);
  }


  const removeItemFromCheckout = (productToRemove: Product) => {
    const newCartItems = clearItem(cartItems, productToRemove);
    updateCartItemsReducer(newCartItems);
  }

  
  //REMOVE CART ITEMS
  const removeItem = (cartItems: CartItemType[], productToRemove: Product) => {
    const existingItem = cartItems.find(
        (cartItem) => cartItem.id === productToRemove.id
      );

      if (existingItem){

        if (existingItem.quantity === 1){
            //returns back anything thats not same as product id
            const newItems= cartItems.filter(cartItem=> cartItem.id !== productToRemove.id);
            return newItems;
        }else{
            const newItems: CartItemType[] = cartItems.map((cartItem) =>
            cartItem.id === productToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1} : cartItem
          );
          return newItems;
        }
      }else{
        return cartItems;
      }
  };


  //REMOVE CART ITEM FROM CHECKOUT
  const clearItem = (cartItems: CartItemType[], productToRemove: Product) => {
    const newItems= cartItems.filter(cartItem=> cartItem.id !== productToRemove.id);
    return newItems;
  }


   //ADD CART ITEMS
   const addItem = (cartItems: CartItemType[], productToAdd: Product) => {
    //find if cartItems contains productToAdd
    const existingItem = cartItems.find(
      (cartItem) => cartItem.id === productToAdd.id
    );

    if (!existingItem) {
        return [...cartItems, { ...productToAdd, quantity: 1 }];
    } else {
      const newItems: CartItemType[] = cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      return newItems;
    }

    //return new array with new modified cartItems/new cart item
  };

  const value = {
    isOpen,
    setIsOpen,
    cartCount,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    removeItemFromCheckout,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
