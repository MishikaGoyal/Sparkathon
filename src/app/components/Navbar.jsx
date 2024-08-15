import Link from 'next/link'
import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  return (
   <div className='bg-purple-100'>



    <div className=' flex justify-between gap-[40px] '>
      <ul className='flex gap-[10px] ml-[620px] mt-[50px]'><Link href="./shop"><li className='font-bold text-lg mb-4 '>Shop</li></Link>
      <li className='font-bold text-lg '>About</li>
      <li className='font-bold text-lg '>Contact</li></ul>
      
        <ul className=' flex gap-[20px] mr-[20px]'>
        <Link href='./cart'><li className='font-bold text-lg '><FaShoppingCart  className='mt-[15px] text-xl'/></li></Link>
        <Link href='./profile'><li className='font-bold text-lg '><CgProfile  className='mt-[15px] text-xl'/></li></Link>
        </ul>
      
    </div>
    </div>
  )
}

export default Navbar