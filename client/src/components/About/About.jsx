import React from 'react'
import './About.css'
import House from '../../assets/gym-icon.png'
import Curl from '../../assets/curl-icon.png'
import Dumbell from '../../assets/barbell-icon.png'

export default function About() {
  return (
    <div id='about-container'>
        <div className='about-text'>
            <h1>Sobre a academia:</h1>
        
            <p> 
                Bem-vindo à <span className='green'>smart</span>Gym, uma academia revolucionária fundada em 2020 com a missão de transformar vidas  através do fitness e do aprimoramento do corpo. Localizada no coração da cidade, nossa academia é um santuário dedicado ao <span className='green'>progresso pessoal</span>, onde a <span className='green'>modernidade</span> se encontra com a tradição do condicionamento físico.
            </p>

            <div className='about-icons-container'>
                <div className='about-icons'>
                    <img src={House} />
                    <span className='icons-title'> Ambiente <span className='green'>acolhedor</span>: </span>
                    <span className='icons-text'>
                        Estamos comprometidos em oferecer um ambiente inclusivo e acolhedor, onde pessoas de todas as idades, habilidades e se sintam bem-vindas. 
                    </span>
                </div>
                <div className='about-icons'>
                    <img src={Dumbell} />
                    <span className='icons-title'> <span className='green'>Benefício</span> dos planos: </span>
                    <span className='icons-text'>
                        Nossos planos são desenvolvidos especificamente para atender às suas necessidades e metas individuais.
                    </span>
                </div>
                <div className='about-icons'>
                    <img src={Curl} />
                    <span className='icons-title'> Personal <span className='green'>trainers</span>: </span>
                    <span className='icons-text'>
                        Nossos personal trainers ajudarão a maximizar seu potencial e alcançar resultados além do que você imaginava ser possível. 
                    </span>
                </div>
            </div>
        </div>

    </div>
  )
}
