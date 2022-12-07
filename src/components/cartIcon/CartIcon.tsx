import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { useCartContext } from '../../contexts/cartContext';
import './CartIcon.scss';

const CartIcon = () => {

    const {cartCount, setCartCount, isOpen, setIsOpen} = useCartContext();

    const toggleCartOpen = () => {
        setIsOpen(!isOpen);
    }

  return (
    <div className= 'cart-icon-container' onClick = {()=> toggleCartOpen()}>
        <ShoppingIcon className= 'shopping-icon'/>
        <span className= 'item-count'>{cartCount}</span>
    </div>
  )
}

export default CartIcon