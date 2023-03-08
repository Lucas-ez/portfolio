import { useState } from 'react'
import './Carrousel.css'

function Carrousel({items}) {
  const [focusedItem, setFocusedItem] = useState(0)

  const handleSiguiente = () => {
    const newFocused = focusedItem + 1
    setFocusedItem(newFocused === items.length ? 0 : newFocused)
  }

  const handleAnterior = () => {
    const newFocused = focusedItem - 1
    setFocusedItem(newFocused < 0 ? items.length - 1 : newFocused)
  }

  return (
    <div className='carrousel'>
      <button onClick={handleAnterior} className='carrousel-btn'><i className="fa-solid fa-arrow-left"></i></button>
      {
        items.map((item, index) => (
          
          <div key={item.id} className={'slide' + (index === focusedItem ? ' active':'')}>
            {
            index === focusedItem 
            ?
            <div className='item'>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <div className='item-img'>
                  <img src={item.img} alt={item.title + ' img'} />
                </div>
              </a>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <h2 className='item-title'>{'< ' + item.title + ' />'}</h2>
                  <span className='item-description'>{item.description}</span>
              </a>
            </div> 
            :
            <div></div>
            }
          </div>
        ))
      }
      <button onClick={handleSiguiente} className='carrousel-btn'><i className="fa-solid fa-arrow-right"></i></button>
    </div>
  )
}

export default Carrousel