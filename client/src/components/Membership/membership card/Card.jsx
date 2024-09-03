import React from 'react'
import './Card.css'
import checkMark from '../../../assets/checkmark.png'

export default function ({ data }) {  

  const bestCard = data.best ? '0.5vw solid #72987E' : '0.5vw solid #1C2A32'


  return (
    <div className='membership-card' style={{border: bestCard}}>
        <div className='card-header'>
          <span className='green'>smart</span>{data.title} <br />
          R$ {data.price} / mês
          <hr />
        </div>
        <button className='card-button'> CONTRATAR AGORA</button>
        <div className='card-specifications'>
              {data.specifications.map((element, index) => (
                    <div className="specifications" key={index}>
                      <img id="checkmark" src={checkMark}></img>
                      <div id="specifications-text"> {element} </div>
                    </div>
                ))}
          </div>
    </div>
  )
}
