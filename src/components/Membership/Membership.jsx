import React from 'react'
import './Membership.css';
import Memberships from '../../assets/Memberships.json';
import Card from './membership card/Card';

export default function Membership() {
    const planos = Memberships.planos;
    console.log(planos);
    
    
    return (
    <div id='membership-container'> 
        <div className='membership-text'>
            Planos <br />
            <div className='membership-below-text'>
                Nossos planos personalizados são desenvolvidos especificamente para<br /> atender às suas <span className='bold-text'>necessidades</span> e <span className='bold-text'> metas individuais</span>.
            </div>
            
        </div>
        <div className='container-cards'>
            {planos.map((plano, index) => (
                <Card data={plano} className="individual-cards" key={index}></Card> 
            ))}
        </div>
    </div>
  )
}
