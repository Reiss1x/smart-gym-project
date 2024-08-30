import React from 'react'
import Modals from 'react-modal';
import './Modal.css'
import smartGym from "../../assets/logo.svg";
export default function Modal({isLoginOpen, closeLogin}) {
    
    Modals.setAppElement('#root');

    const modalStyle = {

      content: {

      display: "flex",
      justifyContent: "space-between",
      background: 'linear-gradient(rgba(43,60,70,1), rgba(13,38,52,1))',
      height: "72%",
      width: "53%",
      borderRadius: "1.5%",
      padding: "4%",
      margin: "auto",
      boxShadow: "0 0 20px rgba(0, 0, 0, 1)",
      border: "0.30vw solid #78A083",
    
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',

    }
  }

    return (
        <div>
            <Modals
              isOpen={isLoginOpen}
              onRequestClose={closeLogin}
              style={modalStyle}
            >
              <div className='signin-section'>
                <img src={smartGym} alt="Logo" id='modal-logo'></img>
                <p1>Bem vindo de volta!</p1>
                <p2>Insira seus dados</p2>
                <div class="modal-form">
                    <p3>E-mail</p3>
                    <input className="modal-input" type="text" placeholder="Insira seu E-mail"/>
                    <p3>Senha</p3>
                    <input className="modal-input" type="text" placeholder="Insira sua senha"/>
                    
                    <button className='modal-button'>Entrar</button>
                </div>
              </div>

              <div id='barrinha'></div>

              <div className='signup-section' >
                <p1>Pronto para mudar de vida?</p1>
                <p2>Crie sua conta</p2>
                <div class="modal-form" style={{height: '80%'}}>
                    <p3>Nome Completo</p3>
                    <input className="modal-input" type="text" placeholder="Insira seu nome completo" style={{width: '100%'}}/>
                    <p3>E-mail</p3>
                    <input className="modal-input" type="text" placeholder="Insira seu E-mail" style={{width: '100%'}}/>
                    <p3>Senha</p3>
                    <input className="modal-input" type="text" placeholder="Crie uma senha" style={{width: '100%'}}/>
                    <span id='password-subtext'>Deve conter pelo menos 8 caracteres</span>
                    <button className='modal-button' style={{width: '100%'}}>Cadastrar</button>
                </div>
              </div>
            </Modals>
        </div>
    )
}