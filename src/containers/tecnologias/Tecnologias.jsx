import React from 'react'
import './tecnologias.css'
import { Title } from '../../components'

import imgHTML from '../../img/tecnologias/html.png'
import imgCSS from '../../img/tecnologias/css.png'
import imgJS from '../../img/tecnologias/js.png'
import imgReact from '../../img/tecnologias/react.png'
import imgNode from '../../img/tecnologias/node.png'
import imgGit from '../../img/tecnologias/git.png'
import imgSQL from '../../img/tecnologias/sql.png'

const tecnologias = [imgHTML, imgCSS, imgJS, 
                imgReact, imgNode, imgGit, imgSQL]

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