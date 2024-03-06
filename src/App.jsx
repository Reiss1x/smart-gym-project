import { useState } from 'react'

import Header from './components/Header/Header.jsx'
import MainPage from './components/MainPage/MainPage.jsx'
import './App.css'
 
function App() {


  return (
    <>
    <div id='container'>
      <Header />
      <MainPage></MainPage>
    </div>
    </>
  )
}

export default App
