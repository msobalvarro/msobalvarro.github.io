import React from 'react'
import { FaReact, FaHtml5, FaCss3, FaBootstrap, FaSass } from 'react-icons/fa'
import { DiNodejs } from 'react-icons/di'
import { SiRedux, SiLodash, SiSocketdotio, SiGooglemaps, SiGooglecloud } from 'react-icons/si'

export const MarqueeIcons = () => {
  return (
    <div className='bw-full bg-gray-100 flex text-[#1f1f1f] text-4xl p-5 justify-evenly'>
      <FaHtml5 />
      <FaCss3 />
      <FaSass />
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
