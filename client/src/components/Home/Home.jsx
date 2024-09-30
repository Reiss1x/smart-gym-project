
import Header from '../Header/Header.jsx'
import MainPage from '../MainPage/MainPage.jsx'
import Equipment from '../Equipment/Equipment.jsx'
import Membership from '../Membership/Membership.jsx'
import Trainers from '../Trainers/Trainers.jsx'
import Footer from '../Footer/Footer.jsx'
import About from '../About/About.jsx'
import Modal from '../Modal/Modal.jsx'

export default function Home({openLogin, userLogged, logUser, isLoginOpen, closeLogin}) {
    
    
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
