import { AnimationOnScroll } from 'react-animation-on-scroll'

export const Contributions = () => (
  <AnimationOnScroll animateIn='animate__fadeInUp'>
    <div className='w-full px-4 py-8 bg-[#0B181B] flex flex-col gap-4 items-center'>
      <h2 className='text-white text-2xl'>Contribuciones en GitHub</h2>
      <img alt='contributions' src='https://ghchart.rshah.org/msobalvarro' className='w-full md:w-[60%]' />

      <a href='https://github.com/msobalvarro' className='text-[#47abc4] hover:underline'>Ir a mi GitHub</a>
    </div>
  </AnimationOnScroll>
)