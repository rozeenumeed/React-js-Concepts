import React,{useState} from 'react'

const App = () => {
  function handleSubmit(e){
    e.preventDefault();
    console.log("Form submitted");
  }
  function handleChange(e){
   console.log(e.target.value);
  }
  return (
    <div>
      <form>
          <label for="name">Name</label>
          <input type="text" id="name" onChange={handleChange}/>
          <label for="email">Email</label>
          <input type="email" id="email"/>
          <label for="password">Password</label>
          <input type="password" id="password"/>
          <button type='submit' onClick={handleSubmit}>
            Submit
          </button>
      </form>
    </div>
  )
}

export default App
