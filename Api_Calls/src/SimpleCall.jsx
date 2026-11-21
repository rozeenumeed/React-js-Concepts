import React from 'react'

const SimpleCall = () => {
     const GetData=
  async function(){
    const respone= await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data=await respone.json();
    console.log(data);
  }
  return (
    <div>
      
    </div>
  )
}

export default SimpleCall
