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
    const [regErrorCode, setRegErrorCode] = useState('');
    const [regErrorMessage, setRegErrorMessage] = useState('');

    const [usernameReg, setUsernameReg] = useState('');
    const [emailReg, setEmailReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

    const [fetchingUser, setFetchingUser] = useState(false);
    const [fetchingReg, setFetchingReg] = useState(false);

    const resetErrors = () => {
        setFetchingReg(false);
        setRegErrorCode('');
        setRegErrorMessage('');
        setErrorMessage('');
        setFetchingUser(false);
    }

    const register = () => {
      setFetchingReg(true);
      Axios.post('http://localhost:3000/user', {
        name: usernameReg,
        email: emailReg,
        password: passwordReg,
        active: false,
      }).then((response) => {
        console.log(response);
        resetErrors();
      }).catch((error) => {
        setFetchingReg(false);
        setRegErrorCode(error.response.data.code)
        setRegErrorMessage(error.response.data.message);
        console.log(error.response);
        setErrorMessage('');
      })
    }

    const login = () => {
      setFetchingUser(true);
      Axios.post('http://localhost:3000/login', {
        email: emailLog,
        password: passwordLog
      }).then((response) => {
        console.log(response);
        resetErrors(); 
      }).catch(function (error) {
        if (error.response) {
          setFetchingUser(false);
          setErrorMessage(error.response.data.message);
          console.log(errorMessage);
          setRegErrorCode('');
          setRegErrorMessage('');
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
                <p id='p1'>Bem vindo de volta!</p>
                <p id='p2'>Insira seus dados</p>            
                <div className="modal-form">
                    
                    <p id='p3'>E-mail</p>
                    <input className="modal-input" type="text" placeholder="Insira seu E-mail" onChange={(e) => {
                      setEmailLog(e.target.value);
                    }}/>
                    <p id='p3'>Senha</p>
                    <input className="modal-input" type="text" placeholder="Insira sua senha" onChange={(e) => {
                      setPasswordLog(e.target.value);
                    }}/>
                    <div className={`error-message${errorMessage ? '-active' : ''}`}>
                      {errorMessage}
                      <img src={x}></img>
                    </div>
                    
                    <button className={`modal-button${fetchingUser ? '-fetching' : ''}`} onClick={login} >{fetchingUser ? 'Entrando...' : 'Entrar' }</button>
                </div>
              </div>

              <div id='barrinha'></div>

              <div className='signup-section' >
                <p id='p1'>Pronto para mudar de vida?</p>
                <p id='p2'>Crie sua conta</p>
                <div className="modal-form" style={{height: '80%'}}>
                    <p id='p3'>Nome Completo</p>
                    <input className="modal-input" type="text" placeholder="Insira seu nome completo" style={{width: '100%'}} onChange={(e) => {
                      setUsernameReg(e.target.value);
                    }}/>
                    <p id='p3'>E-mail</p>
                    <input className={`modal-input${regErrorCode == 'email' ? '-error' : ''}`} type="text" placeholder="Insira seu E-mail" style={{width: '100%'}} onChange={(e) => {
                      setEmailReg(e.target.value);
                    }}/>
                    <p id='p3'>Senha</p>
                    <input className={`modal-input${regErrorCode == 'pass' ? '-error' : ''}`} type="text" placeholder="Crie uma senha" style={{width: '100%'}} onChange={(e) => {
                      setPasswordReg(e.target.value);
                    }}/>
                    <span id='password-subtext'>{regErrorMessage}</span>
                    <button className={`modal-button${fetchingReg ? '-fetching' : ''}`} style={{width: '100%'}} onClick={register}>{fetchingReg ? 'Cadastrando...' : 'Cadastrar'}</button>
                </div>
              </div>
            </Modals>
        </div>
    )
}