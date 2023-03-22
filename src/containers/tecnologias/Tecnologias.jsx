import React from 'react'
import './tecnologias.css'
import { Title } from '../../components'

import imgHTML from '../../img/tecnologias/html.png'
import imgCSS from '../../img/tecnologias/css.png'
import imgJS from '../../img/tecnologias/js.png'
import imgReact from '../../img/tecnologias/react.png'
import imgNode from '../../img/tecnologias/node.png'
import imgGit from '../../img/tecnologias/git.png'
import imgRedux from '../../img/tecnologias/redux.png'
const imgSQL = 'https://icongr.am/devicon/mysql-original.svg?size=128&color=currentColor'
const imgSass = 'https://icongr.am/devicon/sass-original.svg?size=128&color=currentColor'
const imgExpress = 'https://icongr.am/devicon/express-original-wordmark.svg?size=128&color=currentColor'

const tecnologias = [imgHTML, imgCSS, imgJS, 
                imgReact, imgNode, imgGit, imgSQL, imgSass, imgExpress,imgRedux]

function Tecnologias() {
  return (
    <div className='Tecnologias' id='tecnologias'>
      <Title text={"Tecnologías"}/>
      <div className='Tecnologias-container'>
        {tecnologias.map((tecnologia, index) => (
            <div key={index} className='Tecnologias-item'>
              <img src={tecnologia} alt=''/>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Tecnologias