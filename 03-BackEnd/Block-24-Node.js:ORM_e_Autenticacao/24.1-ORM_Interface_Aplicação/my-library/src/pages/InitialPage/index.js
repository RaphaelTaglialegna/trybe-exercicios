import React from 'react';
import { Container } from './style';


class BooksList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/books/')
      .then(response => response.json())
      .then((books) => this.setState(
        {
          books,
          isLoading: false,
        },
      ));
  
    }
  

  render() {
    const { books, isLoading } = this.state;

    return (
      <div>
        <div>
          {isLoading}
          <Container className='card-group'>
            {books.map((book) => (
              <Container key={book.id}>
                <h1>{book.title}</h1>
                <span>Autor: {book.author}</span>
                <span>Número de páginas: {book.pageQuantity}</span>
              </Container>
            ))}
          </Container>
        </div>
      </div>
    );
  }
}

export default BooksList;