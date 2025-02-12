import React from 'react'
import energuate3 from '../images/energuate/image3.png'
import energuate4 from '../images/energuate/image4.png'
import energuate6 from '../images/energuate/image6.png'
import f8image1 from '../images/f8/f8-1.png'
import f8Image2 from '../images/f8/f8-2.png'
import f8Image3 from '../images/f8/f8-3.png'
import f8Image4 from '../images/f8/f8-4.png'
import autex1 from '../images/autex/autex-1.png'
import autex2 from '../images/autex/autex-2.png'
import autex3 from '../images/autex/autex-3.png'
import autex4 from '../images/autex/autex-4.png'
import { PhotoProvider, PhotoView } from 'react-photo-view'

const Detail = ({ images = [], title, description, links = [] }) => {
  return (
    <div className='flex flex-col gap-4 items-center bg-black/[0.2] backdrop-blur p-4 rounded'>
      <div className='overflow-x-auto whitespace-nowrap w-128 p-4 rounded'>
        <div className='flex'>
          <PhotoProvider>
            {images.map((image) => (
              <PhotoView src={image}>
                <img src={image} alt='detail' key={crypto.randomUUID()} className='mr-4 object-cover h-96 cursor-pointer rounded' />
              </PhotoView>
            ))}
          </PhotoProvider>
        </div>
      </div>

      <div className='ml-4 flex-auto relative'>
        <div className='space-y-4'>
          <h2 className='text-2xl font-bold text-[#5fbbcf] uppercase'>{title}</h2>
          <p className='text-white'>{description}</p>
        </div>

        <div className='space-x-4 flex items-center justify-center w-full bg-gray p-10'>
          {links.map((link) => (
            <a rel='noreferrer' href={link.url} key={crypto.randomUUID()} target='_blank'>
              <button className='bg-[#61dbfb] text-black py-2 px-4 rounded'>
                {link.text}
              </button>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}


export const PublicProjects = () => {
  return (
    <div className='py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-[1024px] w-full mx-auto text-center flex flex-col justify-center text-white'>
        <h1 className='md:text-5xl sm:text-6xl text-4xl font-bold md:py-6 self-center uppercase text-white mb-10'>
          Proyectos Públicos
        </h1>


        <div className='flex flex-col gap-8'>
          <Detail
            title='Autex – Sistema de Automatización para Talleres Automotrices'
            links={[
              {
                url: 'mailto:dev.msobalvarro@gmail.com?subject=Sistema%20Autex&body=Hola!%20Me%20gustaría%20conseguir%20un%20usuario%20de%20Autex.',
                text: 'Conseguir Autex'
              }
            ]}
            description={`
              Autex es un sistema diseñado para optimizar la gestión de talleres automotrices, 
              tanto de vehículos como de motocicletas. 
              
              Proporciona un control detallado de todos los procesos operativos, 
              permitiendo una administración eficiente de órdenes de servicio, presupuestos, 
              clientes, facturación y seguimiento del estado de los vehículos en servicio. Además, 
              facilita el monitoreo de ingresos y ganancias, ayudando a maximizar la rentabilidad y mejorar la 
              experiencia del cliente.
              `}
            images={[autex1, autex2, autex3, autex4]} />

          <Detail
            title='F8 Technologies'
            links={[
              {
                url: 'https://www.f8technologies.com',
                text: 'Ir a Sitio'
              }
            ]}
            description='Desarrollo del sitio web profesional de F8 Technologies, acompañado de una aplicación de administración que permite gestionar y optimizar su contenido y operaciones de manera eficiente.'
            images={[f8image1, f8Image2, f8Image3, f8Image4]} />

          <Detail
            title='Energuate Aplicaciones'
            links={[
              {
                url: 'https://oficinavirtual.energuate.com/mifactura',
                text: 'Oficina Virtual'
              },
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
    </div>
  )
}
