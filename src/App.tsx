import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Home from './pages/Home'

function App() {
  return (
    <div className='App'>
       <NavBar />
       <Routes>
        <Route path='/home' element={ <Home />} />
       </Routes>
       <Home />
       <Footer />
    </div>
  )
}

export default App
