import React from 'react'

const StoreArrayOfObj = () => {

    
   const user={
    name:"roziii",
    city:"isb",
    age:21
   }

    localStorage.setItem("user",JSON.stringify(user));
    console.log(JSON.parse(localStorage.getItem("user")));
    console.log("Object is saved on local Storage");

  return (
    <div>
      
    </div>
  )
}

export default StoreArrayOfObj
