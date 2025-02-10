// import Navbar from './components/Navbar'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'
import { AboutMe } from './components/AboutMe'
import { PublicProjects } from './components/ProjectDetails'
import { ChartInformation } from './components/Charts'
import { Contributions } from './components/Contributions'

function App() {
  return (
    <div className='App'>
      <Hero />
      <AboutMe />
      <Projects />
      <PublicProjects />
      <Contributions />
      <ChartInformation />
      <Footer />
    </div>
  )
}

export default App
