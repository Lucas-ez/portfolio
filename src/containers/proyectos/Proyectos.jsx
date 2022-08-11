import React from 'react'
import './proyectos.css'

import img1 from '../../img/proyectos/placeholder1.png'
import img2 from '../../img/proyectos/placeholder2.png'
import img3 from '../../img/proyectos/placeholder3.png'
import img4 from '../../img/proyectos/placeholder4.png'

import { Title, Subtitle } from '../../components'

const proyectos = [
  {
    id: 1,
    img: img1,
    title: 'Proyecto I',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    link: '/',
  },
  {
    id: 2,
    img: img2,
    title: 'Proyecto II',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    link: '/',
  },
  {
    id: 3,
    img: img3,
    title: 'Proyecto III',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    link: '/',
  },
  {
    id: 4,
    img: img4,
    title: 'Proyecto IV',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    link: '/',
  },
]

function Proyectos() {
  return (
    <div className='Proyectos' id='proyectos'>
      <Title text={"Proyectos"}/>
      <div className='Proyectos-container'>
        {proyectos.map(proyecto => (
          <div className='Proyectos-item' key={proyecto.id}>
            <img src={proyecto.img} alt={proyecto.title} />
            <a href={proyecto.link}>
              <Subtitle text={proyecto.title}/>
            </a>
            <p className='Proyectos-description'>{proyecto.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Proyectos