import React, { useState, useEffect } from 'react';
// import Iframe from 'react-iframe';
import './Cadastro.css';

export default function Cadastro() {
  
  const [filmes, setfilmes] = useState([
    {   
      id: 1,  
      nome: 'A Guerra do Amanhã',
      imageUrl: 
      "https://br.web.img3.acsta.net/pictures/21/05/26/20/19/2966501.jpg",
      
    },

    {   
      id: 2,  
      nome: 'No Limite do Amanhã',
      imageUrl: 
      "https://www.hostfilmes.com/wp-content/uploads/2016/04/No-Limite-do-Amanh%C3%A3-1080p.jpg",
      
    },

    {   
      id: 3,  
      nome: 'Guerra dos Mundos',
      imageUrl: 
      "https://media.fstatic.com/mz1mvqiQdyfSJJxDlU24st9qEp0=/fit-in/290x478/smart/media/movies/covers/2015/10/guerra-dos-mundos_t519.png",
      
    },

    {   
      id: 4,  
      nome: 'Missão Impossível',
      imageUrl: 
      "https://th.bing.com/th/id/R.8523683e8373e2335b6bedb61c16b639?rik=bYlSlUB5%2bJr9vA&pid=ImgRaw&r=0",
      
    },
    
  ]);
  
  const [nomeFilme, setNomeFilme] = useState("");
  const [urlFilme, setUrlFilme] = useState("");
  // const [videoFilme, setVideoFilme] = useState("");
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

  // const handelVideoChange = (evento) => {
  //   setVideoFilme(evento.target.value);
  // }

  const handleSubmit = (evento) => {
    evento.preventDefault();
    if(atualizando) {
      console.log(atualizando)
      const listaAtualizada = filmes.map((filme, indice) => {
        
        if(idEdicao === indice) {
          filme.nome = nomeFilme;
          filme.urlFilme = urlFilme;
          // filme.videoFilme = videoFilme;
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
          // videoFilmes: videoFilme,
        }
      ]);
      setNomeFilme("");
      setUrlFilme("");
      // setVideoFilme("");
    }
  }

  const handleDelete = (indice) => {
    setfilmes(filmes.filter((filme, indiceFilme) => indice !== indiceFilme))
  };

  return (
    <div>
      <h1>Catalogo de Filmes</h1>
      <h2>Cadastre um novo filme</h2>
        <form class="container" onSubmit={handleSubmit}>
            <label>Digite o nome do filme:</label>
            <input type="text" value={nomeFilme} onChange={handleNomeChange}/>
            <br/>
            <label>Digite a url do filme:</label>
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
              <div class="Container">
                <p>
                  <img src={filme.imageUrl} alt={filme.nome}/>
                </p>
                <button type="button" onClick={() => handleDelete(indice) }>Excluir</button>
                <button type="button" onClick={() => {setAtualizando(true); setIdEdicao(indice);}}>Editar</button>
              </div>
               
            </li>
            ))}
                    
        </ul>
    </div>
  )
}