import React from 'react'
import energuate3 from '../images/energuate/image3.png'
import energuate4 from '../images/energuate/image4.png'
import energuate6 from '../images/energuate/image6.png'

const Detail = ({ images = [], title, description, links = [] }) => {
  return (
    <div className='flex flex-col md:flex-row items-center'>
      <div className='overflow-x-auto whitespace-nowrap w-128'>
        <div className='flex'>
          {images.map((image) => (
            <img src={image} alt='detail' key={crypto.randomUUID()} className='mr-4 object-cover h-96' />
          ))}
        </div>
      </div>

      <div className='ml-4 flex-auto'>
        <h2 className='text-xl font-bold text-[#318ca3] uppercase'>{title}</h2>
        <p className='text-gray-600'>{description}</p>

        <div className='mt-4 space-x-4 flex justify-items-center w-full bg-gray p-10'>
          {links.map((link) => (
            <a rel='noreferrer' href={link.url} key={crypto.randomUUID()} target='_blank'>
              <button className='bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded'>
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
    <div className='bg-gray-100 py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-[1024px] w-full h-screen mx-auto text-center flex flex-col justify-center text-white'>
        <h1 className='md:text-5xl sm:text-6xl text-4xl font-bold md:py-6 self-center uppercase text-black'>
          Proyectos Públicos
        </h1>


        <Detail
          title='Energuate Aplicaciones'
          links={[
            {
              url: 'https://apps.apple.com/hn/app/energuate/id1440777870',
              text: 'Ir a Appstore'
            },
            {
              url: 'https://play.google.com/store/apps/details?id=com.oficinavirtualmobile&hl=es_AR',
              text: 'Ir a Playstore'
            }
          ]}
          description='Puedes descagar la aplicación en ambas plataformas, Oficina comercial para gestiones comerciales'
          images={[energuate3, energuate6, energuate4]} />
      </div>
    </div>
  )
}

export default ProjectsDetail