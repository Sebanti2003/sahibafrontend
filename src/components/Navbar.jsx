// import React from 'react'
import { FaTruck } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className='flex max-md:flex-col navcolor mt-1 justify-between items-center p-3 gap-3'>
      <Link to='/' className='text-2xl font-bold font-[anzo9] flex items-center gap-2'>Mytalorzone<span className='text-sm'>By Sahiba</span></Link>
      <div className="text-md flex items-center gap-4 font-[anzonew] ">
        <Link to="/signup" className="text-lg font-bold group flex flex-col overflow-hidden">
          <div className="capitalize">signup</div>
          <div className="h-[2px] w-0 bg-black opacity-0 transition-all duration-500 group-hover:w-full group-hover:opacity-100"></div>
        </Link>

        <Link to="/about" className="text-lg font-bold group flex flex-col overflow-hidden">
          <div>Contact</div>
          <div className="h-[2px] w-0 bg-black opacity-0 transition-all duration-500 group-hover:w-full group-hover:opacity-100"></div>
        </Link>
      </div>
      <div className='flex  text-xl gap-8 items-center font-bold max-md:gap-16'>
        <FaTruck className='cursor-pointer hover:text-2xl transition-all duration-500' />
        <IoPersonOutline className='cursor-pointer hover:text-2xl transition-all duration-500' />
        <IoBagOutline className='cursor-pointer hover:text-2xl transition-all duration-500' />
      </div>
    </div>
  )
}

export default Navbar
