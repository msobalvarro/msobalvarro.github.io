// import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'
import MarqueeIcons from './components/icons'
import AboutMe from './components/AboutMe'

function App() {
  return (
    <div className='App'>
      <Hero />

      <AboutMe />
      <div className='w-full bg-white'>

        <Projects />
      </div>

      <MarqueeIcons />

      <Footer />
    </div>
  )
}

export default App
