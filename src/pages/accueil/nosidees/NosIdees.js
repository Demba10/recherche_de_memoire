import React from 'react'
import "./NosIdees"

const NosIdees = () => {
  return (
    <>
   <div class="container  mb-3">
    <h2 class=" mx-auto text-center mt-3 py-2 text-primary" >Sciences et Technologie </h2>
    <div class="row">
    <div class="col-md-4">
            <div class="card p-3 mb-2 shadow-sm">
                <div class="d-flex justify-content-between">
                    <div class="d-flex flex-row align-items-center">
                        <div class="icon"> <i class="bx bxl-mailchimp"></i> </div>
                        <div class="ms-2 c-details">
                             <span>il y'a un jour</span>
                        </div>
                    </div>
                    <div class="badge"> <span class="text-primary">Design</span> </div>
                </div>
                <div class="mt-5">
                    <h5 class="heading fw-bold">L'impact de l'intelligence artificielle sur la société moderne</h5>
                    <div class="button">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" id="boutton">
                      Voir Plus
                    </button>
                   
{/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
                  </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card p-3 mb-2 shadow-sm">
                <div class="d-flex justify-content-between">
                    <div class="d-flex flex-row align-items-center">
                        <div class="icon"> <i class="bx bxl-mailchimp"></i> </div>
                        <div class="ms-2 c-details">
                             <span>il y'a un jour</span>
                        </div>
                    </div>
                    <div class="badge"> <span class="text-primary">Art et Culture </span> </div>
                </div>
                <div class="mt-5">
                    <h5 class="heading fw-bold">L'impact du cinéma sur la société moderne.</h5>
                    <div class="button">
                    <button class=" btn " id="boutton">
                      Voir Plus
                    </button>
                  </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card p-3 mb-2 shadow-sm">
                <div class="d-flex justify-content-between">
                    <div class="d-flex flex-row align-items-center">
                        <div class="icon"> <i class="bx bxl-mailchimp"></i> </div>
                        <div class="ms-2 c-details">
                          <span>il y'a un jour</span>
                        </div>
                    </div>
                    <div class="badge"> <span class="text-primary">Sciences Sociales </span> </div>
                </div>
                <div class="mt-5">
                    <h5 class="heading fw-bold">Étude comparative des systèmes éducatifs mondiaux.</h5>
                    <div class="button">
                    <button class=" btn " id="boutton">
                      Voir Plus
                    </button>
                  </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="row">
    <div class="col-md-4">
            <div class="card p-3 mb-2 shadow-sm">
                <div class="d-flex justify-content-between">
                    <div class="d-flex flex-row align-items-center">
                        <div class="icon"> <i class="bx bxl-mailchimp"></i> </div>
                        <div class="ms-2 c-details">
                             <span>il y'a un jour</span>
                        </div>
                    </div>
                    <div class="badge"> <span class="text-primary">Santé</span> </div>
                </div>
                <div class="mt-5">
                    <h5 class="heading fw-bold">Impact de la technologie sur les soins de santé.</h5>
                    <div class="button">
                    <button class=" btn " id="boutton">
                      Voir Plus
                    </button>
                  </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card p-3 mb-2 shadow-sm">
                <div class="d-flex justify-content-between">
                    <div class="d-flex flex-row align-items-center">
                        <div class="icon"> <i class="bx bxl-mailchimp"></i> </div>
                        <div class="ms-2 c-details">
                             <span>il y'a un jour</span>
                        </div>
                    </div>
                    <div class="badge"> <span class="text-primary">Éducation</span> </div>
                </div>
                <div class="mt-5">
                    <h5 class="heading fw-bold">Technologies éducatives et apprentissage en ligne.</h5>
                    <div class="button">
                    <button class=" btn " id="boutton">
                      Voir Plus
                    </button>
                  </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card p-3 mb-2 shadow-sm">
                <div class="d-flex justify-content-between">
                    <div class="d-flex flex-row align-items-center">
                        <div class="icon"> <i class="bx bxl-mailchimp"></i> </div>
                        <div class="ms-2 c-details">
                             <span>il y'a un jour</span>
                        </div>
                    </div>
                    <div class="badge"> <span class="text-primary">Environnement et Durabilité</span> </div>
                </div>
                <div class="mt-5">
                    <h5 class="heading fw-bold">Écologie urbaine : Construire des villes durables</h5>
                    <div class="button">
                    <button class=" btn " id="boutton">
                      Voir Plus
                    </button>
                  </div>
                </div>
            </div>
        </div>
    </div>
    
    </div>
  </>
  
  )
}

export default NosIdees;
