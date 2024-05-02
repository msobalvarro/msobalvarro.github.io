import React from 'react'

const Detail = ({ image, title, description }) => {
  return (
    <div className="flex items-center">
      <div className="w-1/2">
        <img src={image} alt="Imagen" className="w-full" />
      </div>
      <div className="w-1/2 px-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}


const ProjectsDetail = () => {
  return (
    <div className='py-16 px-4 flex flex-col'>

    </div>
  )
}

export default ProjectsDetail