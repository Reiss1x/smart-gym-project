import React from 'react'
import './Card.css'
import checkMark from '../../../assets/checkmark.png'

export default function ({ data }) {
  return (
    <div className='membership-card'>
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
                      {element} 
                    </div>
                ))}
          </div>
    </div>
  )
}
