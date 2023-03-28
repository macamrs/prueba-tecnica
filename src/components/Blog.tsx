import { blog } from '../db'
import time from '../Assets/iconos/time.svg'
import '../css/Blog.css'

function Blog() {
  return (
    <>
    <div className='blog-container'>
        <h2 className='uppercase blog-title'>Blog</h2>
        <div className='blog-grid'>
          <div className='column-1'>
          {blog?.map((b: any, i: any) => {
            if(b.id <= 2) {
              return (
                  <div key={i} className='blog-card'>
                    <img src={b.imagen} className='imagen-blog' />
                    {b.tag && <p className='tag primary-color uppercase bold'>{b.tag}</p>}
                    <div className='bottomtext-container'>
                      <div className='text'>
                        <h3 className='primary-color'>{b.titulo}</h3>
                        {b.texto && <p className='primary-color'>{b.texto}</p>}                        
                      </div>
                      <div className='time-container'>
                        <img src={time} />
                        <p className='primary-color'>Hace {b.tiempo}</p>
                      </div>                      
                    </div>
                  </div>
                )              
            }
            })}              
          </div>
          <div className='column-2'>
          {blog?.map((b: any, i: any) => {
            if(b.id >= 3) {
              return (
                <div key={i} className='blog-card-2' >
                  <img src={b.imagen} className='imagen-blog'/>
                  {b.tag && <p className='tag primary-color uppercase bold'>{b.tag}</p>}
                  <h3>{b.titulo}</h3>
                  {b.texto && <p>{b.texto}</p>}
                  <div className='time-container'>
                    <img src={time} />
                    <p>Hace {b.tiempo}</p>
                  </div>
                </div>
              )              
            }
            })}              
          </div>
             
        </div>
  
    </div>

    </>
  )
}

export default Blog