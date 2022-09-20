import React from 'react'
import './proyectos.css'

import img1 from '../../img/proyectos/img-iot.png'
import img2 from '../../img/proyectos/img-sudoku.png'
import img3 from '../../img/proyectos/img-ecommerce.png'
import img4 from '../../img/proyectos/img-weather.png'

import { Title, Subtitle } from '../../components'

const proyectos = [
  {
    id: 1,
    img: img1,
    title: 'Internet of Things',
    description: 'Página informativa acerca de internet of things con el frontend hecho ReactJS que se comunica con una API para obtener las novedades y los dispositivos, y un backend hecho en NodeJS que incluye una API que obtiene los elementos de una base de datos SQL para compartirlos con el frontend y una interfaz para un administrador que permite agregar, modificar o eliminar novedades.',
    link: 'https://lucas-ez.github.io/iot-frontend/',
  },
  {
    id: 2,
    img: img2,
    title: 'Sudoku',
    description: 'Aplicación web responsive de un juego de sudoku hecho en ReactJS con el uso de hooks useState y useEffect.',
    link: 'https://lucas-ez.github.io/sudoku/',
  },
  {
    id: 3,
    img: img3,
    title: 'e-commerce',
    description: 'Web hecha en ReactJS que se comunica con una api de productos genéricos, con un buscador que permite filtrarlos por nombre y la funcionalidad de agregar y quitar productos a un carrito',
    link: 'https://lucas-ez.github.io/e-commerce/',
  },
  {
    id: 4,
    img: img4,
    title: 'Weather App',
    description: 'Aplicación web que muestra datos acerca del clima de la ciudad ingresada en el buscador, se comunica con un API para obtener información sobre la temperatura y el clima del lugar indicado.',
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
            <a href={proyecto.link} target="_blank" rel="noopener noreferrer">
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