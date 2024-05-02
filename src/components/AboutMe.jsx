import React from 'react'

const AboutMe = () => {
  return (
    <div className='bg-gray-100 py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-3xl mx-auto'>
        <h2 className='text-3xl font-extrabold text-gray-900 sm:text-4xl'>
          Acerca de mí
        </h2>
        <div className='mt-6 text-gray-700'>
          <p className='text-lg'>
            ¡Hola! Soy Samuel Sobalvarro, un desarrollador de aplicaciones apasionado por la programación.
          </p>

          <p className='mt-4 text-lg'>
            Desarrollador de páginas web desde 2015, experiencia en diseño de aplicaciones web y desarrollo de aplicaciones
            móviles desde 2017, desarrollador backend y consultor de datos desde 2019.
          </p>
          <p className='mt-4 text-lg'>
            Mi objetivo es superarme siempre en conocimiento y me encanta distraerme con la programación, en especial con <code>Javascript</code>.
          </p>
          <p className='mt-4 text-lg'>
            En mi tiempo libre, disfruto mucho de cocinar, escuchar música, mezclar musica, hacer ejercicio y la meditación.
            Siempre estoy buscando aprender nuevas cosas sobre música, cocina y habilidades en mi personalidad.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe