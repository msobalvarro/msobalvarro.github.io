// import Navbar from './components/Navbar'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'
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
      </div>
      <Footer />
    </div>
  )
}

export default App
