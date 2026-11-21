import React from 'react'

const Cards = (a) => {

  return (
        
      <div className="card">
       
        <img src="https://images.unsplash.com/photo-1785602312686-fe02266a52bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D"/>
        <h1>{a.user}</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <button>View Profile </button>
      </div>
      
  );
}



export default Cards;
