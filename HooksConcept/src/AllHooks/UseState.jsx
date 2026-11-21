import React, { useState } from 'react'

const UseState = () => {

  const [num1, setnum1] = useState(2);
  const [num2, setnum2] = useState(3);
  const [numberArray, setNumArray] = useState([3,4,5,6,7,9]);

  function change() {
    setnum1(9);
    setnum2(88);
  }

  return (
    <div>

      <h1>
        I want to change this number from {num1} to {num2}
        and array will be {numberArray.join(", ")}
      </h1>

      <button onClick={change}>
        Click to change value
      </button>

    </div>
  )
}

export default UseState