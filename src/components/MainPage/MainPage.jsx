import React from 'react'
import curlingMan from '../../assets/curling-man.png'
import arrows from '../../assets/double-arrow.png'
import './MainPage.css'

export default function MainPage() {

  const handleArrow = (section) => {
    const element = document.getElementById(section);

    element?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <>
        <div id='img-area'>
          <div id='img-area-text'>
            <h1>Descubra o poder de um
              <br />
              <span className='green'> Corpo saudável</span> <br />
            </h1>
            <p>
              Treine e maximize seu corpo para uma melhor
              <br />
              <span className='bold-text'>qualidade de vida </span> e aumento da <span className='bold-text'>confiança.</span>
            </p> 

          </div>
            <img src={curlingMan} alt="Venha conhecer nossa academia e nossos planos!" id='man' />
          
            <div id='img-area-button'>
              <button id='planos' onClick={() => handleArrow("membership-container")}> Conheça nossos planos </button>
            </div>
            </div>
            <div id='arrow-container'>
            <button className="arrow-button"onClick={() => handleArrow("equipment-area")}>
            <img id="arrows" src={arrows} alt="pointing arrows" />
            </button>
          </div>
          <div />
    </>
  )
}
