import React from 'react'
import './header.css'
import { Navbar } from '../../components'
import logo from './../../img/logo.png'

function Header() {
  return (
    <div className='Header'>
      <img src={logo} alt="Logo" className='logo'/>
      <Navbar/>
    </div>
  )
}

export default Header