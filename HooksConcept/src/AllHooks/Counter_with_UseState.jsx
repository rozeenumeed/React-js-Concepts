import React, { useState } from 'react'

const Counter_with_UseState = () => {

    // usesate asyns hota ha is liyee agr hum set krny ky bad print krwin console py to previous value sho hoti ha bcz ui ma update thory time lata ha but conle py instantly result sho hota ha to uski mememory m previous value par hoti ha wo print ho jati then ui py set hoti ha ar memory update hoti h ab jb dobara run krain gy to  updated value h ay gi
    

    const [Number,setnum]=useState(0)

    function inc(){
      setnum(a++);
    }
    function dec(){
      setnum(a--);
    }
    function jump(){
        setnum(num+5);
    }

  return (
    <div className='box'>
      <h1>0</h1>
       <button onClick={inc}>Increase</button>
       <button onClick={dec}>Decrease</button>
       <button onClick={jump}>Jump by 5</button>
    </div>
  )
}

export default Counter_with_UseState
