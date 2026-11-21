import React from 'react'
import {Link} from 'react-router-dom'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Product from './pages/product'
import Men from './pages/men'
import Women from './pages/women'
import Kids from './pages/kids'
import Courses from './pages/courses'
const App = () => {
  return (
    <div>
    
   

    <div className='bg-amber-700  flex justify-between p-2 text-white '>
       <h1>Rozeen</h1>
       <div className='flex gap-3'>
        <Link to="/">Home</Link>
       <Link to="/About">About Us</Link>
      <Link to="/Contact">Contact Us</Link>
      <Link to="/Product">Product</Link>
      <Link to="/Course">Course</Link>
       </div>
     
    </div>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Product' element={<Product/>}>
         <Route path='Men' element={<Men/>}/>
          <Route path='Women' element={<Women/>}/>
           <Route path='Kids' element={<Kids/>}/>
      </Route> 
      <Route path='/Course/:id' element={<Courses/>}/>
    </Routes>
   
    </div>
  )
}

export default App
