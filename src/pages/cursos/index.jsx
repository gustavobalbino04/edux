import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container,nav,button } from 'react';

const Cursos = () => {
    return (
        <div>
          
          <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4">Fluid jumbotron</h1>
              
              <p class="lead">Este é um jumbotron modificado que ocupa todo o espaço horizontal de seu elemento pai.</p>
            </div>
          </div>  



        <div class="container">

            <div class="card">
              <div class="card-header">
                Featured
              </div>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Editar</a>
                <a href="#"  class="btn btn-primary">Excluir</a>
                

                
              </div>
            </div>
        </div>
            
      </div>
        
      
    )
}
export default Cursos;
