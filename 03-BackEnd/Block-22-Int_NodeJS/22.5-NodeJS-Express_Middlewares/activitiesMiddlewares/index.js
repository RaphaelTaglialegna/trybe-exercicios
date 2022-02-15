const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors'); 
const PORT = 3001;

// Crie uma rota POST /user/register que receba uma requisição que envie username , email e password no body da requisição, onde:
const userRouter = require('./routers/userRouter');

app.use(cors());
app.use(bodyParser.json());

app.use('/user', userRouter);
app.use('/btc', userRouter);

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});