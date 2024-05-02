import React from 'react'
import { ReactTyped } from 'react-typed'
import reactImage from '../images/react-2.svg'

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <img className='object-scale-down h-48 w-48 self-center girar-animacion' src={reactImage} />

        <p className='text-[#00df9a] font-bold p-2'>
          DESARROLLADOR JAVASCRIPT FULLSTACK
        </p>

        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          SAMUEL SOBALVARRO
        </h1>

        <div className='flex justify-center items-center'>
          <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4'>
            Desarrollo de aplicaciones con
          </p>

          <ReactTyped
            className='md:text-4xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['React.js', 'Vue.js', 'React-Native', 'Node.js', 'Express']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>

        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>DESCARGAR CV</button>
      </div>
    </div>
  )
}

export default Hero