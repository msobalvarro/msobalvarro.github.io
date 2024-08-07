export const Footer = () => {
  return (
    <footer className='bg-gray-800 flex justify-center text-white py-8 px-5'>
      <div className='container flex justify-between'>
        <div className='flex flex-col md:flex-row items-center justify-between'>
          <div className='flex items-center mb-4 md:mb-0'>
            <img
              className='w-12 h-12 rounded-full shadow-lg mr-4'
              src='https://lh3.googleusercontent.com/a/ACg8ocKF_0-eEXZPnCDQfEwSI4Z70SYlzyIqLQuqVozLZ6K6HfIH69k=s192-c-rg-br100' // Aquí debes reemplazar con la ruta de tu imagen
              alt='Foto de perfil'
            />
            <div>
              <h3 className='font-bold text-lg text text-[#61dbfb]'>Samuel Sobalvarro</h3>
              <p className='text-sm'>
                Nacido en Managua, Nicaragua. Desarrollando aplicaciones desde 2016.
              </p>
            </div>
          </div>
        </div>
        <div className='text-center md:text-right'>
          <p>Derechos de autor © {new Date().getFullYear()}. Todos los derechos reservados.</p>

          <div className='mt-4'>
            <a rel='noreferrer' href='https://www.linkedin.com/in/samuel-sobalvarro-127227160/' className='text-gray-400 hover:text-white mr-4' target='_blank'>LinkedIn</a>
            <a rel='noreferrer' href='https://drive.google.com/file/d/1fb3GrIGErPOeugANgOwDWIquApqFkwll/view?usp=drive_link' target='_blank' className='text-gray-400 hover:text-white mr-4'>Hoja de Vida</a>
            <a rel='noreferrer' href='https://github.com/msobalvarro' target='_blank' className='text-gray-400 hover:text-white mr-4'>GitHub</a>

            <a href='mailto:dev.msobalvarro@gmail.com' className='text-gray-400 hover:text-white'>Correo Electrónico</a>
          </div>
        </div>
      </div>
    </footer>
  )
}