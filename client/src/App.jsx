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
  
  const openLogin = () => setLoginOpen(true);
  const closeLogin = () => setLoginOpen(false);
  

  return (
    <>
    <div className='container'>
      <Header openLogin={openLogin}/>
      <Modal isLoginOpen={isLoginOpen} closeLogin={closeLogin}></Modal>
      <MainPage />
      <Equipment />
      <Membership />
      <Trainers />
      <About />
      <Footer />
    </div>
    </>
  )
}

export default App
