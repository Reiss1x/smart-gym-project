import React from 'react'
import { useRef } from 'react';
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
          <button className='h-buttons' > Sobre </button>
          <button className='h-buttons' onClick={() => handleClick("equip-area")}> Equipamento </button>
          <button className='h-buttons'> Planos </button>
          <button className='h-buttons'> Treinadores </button>
          <button className='h-buttons'> Contato </button>
        </div>
    </div>
  )
}
