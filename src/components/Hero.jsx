import { ReactTyped } from 'react-typed'
import reactImage from '../images/react-2.svg'

const skillsDetails = [
  'Desarrollador Frontend',
  'Desarrollador Backend',
  'Desarrollador de Aplicaciones móviles',
  'Diseñador UX/UI',
]

const Hero = () => {
  return (
    <div className='max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center text-white bg-javascript'>
      <img alt='react' className='object-scale-down h-48 w-48 self-center girar-animacion' src={reactImage} />

      <h1 className='md:text-5xl sm:text-6xl text-4xl font-bold p-0'>
        SAMUEL SOBALVARRO
      </h1>

      <div className='flex justify-center items-center'>
        <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4'>
          <ReactTyped
            className='md:text-4xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#61dbfb]'
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

      <button className='bg-[#61dbfb] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>
        <a rel='noreferrer' href='https://drive.google.com/file/d/1fb3GrIGErPOeugANgOwDWIquApqFkwll/view?usp=drive_link' target='_blank'>
          MAS INFORMACIÓN
        </a>
      </button>
    </div>
  )
}

export default Hero