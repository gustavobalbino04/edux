import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container,nav,button } from 'react';

const CursosPriv = () => {
    return (
        <div>
          
          <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4">Fluid jumbotron</h1>
              
              <p class="lead">Este é um jumbotron modificado que ocupa todo o espaço horizontal de seu elemento pai.</p>
            </div>
          </div>  



        <div class="container">

            <form className="Container" >
              <div className="form-group">
                <label for="exampleFormControlInput1">Titulo do Curso</label>
                <input text="nomeCurso" class="form-control" id="exampleFormControlInput1" placeholder="ex: Jogos de Matematica"/>
              </div>
              <div className="form-group">
                <label for="exampleFormControlSelect1">Instituição</label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <button type="button" class="btn btn-primary btn-lg btn-block">Cadastrar</button>
              <button type="button" class="btn btn-secondary btn-lg btn-block">Cancelar</button>
            </form>
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
export default CursosPriv;