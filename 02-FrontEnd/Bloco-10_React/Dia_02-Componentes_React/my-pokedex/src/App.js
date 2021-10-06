import React from 'react';
import './App.css';
import Pokemon from './components/Pokemon';

function App() {
  return (
    <>
    <section className="section" key='section'>
    <h1 className="title">My Pokedex</h1>
    <h2 className="subtitle">
      Encontre aqui o seu <strong>Pokemom</strong> favorito.
    </h2>
    <div className="columns is-flex-wrap-wrap" key='columns'>
    <Pokemon />
    </div>
  </section>
  </>
  );
}

export default App;
