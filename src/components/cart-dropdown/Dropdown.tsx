import React from 'react';
import Button from '../button/Button';
import './Dropdown.scss';
import CartItem from '../cartItem/CartItem';
import { useCartContext } from '../../contexts/cartContext';
import {useNavigate} from 'react-router-dom';

const Dropdown = () => {

  const {cartItems, isOpen, setIsOpen} = useCartContext();
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
    setIsOpen(!isOpen);
  }

  return (
    <div className= 'cart-dropdown-container'>
        <div className="cart-items">
          {cartItems.map((item) => (
          <CartItem key= {item.id} item={item}/>
          ))}
            <Button onClick= {goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </div>
    </div>
  )
}

export default Dropdown