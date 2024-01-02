import React from 'react'

const Footer = () => {
  return (
   <>
   <div class=" mt-5">
    <div class="card bg-primary px-4 pt-4 text-white ">
        <div class="row mb-4">
            <div class="col-md-4 col-sm-4 col-xs-4">
                <div class="footer-text pull-left">
                    <div class="d-flex">
                        <h1 class="font-weight-bold mr-2 px-3" >Memo.com </h1>
                        
                    </div>
                    <p class="card-text">Plongez dans notre vaste bibliothèque de sujets soigneusement sélectionnés, couvrant un large éventail de domaines d'études</p>
                    <div class="social mt-2 mb-3"> <i class="fa fa-facebook-official fa-lg"></i> <i class="fa fa-instagram fa-lg"></i> <i class="fa fa-twitter fa-lg"></i> <i class="fa fa-linkedin-square fa-lg"></i> <i class="fa fa-facebook"></i> </div>
                </div>
            </div>
            <div class="col-md-2 col-sm-2 col-xs-2"></div>
            <div class="col-md-2 col-sm-2 col-xs-2">
                <h5 class="heading">Liens utiles</h5>
                <ul class="text-decoration-none">
                    <li>Mentions légales</li>
                    <li>Plolitique d'utilisation</li>
                    <li>Plolitique de confidentialité</li>
                    <li>Sujets</li>
                </ul>
            </div>
            <div class="col-md-2 col-sm-2 col-xs-2">
                <h5 class="heading">Catégores</h5>
                <ul class="card-text text-decoration-none">
                    <li>Santé</li>
                    <li>Art et Clture Sector</li>
                    <li>Science et techchnologie</li>
                    <li>Retail</li>
                </ul>
            </div>
            <div class="col-md-2 col-sm-2 col-xs-2">
                <h5 class="heading">Contacts</h5>
                <ul class="card-text text-decoration-none">
                    <li>Tel:77 7777777</li>
                    <li>Email:memo@memo.com</li>
                    <li>Site:www.memo.com</li>
                    <li>Adresse:Dakar</li>
                </ul>
            </div>
        </div>
        <div class="divider mb-4"> </div>
        
    </div>
</div>
   </>
  )
}

export default Footer
