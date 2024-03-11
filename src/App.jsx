import { useState } from 'react'

import Header from './components/Header/Header.jsx'
import MainPage from './components/MainPage/MainPage.jsx'
import Equipment from './components/Equipment/Equipment.jsx'
import Membership from './components/Membership/Membership.jsx'
import Trainers from './components/Trainers/Trainers.jsx'
import './App.css'
 
function App() {


  return (
    <>
    <div className='container'>
      <Header />
      <MainPage />
      <Equipment />
      <Membership />
      <Trainers />
    </div>
    </>
  )
}

export default App
