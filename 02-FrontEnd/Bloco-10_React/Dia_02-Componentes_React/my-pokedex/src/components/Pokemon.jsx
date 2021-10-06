import React from "react";
import data from './data';
//const { id, name, type, image } = data;
function pokemons() {
  
  return data.map((poke) => 
    <>
      <div className="column" key={poke.id}>
        <section className="hero is-white" key={poke.name}>
          <div className="hero-body">
            <p className="title is-size-5">{poke.name}</p>
            <p className="subtitle ">{poke.type}</p>
            <figure className="image is-128x128">
              <img src={poke.image} alt='pokemonLogo'></img>
            </figure>  
          </div>
        </section>
      </div>    
    </>
  );
 
  
}
  
export default pokemons