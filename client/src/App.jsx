import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home.jsx'

function App() {
  
  
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [userLogged, setUserLogged] = useState(false);

  const openLogin = () => setLoginOpen(true);
  const closeLogin = () => setLoginOpen(false);
  const logUser = () => setUserLogged(true);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home openLogin={openLogin} userLogged={userLogged} logUser={logUser} isLoginOpen={isLoginOpen} closeLogin={closeLogin}/>}></Route>
        
      </Routes>
    </Router>
  )
}

export default App
//<Route path="/profile" element={<Profile />}></Route>