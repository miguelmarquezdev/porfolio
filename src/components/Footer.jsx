import React from 'react'
import { GoHeartFill } from "react-icons/go";


const Footer = () => {
  return (
    <div className=' bg-neutral-950 py-5 text-center text-sm text-gray-400'>
     <span className='flex justify-center items-center gap-1'><GoHeartFill className='text-red-600'/> Diseñado por Miguel Marquez </span>
    </div>
  )
}

export default Footer
