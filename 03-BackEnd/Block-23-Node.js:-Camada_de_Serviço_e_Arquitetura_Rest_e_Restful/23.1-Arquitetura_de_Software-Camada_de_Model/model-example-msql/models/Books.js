const connection = require('./connection');

const getAll = async () => { 
  const [books] = await connection.execute('SELECT title, author_id FROM books'); 

  return books;
};

const findById = async (id) => { 
  const [bookData] = await connection.execute('SELECT title FROM books WHERE author_id=?', [id]);

  if (bookData.length === 0) return null;

  

  return bookData;
}

const isValid = async (title, id) => {
  if (!title || typeof title !== 'string') return false;
  if (!id || typeof id !== 'string') return false;
  const [authorData] = await connection.execute('SELECT first_name, middle_name, last_name FROM authors WHERE id=?', [id]);

  if (authorData) return true;
  return false;
};

const create = async (title, id) => connection.execute(
  'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
  [title, id],
);

module.exports = {
  getAll,
  findById,
  isValid,
  create
};