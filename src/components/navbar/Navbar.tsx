import {Outlet, Link} from 'react-router-dom';

const Navbar:React.FC = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          <div>Logo</div>
        </Link>
        <div className="links-container">
          <Link className= 'nav-link' to='/shop'>SHOP</Link>
        </div>
      </div>
      <Outlet/>
    </>
  )
}

export default Navbar