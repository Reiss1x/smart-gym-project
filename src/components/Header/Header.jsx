import React from 'react'
import "./Header.css"
import smartGym from "../../assets/logo.svg";


export default function Header() {

  const handleClick = (section) => {
    const element = document.getElementById(section);

    element?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <div className='header'>
        <img src={smartGym} alt="Logo" id='logo'></img>
        <div id='header-buttons'>
          <button className='h-buttons' onClick={() => handleClick("equipment-container")}> Equipamento </button>
          <button className='h-buttons' onClick={() => handleClick("membership-container")}> Planos </button>
          <button className='h-buttons' onClick={() => handleClick("trainers-container")}> Treinadores </button>
          <button className='h-buttons' onClick={() => handleClick("about-container")}> Sobre </button>
          <button className='h-buttons'> Login </button>
        </div>
    </div>
  )
}
