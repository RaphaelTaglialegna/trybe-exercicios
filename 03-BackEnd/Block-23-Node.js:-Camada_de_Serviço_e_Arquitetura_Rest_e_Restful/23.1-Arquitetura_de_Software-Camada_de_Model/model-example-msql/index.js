const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());


const Authors = require('./models/Author');
const Books = require('./models/Books');

app.get('/authors', async (req, res) => {
  const authors = await Authors.getAll();

  res.status(200).json(authors);
});
app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Authors.findById(id);

  if(!author) return res.status(404).json({ message: 'Not found'});
  res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;
  
  if (!Authors.isValid(first_name, middle_name, last_name)) {
      return res.status(400).json({ message: 'Dados inválidos' });
  }

  await Authors.create(first_name, middle_name, last_name);

  res.status(201).json({ message: 'Autor criado com sucesso! '});
});


app.get('/books', async (req, res) => {
  const books = await Books.getAll();
  
  res.status(200).json(books)
})

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Books.findById(id);

  if(!book) return res.status(404).json({ message: 'Not found'});
  res.status(200).json(book);
});

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;
  const check = await Books.isValid(title, author_id);
  if (!check) {
      return res.status(400).json({ message: 'Dados inválidos' });
  }

  await Books.create(title, author_id);

  res.status(201).json({ message: 'Livro adicionado com sucesso! '});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))