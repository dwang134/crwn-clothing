import {Outlet} from 'react-router-dom';

const Navbar:React.FC = () => {
  return (
    <div>
      <h1>Navbar</h1>
      <Outlet/>
    </div>
  )
}

export default Navbar