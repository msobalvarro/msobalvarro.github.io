import React from 'react'
import entornovirtual from '../images/entornovirtual.jpg'
import energuate from '../images/energuate/image1.png'
import alysystem from '../images/alysystem/alysystem2.png'
import ultraval from '../images/ultraval/ultraval1.png'
import sessiones from '../images/triagons/sesiones-1.png'
// import Laptop from '../assets/laptop.jpg'

const SingleProject = ({ image, title, description, resume, }) => {
  return (
    <div className='max-w-[1240px] mx-auto my-10 grid md:grid-cols-2 flex flex-col'>
      <img className='hover-image w-[500px] object-cover h-64 w-96 rounded-lg shadow-xl dark:shadow-gray-400' src={image} alt='/' />

      <div className='flex flex-col justify-center'>
        <h2 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 uppercase'>{title}</h2>

        <p className='text-[#318ca3] font-bold'>{description}</p>

        <p>{resume}</p>
      </div>
    </div>
  )
}


const Projects = () => {
  return (
    <div className='py-16 px-4 flex flex-col'>
      <h1 className='md:text-5xl sm:text-6xl text-4xl font-bold md:py-6 self-center uppercase'>
        Proyectos relevantes
      </h1>

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
  )
}

export default Projects
