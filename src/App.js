// import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'
import MarqueeIcons from './components/Icons'
import AboutMe from './components/AboutMe'
import IframeSoundCloud from './components/Soundcloud'
import ProjectsDetail from './components/ProjectDetails'

function App() {
  return (
    <div className='App'>
      <Hero />

      <AboutMe />
      <MarqueeIcons />
      <div className='w-full bg-white'>

        <Projects />

        <hr />

        <ProjectsDetail />
      </div>
      <Footer />
    </div>
  )
}

export default App
