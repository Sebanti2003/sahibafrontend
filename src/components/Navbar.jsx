// import React from 'react'
import { FaTruck } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <div className='flex max-md:flex-col navcolor mt-1 justify-between items-center p-3 gap-3'>
      <div className='max-md:w-full'>
        <input placeholder='Search...' className='w-full p-2 placeholder:text-sm placeholder:font-[anzonew] border-2 border-black rounded-lg' type="text" />
      </div>
      <div className='text-2xl font-bold font-[anzo9]'>Mytalorzone <span className='text-sm'>By Sahiba</span></div>
      <div className='flex  text-xl gap-8 items-center font-bold max-md:gap-16'>
        <FaTruck className='cursor-pointer hover:text-2xl transition-all duration-500' />
        <IoPersonOutline className='cursor-pointer hover:text-2xl transition-all duration-500' />
        <IoBagOutline className='cursor-pointer hover:text-2xl transition-all duration-500' />
      </div>
    </div>
  )
}

export default Navbar
