import React from 'react'
import Men from './men'
import Women from './women'
import Kids from './kids'
import { Link,Outlet } from 'react-router-dom'


const Product = () => {
  return (
    <div>
      <Link to="Men" >Men</Link>
      <Link to="Women" >Women</Link>
      <Link to="Kids" >Kids</Link>
      <Outlet/>
    </div>
  )
}

export default Product
