// import Navbar from './components/Navbar'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'
import { MarqueeIcons } from './components/Icons'
import { AboutMe } from './components/AboutMe'
import { ProjectsDetail } from './components/ProjectDetails'
import { ChartInformation } from './components/Charts'

function App() {
  return (
    <div className='App'>
      <Hero />
      <AboutMe />
      <div className='w-full bg-white'>
        <Projects />
        <ProjectsDetail />
        <ChartInformation />
        <MarqueeIcons />
      </div>
      <Footer />
    </div>
  )
}

export default App
