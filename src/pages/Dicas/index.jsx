import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container,nav,button } from 'react';

const Dicas = () => {
    return (
        <div>
          
          <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4">Fluid jumbotron</h1>
              
              <p class="lead">Este é um jumbotron modificado que ocupa todo o espaço horizontal de seu elemento pai.</p>
            </div>
          </div>  



        <div class="container">
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            
        </div>
            
      </div>
        
      
    )
}
export default Dicas;