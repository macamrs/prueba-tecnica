import logo from '../Assets/logo/logo_02.svg';
import instagram from '../Assets/iconos/instagram.svg';
import facebook from '../Assets/iconos/facebook.svg';
import '../css/Footer.css';

function Footer() {
  return (
    <>
    <div className='footer-container'>
      <div className='footer'>
        <img src={logo} alt="Viajes - Company Logo" />
        <div className='socials-container'>
            <img src={instagram} alt="Instagram" />
            <img src={facebook} alt="Facebook" />
        </div>        
      </div>
    </div>
    </>
  )
}

export default Footer