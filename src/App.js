import './styles/main.css'
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
import Contact from './components/contactform/Contact'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
