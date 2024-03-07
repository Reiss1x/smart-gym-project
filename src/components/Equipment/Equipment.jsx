import React, { useEffect, useRef, useState } from 'react'
import slides from '../../assets/SlideData.json'
import Slider from './Slider/Slider.jsx'
import './Equipment.css'

export default function Equipment() {
    const [idx, setIdx] = useState(0);

    const buttons = {
        free: useRef(null),
        strength: useRef(null),
        cardio: useRef(null),
    }

    useEffect(() => {
        Object.values(buttons)[idx].current.focus();
    }, [idx])

    const handleArrows = (event) => {
        if(event.target.id == 'L'){
            if (idx == 0) setIdx(2)
            else setIdx(idx - 1);   
        } else {
            if (idx == 2) setIdx(0)
            else setIdx(idx + 1);
        }
    }

    const handleButtons = (event) => {
        setIdx(event.target.id);
        // switch (buttName){
        //     case "free": setIdx(0); 
        //     break;
        //     case "strength": setIdx(1);
        //     break;
        //     case "cardio": setIdx(2);
        //     break;
        // }
        // setButton(buttName)
    }
    
  return (
    <div className='equipment-area'>
        <div className='equipment-text'>
            Nosso Equipamento<br />
            <div id='equipment-below-text'>
                Equipamentos <span className='bold-text'>novos</span> e <span className='bold-text'>tecnológicos</span> para<br/>satisfazer suas necessidades
            </div>
            <div className='equipment-buttons'>
                <button  id="0" className='e-buttons' onClick={handleButtons} ref={buttons.free}> Pesos livres </button>
                <button id="1" className='e-buttons' onClick={handleButtons} ref={buttons.strength}> Treino de força </button>
                <button id="2" className='e-buttons' onClick={handleButtons} ref={buttons.cardio}> Cardiovascular </button>
            </div>
            
        </div>
        
        <div className='slider-style'>
            <Slider slides={slides} idx={idx}/>
        </div>
        <div className='slider-buttons'>
            <button id='L'className='s-buttons' onClick={handleArrows}> &lt; </button>
            <button id='R'className='s-buttons' onClick={handleArrows}> &gt; </button>
        </div>

    </div>
  )
}
