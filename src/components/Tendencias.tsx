import { tendencias } from '../db'
import '../css/Tendencias.css'

function Tendencias() {  
  return (
    <>
      <div className='tendencias-container'>
          <h2 className='uppercase tendencias-title'>Tendencias</h2>
          <div className='tendencias-grid'>
            { tendencias?.map((t: any, i: any) => {
              return (
                <div key={i} className='tendencias-card'>
                  <img src={t.imagen} alt="Imagen"/>
                  <div className='text-container'>
                    <h3>{t.titulo}</h3>
                    <p>{t.texto}</p>                    
                  </div>
                </div>
              )
            })}               
          </div>
      </div>
    </>
  )
}

export default Tendencias