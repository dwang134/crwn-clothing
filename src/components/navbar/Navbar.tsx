import {Outlet, Link} from 'react-router-dom';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import './Navbar.scss'
import {useContext} from 'react';
import {signOutUser} from '../../utils/firebase'
import CartIcon from '../cartIcon/CartIcon';
import Dropdown from '../cart-dropdown/Dropdown';
import { useCartContext } from '../../contexts/cartContext';
import { UserContext } from '../../contexts/userContext';

const Navbar:React.FC = () => {

  const {currentUser} = useContext(UserContext);
  const {isOpen, setIsOpen} = useCartContext();

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          <CrwnLogo/>
        </Link>
        <div className="nav-links-container">
          <Link className= 'nav-link' to='/shop'>SHOP</Link>
          {currentUser ? (
            <span className= 'nav-link' onClick= {()=> signOutUser()}>SIGN OUT</span>
          ): (
            <Link className= 'nav-link' to='/login'>SIGN IN</Link>
          )}
        <CartIcon/>
        </div>
        {isOpen && <Dropdown/>}
      </div>
      <Outlet/>
    </>
  )
}

export default Navbar