import React from 'react'
import './Trainers.css'
import Female from '../../assets/female_trainer.jpg'
import Male from '../../assets/male_trainer.png'
import Old from '../../assets/old_trainer.png'
import Trainer from './TrainerComponent'

export default function Trainers() {
  return (
    <div id='trainers-container'>
        <h1>Nossos Treinadores</h1>
        <div className='trainers'>
            <Trainer 
                img={Male} 
                name="Roberto" 
                quote='"O sucesso na academia não é medido pelo quão pesado você levanta, mas sim pela persistência que você demonstra."' >
            </Trainer>
            <Trainer
                img={Female}
                name="Milena"
                quote='"Um dia você vai perceber que a academia não transforma só o seu corpo, mas também a sua vida."'>
            </Trainer>
            <Trainer
                img={Old}
                name="Edenilson"
                quote='"Repita comigo: a sua versão do futuro vai agradecer pelo esforço de hoje."'>
            </Trainer>  
        </div>
    </div>
  )
}
