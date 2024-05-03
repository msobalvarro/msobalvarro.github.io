import React from 'react'

const IframeSoundCloud = () => {
  return (
    <div className='w-full mx-auto flex flex-col center-align'>
      <h2 className='text-3xl font-extrabold text-gray-900 sm:text-4xl p-10 text-center'>
        Escúchame Mezclar Música.
      </h2>

      <iframe width='100%' height='166' scrolling='no' frameBorder='no' allow='autoplay' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1503628858&color=%2361dbfb&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'></iframe>
    </div>
  )
}

export default IframeSoundCloud