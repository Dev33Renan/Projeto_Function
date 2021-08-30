
// import React, {useState} from 'react';
// import './App.css';


// export default function  Games(){
//     return <h1>Catalogos de Games</h1>
// }

// export default class App extends React.Component{
//     constructor(props){
//       super(props);
  
//       this.state = {
//         games: [
//           {
//             id: 1,
//             nome: "Watch Dogs",
//             imagemUrl:
//               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpOByAsKu4fywPyclWJLMGwYKX74bdgoN3ahEtfl1gj9hqKrwgQAXJFjF2xD26ca5TVzo&usqp=CAU",
//             }
//         ],
//       };
//     }
//     render(){
//       const{ games } = this.state;
      
//       return(
//         <div className="container">
//           <h1>Catalogo de Games</h1>
//           <ul>
//           { games.map ((f) => (
//           <li key={f.id}>
//             <h3>{f.nome}</h3>
//             <img src={f.imagemUrl} alt={f.nome}/>
//           </li>
//           ))}
//           </ul>
//         </div>
//       );
//     }  
//   };