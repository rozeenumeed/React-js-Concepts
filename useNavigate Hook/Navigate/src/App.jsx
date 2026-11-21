
import React from 'react'
import { useNavigate, Route, Routes } from 'react-router-dom'
import Home from './components/home'
import Login from './components/login'

const App = () => {

  const navigate = useNavigate();

  function OpenHome() {
    navigate('/Home');
  }

  return (
    <Routes>
      <Route path="/" element={<Login function={OpenHome} />} />
      <Route path="/Home" element={<Home />} />
    </Routes>
  )
}

export default App