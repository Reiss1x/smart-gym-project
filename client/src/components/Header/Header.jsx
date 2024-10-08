import React, { useEffect } from 'react'
import "./Header.css"
import smartGym from "../../assets/logo.svg";
import Axios from 'axios';

export default function Header({openLogin, userLogged}) {

  const handleClick = (section) => {
    const element = document.getElementById(section);

    element?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  const handleLogin = () => {
    userLogged ? Axios.get('http://localhost:3000/profile').then((response) => {
        if (response.data.auth){}
        
        console.log(response);
        
        }).catch((err) => {

        }) : openLogin();
  }

  return (
    <div>
        <div className='header'>
          <img src={smartGym} alt="Logo" id='logo'></img>
          <div id='header-buttons'>
            <button className='h-buttons' onClick={() => handleClick("equipment-container")}> Equipamento </button>
            <button className='h-buttons' onClick={() => handleClick("membership-container")}> Planos </button>
            <button className='h-buttons' onClick={() => handleClick("trainers-container")}> Treinadores </button>
            <button className='h-buttons' onClick={() => handleClick("about-container")}> Sobre </button>
            <button className='h-buttons' onClick={() => handleClick("footer-container")}> Contato </button>
            <button className='h-buttons' onClick={() => handleLogin()}> {userLogged ? 'Minha conta' : 'Login' } </button>
          </div>
      </div>
    </div>
    
  )
}
