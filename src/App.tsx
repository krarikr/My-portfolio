
import './App.css'
import Banner from './components/Layout/Banner/Banner'
import NavBar from './components/Layout/NavBar/NavBar'
import Main from './components/Layout/Main/Main'
import Footer from './components/Layout/Footer/Footer'

function App() {


  return (
    <div className='app'>
      <NavBar/>
      <Banner/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
