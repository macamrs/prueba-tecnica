import pin from '../Assets/iconos/ic_pin.svg'
import arrow from '../Assets/iconos/arrow.svg'
import '../css/Splash.css'

function Splash() {
  return (
    <>
        <div className='hero-container'>
            <div className='hero-title-container'>
                <div className='hero-title'>
                    <img src={pin} alt="Map Pin" />
                    <h2 className='uppercase primary-color'>America del Sur</h2>
                </div>
                <div className='line'></div>
                <div className='hero-subtitle'>
                    <h3 className='primary-color'>Lugares maravillosos por America del Sur</h3>
                    <p className='primary-color regular'>Estos son algunos lugares que eligen la mayoria de los turistas que vistan America del Sur</p>
                </div>
            </div>

            <div className='index-container'>
                <div className='line-index'></div>
                <div className='first-circle'>
                    <div className='inner-circle'>
                        <p className='bold'>01</p>
                    </div>
                </div>
            </div>

            <div className='cta-box-container'>
                <div className='cta-box-header'>
                    <h4 className='uppercase secondary-color'>Proxima Aventura</h4>
                    <img src={arrow} alt="Arrow" />
                </div>
                <h4 className='primary-color'>Europa Meridional</h4>
                <p className='primary-color regular'>Forman parte veinte países, ej. España, Francia, etc.</p>
            </div>
        </div>
    </>
  )
}

export default Splash