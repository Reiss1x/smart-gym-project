import { useState } from 'react'

import Header from './components/Header/Header.jsx'
import MainPage from './components/MainPage/MainPage.jsx'
import Equipment from './components/Equipment/Equipment.jsx'
import Membership from './components/Membership/Membership.jsx'
import Trainers from './components/Trainers/Trainers.jsx'
import Footer from './components/Footer/Footer.jsx'
import About from './components/About/About.jsx'
import Modal from './components/Modal/Modal.jsx'
import './App.css'
 
function App() {
  
  
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [userLogged, setUserLogged] = useState(false);

  const openLogin = () => setLoginOpen(true);
  const closeLogin = () => setLoginOpen(false);
  const logUser = () => setUserLogged(true);

  return (
    <>
    <div className='container'>
      <Header openLogin={openLogin} userLogged={userLogged}/>
      <Modal isLoginOpen={isLoginOpen} closeLogin={closeLogin} logUser={logUser}> </Modal>
      <MainPage />
      <Equipment />
      <Membership userLogged={userLogged} openLogin={openLogin} />
      <Trainers />
      <About />
      <Footer />
    </div>
    </>
  )
}

export default App
