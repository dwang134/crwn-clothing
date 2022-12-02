import {Outlet, Link} from 'react-router-dom';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import './Navbar.scss'
import {useContext} from 'react';
import {UserContext} from '../../contexts/userContext'
import {signOutUser} from '../../utils/firebase'

const Navbar:React.FC = () => {

  const {currentUser} = useContext(UserContext);

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
            <Link className= 'nav-link' to='/signin'>SIGN IN</Link>
          )}
        </div>
      </div>
      <Outlet/>
    </>
  )
}

export default Navbar