import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CursosPriv from './pages/admin/cursopriv';
import Cursos  from './pages/cursos'; 
import Dicas from './pages/Dicas';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Dicas/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
