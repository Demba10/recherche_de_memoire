
import React from 'react'
import Header from './composants/header/Header'
import Footer from './composants/footer/Footer'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import { Accueil } from './pages/accueil/Accueil';
import Sujet from './pages/sujet/Sujet'
import Workspace from './pages/workspace/Workspace'
import Apropos  from "./pages/accueil/Apropos/Apropos";



const App = () => {
  return (

  <Router>
    <Header/>
      <Routes>
       <Route path="/" element={<Accueil />} />
       <Route path="/Sujet" element={<Sujet />} />
       <Route path="/Workspace" element={<Workspace />} />
       <Route path="/Apropos" element={<Apropos />} />
      </Routes>
    <Footer/>
      
  </Router>
  )

}

export default App;
