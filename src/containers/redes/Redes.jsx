import React from 'react'
import './redes.css'

import { Title } from '../../components'
import { HiMail } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'
import { BsTelegram, BsLinkedin, BsInstagram } from 'react-icons/bs'

function Redes() {
  return (
    <div className='Redes' id='redes'>
        <Title text={"Redes"}/>
        <div className='Redes_container'>
          <a href="">
            <HiMail className='Redes_icon'/>
          </a>
          <a href="">
            <FaGithub className='Redes_icon'/>
          </a>
          <a href="">
            <BsLinkedin className='Redes_icon'/>
          </a>
          <a href="">
            <BsTelegram className='Redes_icon'/>
          </a>
          <a href="">
            <BsInstagram className='Redes_icon'/>
          </a>
        </div>
    </div>
  )
}

export default Redes