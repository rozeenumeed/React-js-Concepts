import React from 'react'
import StoreArrayOfObj from './StoreArrayOfObj';

const App = () => {
 
  const heading="Rozeen Umeed";
  const age=21;

   localStorage.setItem("name", heading);
   localStorage.setItem("age", age);
   

    console.log(localStorage.getItem("age"));
    localStorage.removeItem("age");
   
  

  return (
      
    <div>
     <h1>{heading}</h1>
     <h2>{age}</h2>
     <StoreArrayOfObj/>
    </div>
  )
}

export default App

