// import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'
import MarqueeIcons from './components/icons'
import AboutMe from './components/AboutMe'
import IframeSoundCloud from './components/Soundcloud'

function App() {
  return (
    <div className='App'>
      <Hero />

      <AboutMe />
      <MarqueeIcons />
      <div className='w-full bg-white'>

        <Projects />


        <IframeSoundCloud />
      </div>
      <Footer />
    </div>
  )
}

export default App
