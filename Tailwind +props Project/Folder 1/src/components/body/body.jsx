import React from 'react'
import Left from './Left'
import Right from './Right'

const Body = () => {
  return (
    <div className="flex w-full h-screen p-4 bg-gray-200">
      <Left />
      <Right />
    </div>
  )
}

export default Body
