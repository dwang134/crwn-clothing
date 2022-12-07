import React from "react";
import { CartItemType } from "../../../types/Types";
import { useCartContext } from "../../contexts/cartContext";

const Checkout: React.FC = () => {
  const { cartItems, cartCount, setCartCount, addItemToCart, removeItem } = useCartContext();

  console.log(cartItems);

  return (
    <div>
      <h1>I am the checkout page</h1>
      <div>
        {cartItems.map((item: CartItemType) => 
          <div key={item.id}>
            <h2>{item.name}</h2>
            <span onClick = {()=> removeItem(item)}>decrement</span>
            <br/>
            <span>{item.quantity}</span>
            <br/>
            <span onClick= {()=> addItemToCart(item)}>increment</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
