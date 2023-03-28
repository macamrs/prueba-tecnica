import { tendencias } from '../db'
import '../css/Tendencias.css'

function Tendencias() {  
  return (
    <>
      <div className='tendencias-container'>
          <h2 className='uppercase tendencias-title'>Tendencias</h2>
          <div className='tendencias-grid'>
            { tendencias?.map((t: any, i: any) => {
              const boldText = t.texto.replace(t.titulo, `<strong>${t.titulo}</strong>`);        
              return (
                <div key={i} className='tendencias-card'>
                  <div className='img-container'>
                    <img src={t.imagen} alt="Imagen"/>
                    {t.showNuevo && <p className='nuevo-tag primary-color bold uppercase'>Nuevo</p>}
                  </div>
                  <div className='text-container'>
                    <h3 className='bold'>{t.titulo}</h3>
                    <p dangerouslySetInnerHTML={{__html: boldText}} />                    
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