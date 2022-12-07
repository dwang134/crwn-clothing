import React from 'react';
import Button from '../button/Button';
import './Dropdown.scss';
import CartItem from '../cartItem/CartItem';
import { useCartContext } from '../../contexts/cartContext';

const Dropdown = () => {

  const {cartItems} = useCartContext();

  return (
    <div className= 'cart-dropdown-container'>
        <div className="cart-items">
          {cartItems.map((item) => (
          <CartItem item={item}/>
          ))}
            <Button>GO TO CHECKOUT</Button>
        </div>
    </div>
  )
}

export default Dropdown