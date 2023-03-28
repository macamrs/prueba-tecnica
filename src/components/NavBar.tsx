import logo from '../Assets/logo/logo_01.svg';
import '../css/NavBar.css';
import burgerIcon from '../Assets/iconos/menu_burger.svg';
import closeMenu from '../Assets/iconos/No.svg';
import { NavLink } from 'react-router-dom'
import { useState } from 'react';

function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
    <div className='nav-container'>
      <nav className='nav'>
        <img src={logo} alt="Viajes - Company Logo" />
        <div className='links-container'>
          <NavLink className={({isActive}) => isActive ? 'active uppercase' : 'inactive uppercase'} to='/'>Home</NavLink>
          <NavLink className={({isActive}) => isActive ? 'active uppercase' : 'inactive uppercase'} to='/tendencias'>Tendencias</NavLink>
          <NavLink className={({isActive}) => isActive ? 'active uppercase' : 'inactive uppercase'} to='/blog'>Blog</NavLink>
        </div>    
        
        <div className='burger-button'>
          <button onClick={() => setOpenMenu(true)}>
            <img src={burgerIcon} />
          </button>
        </div>   
      </nav>

      {openMenu && (
          <div className='responsive-container'>          
            <div className='responsive-menu'>

              <div className='close-button'>
                <button onClick={() => setOpenMenu(false)}>
                  <img src={closeMenu} />
                </button>   
              </div>
              <div className='links-container-responsive'>
                <NavLink className={({isActive}) => isActive ? 'active uppercase bold' : 'inactive uppercase bold'} to='/'>Home</NavLink>
                <NavLink className={({isActive}) => isActive ? 'active uppercase bold' : 'inactive uppercase bold'} to='/tendencias'>Tendencias</NavLink>
                <NavLink className={({isActive}) => isActive ? 'active uppercase bold' : 'inactive uppercase bold'} to='/blog'>Blog</NavLink>
              </div>  
            </div>
          </div>
        )}
    </div>
    </>
  )
}

export default NavBar