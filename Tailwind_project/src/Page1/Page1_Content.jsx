import React from 'react'
import LeftText from './LeftText'
import ImageContainer  from './ImageContainer'

const Page1_Content = () => {
  return (
    <div className="py-10 h-[90vh] flex items-center gap-10 justify-between px-18">
      <LeftText/>
      <ImageContainer/>
    </div>
  )
}

export default Page1_Content
