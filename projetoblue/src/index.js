import React, {useState , useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export default function Project(){
  return <h1>Meu Projeto em React</h1>
}

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Cadastro />
    </React.StrictMode>,
  document.getElementById('root')
);