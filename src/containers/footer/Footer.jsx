import React from 'react'
import './footer.css'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'

function Footer() {
  return (
    <div className='Footer'>
      <div className='Footer_text'>Copyright © 2022, Lucas Brest</div>
      <a href='/#home'><BsFillArrowUpCircleFill className='Footer_button'/></a>
    </div>
  )
}

export default Footer