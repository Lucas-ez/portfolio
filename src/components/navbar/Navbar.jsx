import React from 'react'
import './navbar.css'
import { BsHouse } from 'react-icons/bs';

function Navbar() {
  return (
    <div className='navbar'>
      <a href='#home'><BsHouse className='house-icon'/></a>
      <a href='#proyectos'>Proyectos</a>
      <a href='#tecnologias'>Tecnologías</a>
      
    </div>
  )
}

export default Navbar