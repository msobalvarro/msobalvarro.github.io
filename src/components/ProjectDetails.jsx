import React from 'react'
import energuate1 from '../images/energuate/image1.png'
import energuate2 from '../images/energuate/image2.png'
import energuate3 from '../images/energuate/image3.png'
import energuate4 from '../images/energuate/image4.png'

const Detail = ({ images = [], title, description, links = [] }) => {
  return (
    <div className='flex items-center'>
      <div className='overflow-x-auto whitespace-nowrap w-128'>
        <div className='flex'>
          {images.map((image, index) => (
            <img src={image} alt={`Image ${index}`} key={index} className='mr-4 object-cover h-96' />
          ))}
        </div>
      </div>

      <div className='ml-4 flex-auto'>
        <h2 className='text-xl font-bold text-[#61dbfb]'>{title}</h2>
        <p className='text-gray-600'>{description}</p>

        <div className='mt-4 space-x-4 flex justify-items-center w-full bg-gray p-10'>
          {links.map((link, index) => (
            <a href={link.url} key={index}>
              <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>
                {link.text}
              </button>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}


const ProjectsDetail = () => {
  return (
    <div className='max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center text-white'>
      <h1 className='md:text-5xl sm:text-6xl text-4xl font-bold md:py-6 self-center uppercase text-black'>
        Proyectos Publicos
      </h1>


      <Detail
        title='Energuate Aplicaciones'
        links={[
          {
            url: '/',
            text: 'Ir a Appstore'
          },
          {
            url: '/',
            text: 'Ir a Playstore'
          }
        ]}
        description='Puedes descagar la aplicación en ambas plataformas'
        images={[energuate1, energuate2, energuate3, energuate4]} />
    </div>
  )
}

export default ProjectsDetail