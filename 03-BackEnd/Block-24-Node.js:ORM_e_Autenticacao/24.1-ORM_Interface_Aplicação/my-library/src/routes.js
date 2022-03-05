import React from "react";
import { Routes, Route} from "react-router-dom";

import CreateBook from './pages/addBooks';
import BooksList from './pages/InitialPage';

  function Rotas() {
    return(
    <Routes>
      <Route path='/' exact element={<BooksList />} />
      <Route path='/create' element={<CreateBook />} />
    </Routes>   
    )}

    export default Rotas;
