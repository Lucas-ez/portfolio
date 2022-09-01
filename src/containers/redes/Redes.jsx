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

          <div className='Redes_container_left'>
            <div className='Redes_name'>
              Lucas Brest
            </div>
            <div className='Redes_mail'>
              <HiMail className='Redes_mail-icon'/>
              <span>lbrest07@gmail.com</span>
            </div>
            <div className='Redes_location'>
              Merlo, Buenos Aires - Argentina
            </div>

          </div>
          <div className='Redes_container_right'>
            <a href="https://github.com/Lucas-ez" target={"_blank"} rel="noopener noreferrer">
              <FaGithub className='Redes_icon'/>
            </a>
            <a href="https://www.linkedin.com/in/lucasbrest-fullstack/" target={"_blank"} rel="noopener noreferrer">
              <BsLinkedin className='Redes_icon'/>
            </a>
            <a href="https://t.me/ez_lz" target={"_blank"} rel="noopener noreferrer">
              <BsTelegram className='Redes_icon'/>
            </a>
            <a href="https://www.instagram.com/lucasbrest_/" target={"_blank"} rel="noopener noreferrer">
              <BsInstagram className='Redes_icon'/>
            </a>
          </div>

        </div>
    </div>
  )
}

export default Redes