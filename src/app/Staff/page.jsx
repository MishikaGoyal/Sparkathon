import React from 'react'
import Link from 'next/link'
import Carousel from '../components/Caraousel'
import Navbar from '../components/Navbar';
function page() {
  const images = [
    'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1654796372572-2d27975b7981?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdXNlaG9sZCUyMHByb2R1Y3RzfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1524638088-758d9961fc6f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFja2VkJTIwZHJpbmtzfGVufDB8fDB8fHww',
  ];
  return (
    <div>
          
          <Navbar />
          <h1 className='text-2xl font-bold mt-[10px]'>Welcome Back!</h1>
          <Carousel images={images}/>
      <div className='flex gap-[30px] ml-[150px]'>
    
     
        <div className="card bg-base-100 w-96 shadow-xl mt-[150px]">
  <figure className="px-10 pt-10">
    <img
      src="https://i.pinimg.com/originals/5d/92/b5/5d92b536434232587c9d3927eabc4e2f.gif"
      alt="Shoes"
      className="rounded-xl mt-[60px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-semibold">Demand Analysis</h2>
    
    <div className="card-actions">
    <Link href='./DemandAnalyasis'> <button className="bg-blue-100 m-auto p-[10px] rounded-xl mt-[50px]">Click</button></Link> 
    </div>
  </div>
</div>
<div className="card bg-base-100 w-96 shadow-xl mt-[150px]">
  <figure className="px-10 pt-10">
    <img
      src="https://i.pinimg.com/originals/31/30/2b/31302b78a79651e2633627f68a328245.gif"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-semibold">Customer Fragmentation</h2>
   
    <div className="card-actions">
      <Link href='./CustomerFragmentation'><button className="bg-blue-100 m-auto p-[10px] rounded-xl mt-4">Click</button></Link>
    </div>
  </div>
</div>
<div className="card bg-base-100 w-96 shadow-xl mt-[150px]">
  <figure className="px-10 pt-10">
    <img
      src="https://i.pinimg.com/originals/a9/e6/98/a9e698ffd8e52ce57ee8e9bf42c6dbb4.gif"
      alt="Shoes"
      className="rounded-xl w-[220px] ml-[40px] mt-[40px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title ml-6 mt-4 font-semibold">Map Navigation</h2>
    <p></p>
    <div className="card-actions">
    <Link href='./Storemap' > <button className="bg-blue-100 m-auto p-[6px] rounded-xl mt-4">Explore</button></Link>
    </div>
  </div>
 
</div>
      </div>
    </div>
  )
}

export default page