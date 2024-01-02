import React from 'react';
import Apropos  from "./pages/accueil/Apropos/Apropos";
import { BrowserRouter as Router, Routes,  } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
      <Apropos/>

      </Router>
    </div>
  );

}

export default App;
