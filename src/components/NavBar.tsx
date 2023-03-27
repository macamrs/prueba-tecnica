import logo from '../Assets/logo/logo_01.svg';
import '../css/NavBar.css';

function NavBar() {
  return (
    <>
    <div className='nav-container'>
      <div className='nav'>
        <img src={logo} alt="Viajes - Company Logo" />
        <div className='links-container'>
            <a href="home" className='uppercase'>Home</a>
            <a href="tendencias" className='uppercase'>Tendencias</a>
            <a href="blog" className='uppercase'>Blog</a>
        </div>        
      </div>
    </div>
    </>
  )
}

export default NavBar