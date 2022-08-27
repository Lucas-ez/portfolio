import React from 'react'
import './proyectos.css'

import img1 from '../../img/proyectos/img-iot.png'
import img2 from '../../img/proyectos/img-sudoku.png'
import img3 from '../../img/proyectos/img-todo.png'
import img4 from '../../img/proyectos/img-weather.png'

import { Title, Subtitle } from '../../components'

const proyectos = [
  {
    id: 1,
    img: img1,
    title: 'Internet of Things',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    link: 'https://lucas-ez.github.io/iot-frontend/',
  },
  {
    id: 2,
    img: img2,
    title: 'Sudoku',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    link: 'https://lucas-ez.github.io/sudoku/',
  },
  {
    id: 3,
    img: img3,
    title: 'ToDo List',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    link: 'https://lucas-ez.github.io/todo-app/',
  },
  {
    id: 4,
    img: img4,
    title: 'Weather App',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    link: 'https://lucas-ez.github.io/weather/',
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
            <a href={proyecto.link} target="_blank">
              <Subtitle text={'< ' + proyecto.title + ' />'}/>
            </a>
            <p className='Proyectos-description'>{proyecto.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Proyectos