import React from 'react'

const FormHandling = () => {

    function ReloadNaHo(e){
        e.preventDefault();
    }

  return (
    <div>
      <form onSubmit={function(e){
            ReloadNaHo(e)
      }}>
        <input type="text" placeholder='Enter something'></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default FormHandling
