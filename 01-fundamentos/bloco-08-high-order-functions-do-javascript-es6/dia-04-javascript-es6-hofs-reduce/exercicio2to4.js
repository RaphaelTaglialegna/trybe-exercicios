const assert = require('assert');
const { resourceUsage } = require('process');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
// const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

// function reduceNames() {
//   // escreva seu código aqui
//  let authorString = books.reduce((acc,currVal,idx) => {
//     return idx === 0 ? currVal.author.name : `${acc}, ${currVal.author.name}`;
// }, '');
// return authorString = `${authorString}.` 
// }

// assert.strictEqual(reduceNames(), expectedResult);

// const expectedResult = 43;

// function averageAge() { 
  
//   const getAges = books.reduce((acc, currVal) =>  acc + ( currVal.releaseYear - currVal.author.birthYear), 0);
//   let media = getAges /books.length;
//   return media; 
// }

// assert.strictEqual(averageAge(), expectedResult);

const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

function longestNamedBook() {
  
  return books.reduce((acc, currBook) => {
    if (currBook.name.length > acc.name.length) {
      return currBook;
    } 
    return acc;
  });
  
}

assert.deepStrictEqual(longestNamedBook(), expectedResult);