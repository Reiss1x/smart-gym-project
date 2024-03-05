import React from 'react'
import "./Header.css"
import smartGym from "../../assets/logo.svg";


export default function Header() {


  return (
    <div id='header'>
        <img src={smartGym} alt="Logo" id='logo'></img>
        <div id='header-buttons'>
          <button className='h-buttons'> Sobre </button>
          <button className='h-buttons'> Equipamento </button>
          <button className='h-buttons'> Planos </button>
          <button className='h-buttons'> Treinadores </button>
          <button className='h-buttons'> Contato </button>
        </div>
    </div>
  )
}
