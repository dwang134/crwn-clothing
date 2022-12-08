import React from "react";
import { CartItemType } from "../../../types/Types";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import { useCartContext } from "../../contexts/cartContext";
import './Checkout.scss';

const Checkout: React.FC = () => {
  const { cartItems, cartCount,  addItemToCart,cartTotal } = useCartContext();

  console.log(cartItems);

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item: CartItemType) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
      <span className='total'>TOTAL: ${cartTotal}</span>
    </div>
  );
};

export default Checkout;
