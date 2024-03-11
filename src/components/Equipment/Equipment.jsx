import React, { useState } from 'react'
import slides from '../../assets/SlideData.json'
import Slider from './Slider/Slider.jsx'
import './Equipment.css'

export default function Equipment() {
    const [idx, setIdx] = useState(0);

    const handleArrows = (event) => {
        if(event.target.id == 'L'){
            if (idx == 0) setIdx(2)
            else setIdx(idx - 1);   
        } else {
            if (idx == 2) setIdx(0)
            else setIdx(idx + 1);
        }
    }

    const handleButtons = (number) => {
        setIdx(number);
    }
    
  return (
    <div id='equipment-container'>
        <div className='equipment-text'>
            <h1>Nosso Equipamento</h1>
            <div id='equipment-below-text'>
                <p>Equipamentos <span className='bold-text'>novos</span> e <span className='bold-text'>tecnológicos</span> para<br/>satisfazer suas necessidades</p>
            </div>
            <div className='equipment-buttons'>
                <button   className='e-buttons' onClick={() => handleButtons(0)}  style={{ backgroundColor: idx === 0 ? '#78A083' : '#344955' }}> Pesos livres </button>
                <button className='e-buttons' onClick={() => handleButtons(1)}  style={{ backgroundColor: idx === 1 ? '#78A083' : '#344955' }}> Treino de força </button>
                <button className='e-buttons' onClick={() => handleButtons(2)}  style={{ backgroundColor: idx === 2 ? '#78A083' : '#344955' }}> Cardiovascular </button>
            </div>
        </div>
        
        <div className='slider-style'>
            <button id='L'className='s-buttons' onClick={handleArrows}> &#8592; </button>
            <Slider slides={slides} idx={idx}/>
            <button id='R'className='s-buttons' onClick={handleArrows}> &#8594; </button>
        </div>
    </div>
  )
}
