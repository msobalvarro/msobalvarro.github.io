export const Footer = () => {
  return (
    <footer className='bg-[#0B181B] flex md:flex-row flex-col text-white py-8 px-5 w-full items-center justify-between'>
      <div className='flex mb-4 md:mb-0 flex-col md:flex-row items-center space-y-2'>
        <img
          className='md:w-12 w-24 rounded-full shadow-lg mr-4'
          src='https://github.com/msobalvarro.png'
          alt='Foto de perfil'
        />

        <div className='text-center md:text-left'>
          <h3 className='font-bold text-lg text text-[#61dbfb]'>Samuel Sobalvarro</h3>
          <p className='text-sm'>
            Nacido en Managua, Nicaragua. Desarrollando aplicaciones desde 2016.
          </p>
        </div>
      </div>

      <div className='text-center md:text-right'>
        <a rel='noreferrer' href='https://www.linkedin.com/in/samuel-sobalvarro-127227160/' className='text-gray-400 hover:text-white mr-4' target='_blank'>LinkedIn</a>
        <a rel='noreferrer' href='https://drive.google.com/file/d/1fb3GrIGErPOeugANgOwDWIquApqFkwll/view?usp=sharing' target='_blank' className='text-gray-400 hover:text-white mr-4'>Hoja de Vida</a>
        <a rel='noreferrer' href='https://github.com/msobalvarro' target='_blank' className='text-gray-400 hover:text-white mr-4'>GitHub</a>

        <a href='mailto:dev.msobalvarro@gmail.com' className='text-gray-400 hover:text-white'>Correo Electrónico</a>
      </div>
    </footer>
  )
}