import React from 'react'
import { FaReact, FaHtml5, FaCss3, FaBootstrap } from 'react-icons/fa'
import { DiNodejs } from 'react-icons/di'
import { SiRedux, SiLodash, SiSocketdotio, SiGooglemaps, SiGooglecloud } from 'react-icons/si'

const MarqueeIcons = () => {
  return (
    <div className='w-full flex text-white text-6xl p-5 justify-evenly'>
      <FaHtml5 />
      <FaCss3 />
      <FaBootstrap />
      <SiLodash />
      <FaReact />
      <SiRedux />
      <SiSocketdotio />
      <SiGooglemaps />
      <DiNodejs />
      <SiGooglecloud />
    </div>
  )
}

export default MarqueeIcons