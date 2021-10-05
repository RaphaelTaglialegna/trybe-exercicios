import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render () {
     return(
  <div className='columns'>
    {conteudos.map((elem) => (
    <div key={elem.conteudo} className='column'>      
      <div class="tile is-parent">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-warning">
              <p class="title is-size-5">O conteudo é: {elem.conteudo}</p>
              <p class="subtitle">Status: {elem.status}</p>
              <p class="subtitle">bloco: {elem.bloco}</p>
            </article>
          </div> 
        </div>
      </div>
    </div>
    ))}
  </div>
     );
  }
}
export default Content;