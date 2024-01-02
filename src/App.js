import React from 'react'
import Header from './composants/header/Header'
import Footer from './composants/footer/Footer'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import { Accueil } from './pages/accueil/Accueil';


const App = () => {
  return (
  <Router>
    <Header/>
    <Accueil/>
      <Routes>
       {/* <Route path="/" element={<Accueil />} /> */}
      </Routes>
    <Footer/>
      
  </Router>
  )
}

export default App;
