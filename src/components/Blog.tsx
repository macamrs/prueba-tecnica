import { blog } from '../db'
import time from '../Assets/iconos/time.svg'
import '../css/Blog.css'

function Blog() {
  return (
    <>
    <div className='blog-container'>
        <h2 className='uppercase blog-title'>Blog</h2>
        <div className='blog-grid'>
          <div>
          {blog?.map((b: any, i: any) => {
            if(b.id <= 2) {
              return (
                  <div key={i} className='blog-card'>
                    <img src={b.imagen} className='imagen-blog' />
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
          <div>
          {blog?.map((b: any, i: any) => {
            if(b.id >= 3) {
              return (
                <div key={i}>
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