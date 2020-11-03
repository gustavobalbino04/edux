import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container,nav,button } from 'react';

const Cursos = () => {
    return (
        <div>
          
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="https://blog.engage.bz/wp-content/uploads/2019/08/Banner-blog-gamificacao-para-capacitar-equipe-comercial_Prancheta-1.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src="https://laboro.edu.br/wp-content/uploads/2019/07/gamificacao-educacao-ensinoip.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src="https://blog.engage.bz/wp-content/uploads/2019/08/Banner-blog-gamificacao-para-capacitar-equipe-comercial_Prancheta-1.jpg" className="d-block w-100" alt="..."/>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>  


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
                <a href="#" style={{background : red}} class="btn btn-primary">Excluir</a>
                

                
              </div>
            </div>
            
      </div>
        
      
    )
}
export default Cursos;
