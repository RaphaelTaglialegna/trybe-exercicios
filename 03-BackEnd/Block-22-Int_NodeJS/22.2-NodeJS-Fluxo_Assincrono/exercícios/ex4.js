const fs = require('fs').promises;

function readNames(){ 

  fs.readFile('./simpson.json', 'utf-8')
    .then((content) => {
      return JSON.parse(content);

    })
    .then((simpsons) => { 
      return simpsons.map(({id, name}) => `${id} - ${name}`);
      
    })
    .then((obj) => { 
      obj.forEach(element => console.log(element));
    });
  
} 

function readId(sid) { 
  const promise = new Promise((res, rej) => { 
    fs.readFile('./simpson.json', 'utf-8')
    .then((content) => {
      return JSON.parse(content);

    })
    .then((simpsons) => { 
      const find = simpsons.find(({ id }) => Number(id) === sid)
       if(find) { 
         res(`Resultado do Find: ${find.id} - ${find.name}`);
       }
       rej(new Error('FindID Error: Id inválido'));
    });
  });
  return(promise);
};

function writeSimpson() { 
    fs.readFile('./simpson.json', 'utf-8')
    .then((content) => {
      return JSON.parse(content);

    })
    .then((simpsons) => { 
      const filter = simpsons.filter(({ id }) => Number(id) !== 6 && Number(id) !== 10);
       
      fs.writeFile('./simpson.json', JSON.stringify(filter))
       .then(() => {
         console.log('Arquivo escrito com sucesso!');
       })
       .catch((err) => {
         console.error(`Erro ao escrever o arquivo: ${err.message}`);
       });
    });
};


function simpsonFamily() { 
  fs.readFile('./simpson.json', 'utf-8')
  .then((content) => {
    return JSON.parse(content);
  })
  .then((simpsons) => {
    const filter = simpsons.filter(({ id }) => Number(id) <= 4);
     
    fs.writeFile('./simpsonFamily.json', JSON.stringify(filter))
     .then(() => {
       console.log('Arquivo criado com  sucesso!');
     })
     .catch((err) => {
       console.error(`Erro ao criar arquivo: ${err.message}`);
     });
  });
};
async function addNeslson() { 
  const readFile =  await fs
    .readFile('./simpson.json', 'utf-8')
    .then((content) => JSON.parse(content));
  
  const family = readFile.filter(({ id, name }) => Number(id) <= 4 || name == 'Nelson Muntz');
    
   await fs.writeFile('./simpsonFamily.json', JSON.stringify(family))
     .then(() => {
       console.log('Nelson Add com  sucesso!');
     })
     .catch((err) => {
       console.error(`Erro ao criar arquivo: ${err.message}`);
     });
};

async function addMeggie() { 
await fs.readFile('./simpsonFamily.json', 'utf-8')
  .then((content) => {
    return JSON.parse(content);
  })
  .then((simpsons) => {
    const filterNelson = simpsons.filter(({ id, name }) => name != 'Nelson Muntz');
    filterNelson.push({ id: '5', name: 'Maggie Simpson' }); 
    
  fs.writeFile('./simpsonFamily.json', JSON.stringify(filterNelson))
     .then(() => {
       console.log('Maggie Add com  sucesso!');
     })
     .catch((err) => {
       console.error(`Erro ao criar arquivo: ${err.message}`);
     });
  });
};
addMeggie()
addNeslson()
simpsonFamily()
readNames()
writeSimpson();

readId(2)
  .then(result => console.log(result))
  .catch(err => console.log(err.message));