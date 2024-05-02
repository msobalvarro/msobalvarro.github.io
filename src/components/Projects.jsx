import React from 'react'
import entornovirtual from '../images/entornovirtual.jpg'
import energuate from '../images/energuate/image1.png'
import alysystem from '../images/alysystem/alysystem2.png'
import ultraval from '../images/ultraval/ultraval1.png'
// import Laptop from '../assets/laptop.jpg'

const SingleProject = ({ image, title, description, resume, }) => {
  return (
    <div className='max-w-[1240px] mx-auto my-10 grid md:grid-cols-2 flex flex-col'>
      <img className='w-[500px] my-auto my-10 object-cover h-48 w-96 rounded-lg shadow-xl dark:shadow-gray-800' src={image} alt='/' />

      <div className='flex flex-col justify-center'>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>{title}</h1>

        <p className='text-[#00df9a] font-bold'>{description}</p>

        <p>{resume}</p>
      </div>
    </div>
  )
}


const Projects = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>

      <SingleProject
        image={ultraval}
        title='Traslado de Valores de Nicaragua'
        description='Desarrollador Javascript Fullstack'
        resume={`
          Desarrollé una aplicación móvil administrativa que reemplaza todo el papeleo formal de remesas a
          digitalización de datos, tambien desarrollé plataforma de clientes de traslado de valores de Nicaragua, esta plataforma le permite al cliente Crear una
          solicitud de servicio, (esta plataforma fue desarrollada con react js y node).
        `}
      />

      <SingleProject
        image={alysystem}
        title='Alysystem'
        description='Desarrollador Javascript Fullstack'
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
