import React from 'react'
import {useState} from 'react'

// hum us efefct ma task ko restrit kr sky han ky ya sirf tb chalyyyy 
const UseEffect = () => {

    const [num1,setnum1]= useState(0)
    const [num2,setnum2]= useState(100)

    function ChangingA(){
        console.log("a is changing")
    }
     function ChangingB(){
        console.log("b is changing")
    }

    useEffect(function(){
        ChangingA();
    },[num1]);

  return (

    <div>
        <h1>num1 is {num1}</h1>
        <h1>num2 is {num2}</h1>
      <button onClick={function(){
        setnum1(num1+1)
      }}>Increase</button>
      <button onClick={function(){
        setnum2(num2-1)
      }}>Decrease</button>
    </div>
  )
}

export default UseEffect
