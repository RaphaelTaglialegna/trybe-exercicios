const express = require('express');
const { Book } = require('../models')
const router = express.Router();

// Rota para cadastro de Livros 
router.post('/', async(req, res) => { 
  try {
    const { title, author, pageQuantity } = req.body 
    const book = await Book.create({title, author, pageQuantity});

    return res.status(201).json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });

  }
});

router.get('/', async(_req, res) => { 
  try {
    const book = await Book.findAll();

    return res.status(200).json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });

  }
});

router.get('/:id', async(req, res) => { 
  try {
    const { id } = req.params;
    const bookByid = await Book.findByPk(id);

    if (!bookByid) return res.status(404).json({message: 'Usuário não encotrado'}); 
    
    return res.status(200).json(bookByid);
   } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
    
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const { id } = req.params;

    const [updateBook] = await Book.update(
      { title, author, pageQuantity },
      { where: { id } },
    );

    console.log(updateBook); // confira o que é retornado quando o user com o id é ou não encontrado;

    if(!updateBook) return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json({ message: 'Usuário atualizado com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBook = await Book.destroy(
      { where: { id } },
    );

    console.log(deleteBook) // confira o que é retornado quando o user com o id é ou não encontrado;

    return res.status(200).json({ message: 'Usuário excluído com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});


module.exports = router;
