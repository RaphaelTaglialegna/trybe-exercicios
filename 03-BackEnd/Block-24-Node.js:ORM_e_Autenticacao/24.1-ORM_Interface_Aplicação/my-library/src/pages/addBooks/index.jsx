import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from './style';

async function addBook (book) { 
  
  const result = await fetch(`http://localhost:3001/books/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book)
    });
    console.log(result)
  }

  
  function CreateBook() {
    const [book, setBook] = useState({
      title:'',
      author: '',
      pageQuantity: 0,
    })
    let navigate = useNavigate();
    
    const handleChange = e => {
      const { name, value } = e.target;
      setBook(prevState => ({
          ...prevState,
          [name]: value
      }));
  };

  return (
    <div>
      <span>Cadastro de Livros</span>
      <Container>
      <label>
      <span>Title:</span>
      <input 
        value={book.title}
        type="text"
        onChange={handleChange}
        name="title"
      />
      </label>

      <label>
      <span>Author:</span>
      <input 
        value={book.author}
        type="text"
        onChange={handleChange}
        name="author" 
      />
      </label>  

      <label>
      <span>Numbers of Pages:</span>
      <input
        value={book.pageQuantity}
        type="text"
        onChange={handleChange}
        name="pageQuantity"
       />
      </label>

      <button type='button' onClick={async () => {
        await addBook(book);
        navigate('/');
      }}
      >
        Cadatro
      </button>
      </Container>
    </div>
  )
}
export default CreateBook;