'use client'
import React from 'react'
import Navbar from './components/Navbar'
import Carousel from './components/Caraousel'
import Link from 'next/link';


function page() {
  const images = [
    'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1654796372572-2d27975b7981?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdXNlaG9sZCUyMHByb2R1Y3RzfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1524638088-758d9961fc6f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFja2VkJTIwZHJpbmtzfGVufDB8fDB8fHww',
  ];
  return (
    <div>
      <Navbar />
 <Carousel images={images} />
 <div className='mt-[100px] flex gap-10 ml-[40px]'>
 <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src="https://i.pinimg.com/originals/73/45/e1/7345e190f188ca92d5f2a18c005278da.gif"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-semibold">Product Prediction</h2>
    <p></p>
    <div className="card-actions">
    <Link href='./ProductPrediction'><button className="bg-blue-100 m-auto p-[6px] rounded-xl mt-6">Get Now</button></Link>
    </div>
  </div>
</div>
<div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src="https://i.pinimg.com/originals/66/5c/8c/665c8c15d93ed92c2d362fd5d2b3abfb.gif"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title mt-6 font-semibold">Demand Analysis</h2>
    <p></p>
    <div className="card-actions">
    <Link href='./DemandAnalyasis'><button className="bg-blue-100 m-auto p-[6px] rounded-xl mt-6">Get Now</button></Link>
    </div>
  </div>
</div>
<div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src="https://i.pinimg.com/originals/0d/36/5e/0d365ef226575b1fc775a182ab989a13.gif"
      alt="Shoes"
      className="rounded-xl w-[220px] ml-[20px] " />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title ml-6 mt-4 font-semibold">Personalised offer</h2>
    <p></p>
    <div className="card-actions">
    <Link href='./PersonalisedOffer' > <button className="bg-blue-100 m-auto p-[6px] rounded-xl mt-4">Get Now</button></Link>
    </div>
  </div>
</div>
<div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src="https://i.pinimg.com/originals/a9/e6/98/a9e698ffd8e52ce57ee8e9bf42c6dbb4.gif"
      alt="Shoes"
      className="rounded-xl w-[220px] ml-[40px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title ml-6 mt-4 font-semibold">Customer Fragmentation</h2>
    <p></p>
    <div className="card-actions">
    <Link href='./CustomerFragmentation'> <button className="bg-blue-100 m-auto p-[6px] rounded-xl mt-6 ml-[10px]">Get Now</button></Link>
    </div>
  </div>
</div>
 </div>
    </div>
  )
}

export default page