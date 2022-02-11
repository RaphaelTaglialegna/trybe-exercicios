const express = require('express');
const app = express(); 

app.get('/hello', hendleHelloWorldRquest); 
app.listen(3001, () => { 
  console.log('Aplicação ouvindo na porta 3031');
});

function hendleHelloWorldRquest(req, res) { 
  res.status(200).send('Hello World !!!');

};


