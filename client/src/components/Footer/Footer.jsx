import React from 'react'
import './Footer.css'
import Logo from '../../assets/logo.svg'

export default function Footer() {

    const handleClick = (section) => {
    const element = document.getElementById(section);

    element?.scrollIntoView({
      behavior: 'smooth'
    })
  }


  return (
    <div id="footer-container">
        <div className='footer'>
            <div className='logo-text'>
                <img src={Logo} id='footer-logo'/>
                <h1>Descubra o poder de<br />um <span className='green'>corpo saudável</span>.</h1>
            </div>
            
            <div className='footer-links'>
                <button></button>
                <div className='footer-left'>
                    PÁGINAS<br />
                    <button onClick={() => handleClick("about-container")}>Sobre</button>
                    <br />
                    <button onClick={() => handleClick("equipment-container")}>Equipamentos</button>
                    <br />
                    <button onClick={() => handleClick("trainers-container")}>Treinadores</button>
                    <br />
                    <button onClick={() => handleClick("membership-container")}>Planos</button>
            </div>
            <span className='footer-right'>
                REDES<br />
                    <a href='https://www.linkedin.com/in/devgabrielreis/' target='_blank' rel='noreferrer'>LinkedIn</a>{" "}
                    <br />
                    <a href='https://github.com/Reiss1x' target='_blank' rel='noreferrer'>GitHub</a>
                    <br />
                    <a href='mailto:gabrielreis.reis1903@gmail.com' target='_blank' rel='noreferrer'>E-Mail</a>
            </span>
            </div>
            
        </div>
        
    </div>
  )
}

