import React from 'react'
import {ArrowRight} from 'lucide-react';
const RightCard = () => {
  return (
    <div className='h-full w-80 relative overflow-hidden bg-red-500 rounded-4xl'>
      <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D" />
    <div className='absolute top-0 left-0 h-full w-full  flex flex-col justify-between '>
     <h1 className='bg-white rounded-full p-8 h-3 w-3 text-2xl font-bold flex justify-center items-center'>1 </h1>
     <div className='p-8'>
     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, a?</p>

     <div flex justify-between>
        <button className='bg-blue-600 text-white font-mediumpx-7 py-3 '>Satisfied</button>
        <button className='bg-blue-600 text-white font-mediumpx-7 py-3 '><ArrowRight /></button>
     </div>
     </div>
    </div>
    </div>
  )
}

export default RightCard
