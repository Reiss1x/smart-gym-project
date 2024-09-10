import React from 'react'
import './Membership.css';
import Memberships from '../../assets/Memberships.json';
import Card from './membership card/Card';

export default function Membership({userLogged, openLogin}) {
    const planos = Memberships.planos;
    
    return (
    <div id='membership-container'> 

        <h1>Planos</h1>
        <p> 
            Nossos planos personalizados são desenvolvidos especificamente para<br /> atender às suas <span     className='bold-text'>necessidades</span> e <span className='bold-text'> metas individuais</span>. 
        </p>
        
        <div className='container-cards'>
            {planos.map((plano, index) => (
                <Card data={plano} className="individual-cards" key={index} userLogged={userLogged} openLogin={openLogin}></Card> 
            ))}
        </div>
    </div>
  )
}
