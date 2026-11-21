import React from 'react'
import { ArrowRight } from 'lucide-react'

const Card = (Props) => {
  return (
    <div style={{backgroundImage: `url(${Props.image})`}} className="h-full bg-cover bg-center relative">
      <h1 className='text-xl font-bold p-1 bg-white rounded-full block w-fit absolute top-3 left-3' >{Props.No}</h1>
      <p className="pt-60 px-2 text-white"> {Props.paragraph} </p>
     <div className='flex justify-between absolute  bottom-2 left-2 right-2'>
        <button className='bg-blue-500 text-white p-2 rounded-full px-5'>Satisfied</button>
      <i className='bg-blue-500 text-white p-2 rounded-full'><ArrowRight /></i></div>
      
    </div>
  )
}

export default Card
