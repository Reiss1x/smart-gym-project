import React from 'react'
import './Trainers.css'
import PhoneIcon from '../../assets/phone-icon.png';

export default function TrainerContent( data ) {
  return (
    <div className='trainer-img'>
        <img src={data.img} alt="male trainer" />
        <div className='overlay'>
            <div className='overlay-content'>
                <h1> <span className='green'> {data.name} </span></h1>
                <div className='trainer-quote'> {data.quote} </div> 
                <button className='trainer-button'> <img src={PhoneIcon} id='phone'/> CONTATAR TREINADOR</button>
            </div>                  
        </div>
    </div>
  )
}
