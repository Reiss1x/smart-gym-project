import React from 'react'
import './Trainers.css'
import Female from '../../assets/female_trainer.jpg'

export default function Trainers() {
  return (
    <div className='trainers-container'>
        <h1>Nossos Treinadores</h1>

        <div className='trainers'>
            <img src={Female} alt="female trainer" />
            <img src={Female} alt="female trainer" />
            <img src={Female} alt="female trainer" />
        </div>
    </div>
  )
}
