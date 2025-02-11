import reactImage from '../images/react-2.svg'
import { IoIosArrowDropdownCircle } from 'react-icons/io'
import { ReactTyped } from 'react-typed'
import { useWindowScroll } from '../hooks'

const skillsDetails = [
  'Desarrollador Frontend',
  'Desarrollador Backend',
  'Desarrollador de Aplicaciones móviles',
  'Diseñador UX/UI',
]

export const Hero = () => {
  const { scrollPosition } = useWindowScroll()

  return (
    <div className='animate__animated animate__fadeIn relative w-full h-screen mx-auto flex flex-col gap-4 items-center justify-center text-center text-white'>
      <img alt='react' className='object-scale-down h-48 w-48 react-rotate' src={reactImage} />

      <h1 className='md:text-5xl sm:text-6xl text-4xl font-bold p-0'>
        SAMUEL SOBALVARRO
      </h1>

      <div className='flex justify-center'>
        <p className='md:text-4xl sm:text-3xl text-xl py-4'>
          <ReactTyped
            className='md:text-4xl sm:text-4xl text-xl md:pl-4 pl-2 font-semibold text-[#61dbfb]'
            strings={skillsDetails}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </p>
      </div>

      <p className='font-bold'>
        DESARROLLADOR JAVASCRIPT FULL STACK
      </p>

      <button className='bg-[#61dbfb] w-[200px] rounded-md font-medium py-3 text-black'>
        <a rel='noreferrer' href='https://drive.google.com/file/d/1fb3GrIGErPOeugANgOwDWIquApqFkwll/view?usp=sharing' target='_blank'>
          MAS INFORMACIÓN
        </a>
      </button>

      {scrollPosition.y === 0 && (
        <button className='jump-animation fixed bottom-20 left-1/2 text-gray-800 p-5 rounded-full shadow'>
          <a href='#aboutme'><IoIosArrowDropdownCircle size={64} className='absolute' style={{ left: '-50%' }} color='#CCCCCC50' /></a>
        </button>
      )}
    </div>
  )
}