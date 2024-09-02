import React, { useState } from 'react'
import Modals from 'react-modal';
import './Modal.css'
import smartGym from "../../assets/logo.svg";
import x from "../../assets/x.svg";
import Axios from 'axios';
export default function Modal({isLoginOpen, closeLogin}) {
    
    Modals.setAppElement('#root');

    const [emailLog, setEmailLog] = useState('');
    const [passwordLog, setPasswordLog] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const [usernameReg, setUsernameReg] = useState('');
    const [emailReg, setEmailReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

    const register = () => {
      console.log("cadastro");
      Axios.post('http://localhost:3000/user', {
        name: usernameReg,
        email: emailReg,
        password: passwordReg,
        active: false,
      }).then((response) => {
        console.log(response);
      })
    }

    const login = () => {
      console.log("login");
      Axios.post('http://localhost:3000/login', {
        email: emailLog,
        password: passwordLog
      }).then((response) => {
        console.log(response);
        
      }).catch(function (error) {
        if (error.response) {
          setErrorMessage(error.response.data.message);
          console.log(errorMessage);
        }
      })
    }

    const handleModalClose = () => {
      setErrorMessage('');
      closeLogin();
    }
    
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
      boxShadow: "0 0 1.042vw rgba(0, 0, 0, 1)",
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
              onRequestClose={handleModalClose}
              style={modalStyle}
            >
              <div className='signin-section'>
                
                <img src={smartGym} alt="Logo" id='modal-logo'></img>
                <p1>Bem vindo de volta!</p1>
                <p2>Insira seus dados</p2>            
                <div class="modal-form">
                    
                    <p3>E-mail</p3>
                    <input className="modal-input" type="text" placeholder="Insira seu E-mail" onChange={(e) => {
                      setEmailLog(e.target.value);
                    }}/>
                    <p3>Senha</p3>
                    <input className="modal-input" type="text" placeholder="Insira sua senha" onChange={(e) => {
                      setPasswordLog(e.target.value);
                    }}/>
                    <div className={`error-message${errorMessage ? '-active' : ''}`}>
                      {errorMessage}
                      <img src={x}></img>
                    </div>
                    
                    <button className='modal-button' onClick={login}>Entrar</button>
                </div>
              </div>

              <div id='barrinha'></div>

              <div className='signup-section' >
                <p1>Pronto para mudar de vida?</p1>
                <p2>Crie sua conta</p2>
                <div class="modal-form" style={{height: '80%'}}>
                    <p3>Nome Completo</p3>
                    <input className="modal-input" type="text" placeholder="Insira seu nome completo" style={{width: '100%'}} onChange={(e) => {
                      setUsernameReg(e.target.value);
                    }}/>
                    <p3>E-mail</p3>
                    <input className="modal-input" type="text" placeholder="Insira seu E-mail" style={{width: '100%'}} onChange={(e) => {
                      setEmailReg(e.target.value);
                    }}/>
                    <p3>Senha</p3>
                    <input className="modal-input" type="text" placeholder="Crie uma senha" style={{width: '100%'}} onChange={(e) => {
                      setPasswordReg(e.target.value);
                    }}/>
                    <span id='password-subtext'>Deve conter pelo menos 8 caracteres</span>
                    <button className='modal-button' style={{width: '100%'}} onClick={register}>Cadastrar</button>
                </div>
              </div>
            </Modals>
        </div>
    )
}