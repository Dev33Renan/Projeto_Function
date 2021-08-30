import React, { useState, useEffect } from 'react';
import './Cadastro.css';

export default function Cadastro() {
  
  const [filmes, setfilmes] = useState([
    {   
      id: 1,  
      nome: 'A Guerra do Amanhã',
      imageUrl: 
      "https://br.web.img3.acsta.net/pictures/21/05/26/20/19/2966501.jpg",
    },
    
  ]);
  
  const [nomeFilme, setNomeFilme] = useState("");
  const [urlFilme, setUrlFilme] = useState("");
  const [atualizando, setAtualizando] = useState(false);
  const [idEdicao, setIdEdicao] = useState(null);

  useEffect(() => {
    if((idEdicao !== null) && atualizando) {
     
      setNomeFilme(filmes[idEdicao].nome)
      setUrlFilme(filmes[idEdicao].imageUrl)
    }
  }, [idEdicao])

  const handleNomeChange = (evento) => {
    setNomeFilme(evento.target.value);
  }

  const handleUrlChange = (evento) => {
    setUrlFilme(evento.target.value);
  }

  const handleSubmit = (evento) => {
    evento.preventDefault();
    if(atualizando) {
      const listaAtualizada = filmes.map((filme, indice) => {
        
        if(idEdicao === indice) {
          filmes.nome = nomeFilme;
          filmes.urlFilme = urlFilme;
        }
        return filme
      });

      setfilmes(listaAtualizada);

      setAtualizando(false);
            
      setIdEdicao(null);
    } else {
      
      setfilmes([
        ...filmes,
        {
          nome: nomeFilme,
          imageUrl: urlFilme,
        }
      ]);
      setNomeFilme("");
      setUrlFilme("");
    }
  }

  const handleDelete = (indice) => {
    setfilmes(filmes.filter((filme, indiceFilme) => indice !== indiceFilme))
  };

  return (
    <div>
      <h1>Filmes</h1>
      <h2>Cadastre um novo filme</h2>
        <form onSubmit={handleSubmit}>
            <label>Digite o nome:</label>
            <input type="text" value={nomeFilme} onChange={handleNomeChange}/>
            <br/>
            <label>Digite a Url a ser exibida:</label>
            <input type="" value={urlFilme} onChange={handleUrlChange}/>
            <br/>
            <button type="submit">Salvar</button>
        </form>
        <ul>
            {filmes.map((filme, indice) => (
            <li key={indice}>
                <p>
                { filme.nome }
                </p>
                <p>
                { filme.imageUrl }
                </p>
                <button type="button" onClick={() => handleDelete(indice) }>Excluir</button>
                <button type="button" onClick={() => {
                setAtualizando(true);
                setIdEdicao(indice);
                }}>Editar</button>
            </li>
            ))}
                    
        </ul>
    </div>
  )
}