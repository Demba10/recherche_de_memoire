import React from 'react'
import  "./Hero.css"
import cardSujets from '../nosidees/cardSujets'
import NosIdees from '../nosidees/NosIdees'

const hero = () => {
  return (
    <>
    <section class="head">
      <div class="container">
        <cardSujets/>
        <div class="row">
          <h2>Bienvenue sur Mémoire.com</h2>
          <h2>Là où commence votre voyage académique. </h2>
          <p>Trouvez le sujet qui définit votre parcours académique</p>
          <p> L'excellence commence par le bon sujet de mémoire.</p>
          <div class="button">
            <button class=" btn " id="boutton">
              Voir Plus <i class="fa fa-long-arrow-alt-right"></i>
            </button>
          </div>
        </div>
      </div>
     
    </section>
    
    <div class="margin">
      <h1></h1>
    {/* <NosIdees/> */}
    {/* <NosIdees/> */}
   
    </div>
 
  
  </>
  
  )
}

export default hero;
