import { BrowserRouter, Link } from 'react-router-dom';
import Rotas from './routes';
function App() {
  return (
    <BrowserRouter >
      <span> My Library</span>    
      <Link to='/create'>Cadastre um Livro</Link>

      <Rotas/>
    </BrowserRouter>
  );
}

export default App;
