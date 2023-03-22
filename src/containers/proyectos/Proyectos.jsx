import './proyectos.css'
import { Carrousel } from './../../components'

import img1 from '../../img/proyectos/img-iot.png'
import img2 from '../../img/proyectos/img-sudoku.png'
import img3 from '../../img/proyectos/img-store.jpg'
import img4 from '../../img/proyectos/img-crud.jpg'
import imgPokedex from '../../img/proyectos/img-pokedex.png'

import { Title } from '../../components'

const proyectos = [
  {
    id: 3,
    img: img3,
    title: 'ReduxStore',
    description: 'Web hecha en ReactJS que se comunica con una api de productos genéricos que permite agregar y quitar productos a un carrito usando Redux para los componentes',
    link: 'https://redux-store-eight.vercel.app/',
  },
  {
    id: 2,
    img: img2,
    title: 'Sudoku',
    description: 'Aplicación web responsive de un juego de sudoku hecho en ReactJS con Redux-toolkit, usando hooks como useState, useEffect y useRef. Además de Sass para los estilos',
    link: 'https://lb-sudoku.vercel.app/',
  },
  {
    id: 1,
    img: img1,
    title: 'Internet of Things',
    description: 'Página informativa acerca de internet of things con el frontend hecho ReactJS que se comunica con una API para obtener las novedades y los dispositivos, y un backend hecho con ExpressJS que incluye una API que obtiene los elementos de una base de datos SQL para compartirlos con el frontend y una interfaz para un administrador que permite agregar, modificar o eliminar novedades.',
    link: 'https://lucas-ez.github.io/iot-frontend/',
  }, 
  {
    id: 5,
    img: imgPokedex,
    title: 'Vite Pokedex',
    description: 'Página web hecha con ReactJs y Vite con uso de hooks y React Router para la navegación, que carga items de una api a medida que se scrollea hacia abajo o se selecciona un pokemón.',
    link:'https://vite-pokedex-lz.netlify.app/'
  },
  {
    id: 4,
    img: img4,
    title: 'Crud App',
    description: 'Aplicación web para ingresar o eliminar registros de una tabla almacenada en el localstoragejpg.',
    link: 'https://lucas-ez.github.io/crud-app/',
  },
]

function Proyectos() {
  return (
    <div className='Proyectos' id='proyectos'>
      <Title text={"Proyectos"}/>
      <Carrousel items={proyectos} />
    </div>
  )
}

export default Proyectos