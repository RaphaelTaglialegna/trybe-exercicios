const express = require('express')
const app = express()

const BookController = require('./src/controllers/bookController'); 
const PORT = process.env.PORT || 3001;
app.use(express.json());

app.use('/books', BookController);
app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));