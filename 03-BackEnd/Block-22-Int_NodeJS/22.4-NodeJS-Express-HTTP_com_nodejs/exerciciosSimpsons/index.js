const express = require('express');
const app = express();
const fs = require('fs/promises');
const rescue = require('express-rescue');
const port = 3001;
const bodyParser = require('body-parser');
const { error } = require('console');

app.use(bodyParser.json());

function readFileSimpsons() { 
  return fs.readFile('./simpsons.json', 'utf8')
      .then(data => JSON.parse(data))
}

function writeFileSimpsons(newFile) { 
  return fs.writeFile('./simpsons.json', JSON.stringify(newFile));
}
app.get('/simpsons',rescue (async (req, res) => {
  const simpsons = await readFileSimpsons();   
  res.status(200).json(simpsons)
  })
);

app.get('/simpsons/:id', rescue(async (req, res) => {
  const { id } = req.params;
  const simpsons = await readFileSimpsons();   
 
    const character = simpsons.find((r) => r.id === id);  
    if(!character)res.status(404).json({ message: 'ID not found!'});  
    res.status(200).json(character)
  })
);


app.post('/simpsons', rescue(async (req, res) => {
  const { id, name } = req.body;

    const simpsonsData = await readFileSimpsons()

    const characterID = simpsonsData.find((r) => r.id === id);
    if(characterID)res.status(409).json({ message: 'id already exists'});
    
    
    simpsonsData.push({ id, name });
    await writeFileSimpsons(simpsonsData);
    
    res.status(204).end();
  
  })
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
