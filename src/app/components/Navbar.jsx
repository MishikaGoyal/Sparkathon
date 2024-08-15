import Link from 'next/link'
import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  return (
   <div className='bg-blue-100'>



    <div className=' flex justify-between gap-[100px] '>
      <ul className='flex gap-[40px] ml-[620px] mt-[50px]'><Link href="./shop"><li className='font-bold text-xl mb-4 rounded-full bg-gray-100 px-4  hover:bg-blue-400'>Shop</li></Link>
      <li className='font-bold text-xl  mb-4 rounded-full bg-gray-100 px-4  hover:bg-blue-400'>About</li>
      <li className='font-bold text-xl  mb-4 rounded-full bg-gray-100 px-4  hover:bg-blue-400'>Contact</li></ul>
      
        <ul className=' flex gap-[20px] mr-[20px]'>
        <Link href='./cart'><li className='font-bold text-lg '><FaShoppingCart  className='mt-[15px] text-xl'/></li></Link>
        <Link href='./Profile'><li className='font-bold text-lg '><CgProfile  className='mt-[15px] text-xl'/></li></Link>
        </ul>
      
    </div>
    </div>
  )
}

export default Navbar