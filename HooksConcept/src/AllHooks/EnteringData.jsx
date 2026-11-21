import React, { useState } from 'react'

const EnteringData = () => {

  const [title, setTitle] = useState("")

  function ReloadNaHo(e) {
    e.preventDefault();
    setTitle("");
  }

  return (
    <div>
      <form onSubmit={ReloadNaHo}>

        <input
          type="text"
          value={title}
          placeholder="Enter something"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <button>Submit</button>

      </form>
    </div>
  )
}

export default EnteringData