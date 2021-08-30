import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cadastro from './Cadastro';

export default function Project(){
  return <h1>Meu Projeto em React</h1>
}

ReactDOM.render(
  <React.StrictMode>
    <Cadastro />
    </React.StrictMode>,
  document.getElementById('root')
);