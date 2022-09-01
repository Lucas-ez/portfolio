import React from 'react'
import portrait from '../../img/portrait.jpeg'
import './home.css'

function Home() {
  return (
    <div className='Home'>
      <div className='home_text-section'>
        <div className='home_title'>Lucas Brest</div>
        <div className='home_subtitle'>{"< Desarrollador Web FullStack />"}</div>
        <div className='home_description'>Desarrollador web fullstack con capacidad de trabajar en el diseño y desarrollo de aplicaciones web y en la implementación de bases de datos relacionales. Orientado al uso de tecnologías web como HTML, CSS, JavaScript, React, Node.js y Bases de datos SQL. Con experiencia en el uso del software de control de versiones Git.</div>
      </div>
      <div className='home_img-section'>
        <img src={portrait} alt='portrait'/>
      </div>

    </div>
  )
}

export default Home