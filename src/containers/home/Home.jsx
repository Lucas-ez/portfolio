import React from 'react'
import portrait from '../../img/portrait.jpeg'
import './home.css'

function Home() {
  return (
    <div className='Home'>
      <div className='home_text-section'>
        <div className='home_title'>Lucas Brest</div>
        <div className='home_subtitle'>{"< Desarrollador Web FullStack />"}</div>
        <div className='home_description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi voluptatum est amet facilis, veritatis sit quas neque delectus nulla non ab fugit consequuntur dolorem laborum esse laboriosam repellat. Reiciendis, recusandae.</div>
      </div>
      <div className='home_img-section'>
        <img src={portrait} alt='portrait'/>
      </div>

    </div>
  )
}

export default Home