import React, { useState } from 'react'
import UseState from './AllHooks/UseState'
import Counter_with_UseState from './AllHooks/Counter_with_UseState'
import FormHandling from './AllHooks/FormHandling'
import EnteringData from './AllHooks/EnteringData'
import UseEffect from './AllHooks/UseEffect'


const App = () => {

  return (
    <div>
      <UseState/>
      <Counter_with_UseState/>
      <FormHandling/>
      <EnteringData/>
      <UseEffect/>
      </div>
  )
}

export default App
