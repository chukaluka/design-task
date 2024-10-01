import Navbar from "./components/Navbar"
import Logo from "./components/Logo"
import Header from "./components/Header"
import About from "./components/About"
import Resume from "./components/Resume"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"

export default function App() {
  return (
    <div >
      <Navbar/>
      <div className="contain-div">
        <Logo/>
        <Header/>
        <About/>
        <Resume/>
        <Portfolio/>
        <Contact/>
      </div>
    </div>
  )
}