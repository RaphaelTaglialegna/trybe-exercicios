### Exercicio de Fixação 

Entendendo o componentDidMount

Para entender melhor, usando React, vamos consumir uma API de Rick and Morty, cujo o endpoint é `https://rickandmortyapi.com/api/character` , e exibir na tela os nomes dos personagens e suas respectivas fotos.

Então, o primeiro passo será criar um `App React` com o já familiar `npx create-react-app my-interdimensional-app` e instalar as dependências:

```jsx
npx create-react-app my-interdimensional-app
cd my-interdimensional-app
npm install
```

Caso você queira ver as coisas acontecendo com um pouco mais de estilo, literalmente, é só substituir o conteúdo de App.css por:

```css
// App.css
.App {
  background-size: cover;
  background: linear-gradient(-45deg,#0b0c0c,  #125269, #125269, #0b0c0c);
  color: white;
  padding: 40px 20px;
  text-align: center;
}

.container {
  background-color: rgb(212, 195, 195);
  border-radius: 2px;
  border: 3px solid rgba(0, 0, 0, 0.125);
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.418);
  color: black;
  display: flex;
  flex-direction: column;
  height: 20%;
  margin: 5px;
  width: 300px;
}

.body {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  padding: 30px;
}
```

Depois de transformar o componente App.js em um componente de classe, já podemos definir nosso estado inicial local, para que possamos armazenar nele os dados que a API retornará. Também podemos fazer, em seguida, a requisição e colocar um título para ser exibido na página. Veja abaixo:

```jsx
// App.js
import React, { Component }from 'react';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            characters: [],
        };
      }

    componentDidMount() {
      fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        this.setState({characters: data.results})
      })
    }

  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
        <div className="body">
          {characters.map((character) => {
            return (
              <div className="container" key={character.name}>
                <h3>{character.name}</h3>
                <img src={character.image} alt={character.name}/>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
```

