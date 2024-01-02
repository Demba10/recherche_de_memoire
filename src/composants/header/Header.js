import React,  { useState } from 'react';
import { Link } from "react-router-dom"
import "./Header.css"
const Header = () => {
    const [click, setClick] = useState(false)
   
  return (
    <>
        
  <header class="main-header">
    <div class="container">
      <nav class="navbar navbar-expand-lg main-nav px-0 text-lg-center">
        <a class="navbar-brand fw-bold text-white" href="/mojo"> Memo.com</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainMenu" aria-controls="mainMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="icon-bar icon-bar-1"></span>
                        <span class="icon-bar icon-bar-2"></span>
                        <span class="icon-bar icon-bar-3"></span>
                    </button>
        <div class="collapse navbar-collapse" id="mainMenu">
          <ul class="navbar-nav ml-auto text-uppercase f1 -center">
            <li>
              {/* <a href="#home" class="active active-first text-center">Acceuil</a> */}
              <Link to='/'>Acceuil</Link>
            </li>
            <li>
              <a href="#about">Apropos</a>
            </li>
            <li>
              {/* <a href="#service">Sujets</a> */}
              <Link to='/Sujet'>Sujets</Link>
            </li>
            <li>
              <a href="#project">Contact</a>
            </li>
            <li>
              <Link to='/Workspace'>Workspace</Link>

            </li>
           
          </ul>
        </div>
      </nav>
    </div>
    
  </header>
  
    </>

  )
}

export default Header
