const express = require('express')
const middlewares = require('./middlewares');

const app = express()
const port = 3002
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/user', middlewares.createUser);
app.get('/user', middlewares.getAllUsers);
app.get('/user/:id', middlewares.findUserById);
app.put('/user/:id', middlewares.updateUser);

app.use(middlewares.error);


app.listen(port, () => console.log(`Example app listening on port ${port}!`))