// import Navbar from './components/Navbar'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'
import { AboutMe } from './components/AboutMe'
import { PublicProjects } from './components/ProjectDetails'
import { ChartInformation } from './components/Charts'
import { Contributions } from './components/Contributions'
import { AnimationOnScroll } from 'react-animation-on-scroll'

function App() {
  return (
    <div className='App'>
      <Hero />
      <AboutMe />
      <div className='w-full flex flex-col gap-12'>
        <Projects />
        <PublicProjects />

        <ChartInformation />
        {/* <AnimationOnScroll animateIn='animate__fadeInUp'>
        </AnimationOnScroll> */}
      </div>
      <Contributions />
      <Footer />
    </div>
  )
}

export default App
