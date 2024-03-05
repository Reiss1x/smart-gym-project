import { useState } from 'react'
import curlingMan from './assets/curling-man.png'
import Header from './components/Header/Header.jsx'
import arrows from './assets/double-arrow.png'
import './App.css'
 
function App() {


  return (
    <>
    <div id='container'>
      <Header />
      <div id='img-area'>
        <div id='img-area-text'>
          Descubra o poder de um 
          <br />
          <span className='green'> Corpo saudável</span> <br />
          
          <div id='img-area-below-text'> Treine e maximize seu corpo para uma melhor 
          <br/>
          <span className='bold-text'>qualidade de vida </span> e aumento da <span className='bold-text'>confiança.</span>
          </div>
        </div>
        <img src={curlingMan} alt="Venha conhecer nossa academia e nossos planos!" id='man' />
        <div id='img-area-button'>
          <button id='planos'> Conheça nossos planos </button>
        </div>      
          
      </div>
      <div>
        
      </div>
  
    </div>
    </>
  )
}

export default App
