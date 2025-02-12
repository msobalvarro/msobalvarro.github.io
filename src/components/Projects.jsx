import React from 'react'
import entornovirtual from '../images/entornovirtual.jpg'
import energuate from '../images/energuate/image1.png'
import alysystem from '../images/alysystem/alysystem2.png'
import ultraval from '../images/ultraval/ultraval1.png'
import sessiones from '../images/triagons/sesiones-1.png'
import f8 from '../images/f8/f8-1.png'
import autex from '../images/autex/autex-3.png'
import customdigimedia from '../images/customdigimedia/customdigimedia-1.png'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { MdFavorite } from 'react-icons/md'
// import Laptop from '../assets/laptop.jpg'

const SingleProject = ({ image, title, description, resume, star }) => {
  return (
    <AnimationOnScroll animateIn='animate__fadeInUp'>
      <PhotoProvider>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 flex-col items-center relative'>
          <PhotoView src={image}>
            <img className='hover:scale-110 cursor-pointer transition w-full md:w-[500px] object-cover h-64 rounded-lg dark:shadow-gray-400' src={image} alt='/' />
          </PhotoView>

          <div className='flex flex-col justify-center relative'>
            <h2 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 uppercase text-white'>{title}</h2>

            {star && (
              <MdFavorite className='absolute top-0 right-0 text-4xl text-rose-600' />
            )}

            <p className='text-[#4dcbeb] font-bold'>{description}</p>

            <p className='text-white'>{resume}</p>
          </div>
        </div>
      </PhotoProvider>
    </AnimationOnScroll>
  )
}

export const Projects = () => {
  return (
    <div className='py-16 px-4 flex flex-col'>
      <h1 className='md:text-5xl sm:text-6xl text-4xl font-bold md:py-6 self-center uppercase text-white'>
        Proyectos relevantes
      </h1>

      <div className='space-y-12'>
        <SingleProject
          star={true}
          image={autex}
          title='Autex'
          description='Co Fundador de Autex'
          resume={`
            Sistema de automatización Autex, este sistema esta dirigido a empresas talleres automotrices (vehículos y motos), 
            este sistema lleva procesos muy detallados sobre como organizar tu taller automotríz para llevar el mejor control de tus clientes, 
            lo cual permite organizar ordenes de servicio, 
            presupuestos, clientes, facturas, traking de servicio del vehiculo y ganancias de tu taller. 
          `}
        />

        <SingleProject
          image={f8}
          title='F8 Technologies'
          description='Desarrollador Javascript Full Stack'
          resume={`
            Desarrollo de página web de la empresa F8 Technologies, junto a su aplicaciòn móvil de administración,
            esta app administra productos, servicios mensajes y todo lo relacionado con configuraciones del sitio web F8
          `}
        />

        <SingleProject
          image={sessiones}
          title='Triagons (Seis Treinta)'
          description='Desarrollador Javascript Full Stack'
          resume={`
            Participe en el desarrollode de la plataforma Sesiones, 
            donde participe en el desarrollo frontend con React y backend con node (express y graphql).
          `}
        />

        <SingleProject
          image={ultraval}
          title='Traslado de Valores de Nicaragua'
          description='Desarrollador Javascript Full Stack'
          resume={`
            Desarrollé una aplicación móvil administrativa que reemplaza todo el papeleo formal de remesas a
            digitalización de datos, tambien desarrollé plataforma de clientes de traslado de valores de Nicaragua, esta plataforma le permite al cliente Crear una
            solicitud de servicio, (esta plataforma fue desarrollada con react js y node).
          `}
        />

        <SingleProject
          image={alysystem}
          title='Alysystem'
          description='Desarrollador Javascript Full Stack'
          resume={`
          Participación en el desarrollo de la plataforma de inversiones Speedtradings, esta plataforma requería un sistema de
          administración de la plataforma de usuario (Plataforma Web y Android), encargado del desarrollo
          backend, frontend y aplicaciones móviles de este proyecto.

          Desarrollo de Sistema AlyPay, cartera electrónica de criptomonedas nicaragüense, toda esta
          plataforma fue desarrollada con la tecnología 100% Javascript.
          `}
        />

        <SingleProject
          image={energuate}
          title='The Data Age'
          description='Desarrollador Javascript y Consultor de datos'
          resume={`
            Desarrollador web y aplicaciones móviles para la empresa Energuate. 
            
            Participe en el desarrollo de la
            oficina virtual de Energuate (Empresa de energía Guatemalteca), plataforma que alcanzaba miles y
            miles de visitas al día por clientes de Energuate.

            Desarrollo de Aplicación Oficina Virtual Energuate en la plataforma de Android & iOS, aplicación
            desarrollada con Javascript (Reat-Native).
          `}
        />


        <SingleProject
          image={entornovirtual}
          title='Universidad de Managua'
          description='Diseñador Web'
          resume={`
            Desarrollo de plataforma virtual (Entorno Virtual UDEM 2016) donde fui encargado de desarrollar la interfaz web de
            plataforma virtual, donde los estudiantes podían ocupar la plataforma como una oficina virtual para consultar clases,
            notas acomuladas y entre otras funciones.
          `}
        />
      </div>
    </div>
  )
}
