import Blog from '../components/Blog'
import Splash from '../components/Splash'
import Tendencias from '../components/Tendencias'
import '../App.css'

function Home() {
  return (
    <>
        <Splash />
          <div className='home-background'>
            <Tendencias />
            <Blog />          
          </div>
    </>
  )
}

export default Home