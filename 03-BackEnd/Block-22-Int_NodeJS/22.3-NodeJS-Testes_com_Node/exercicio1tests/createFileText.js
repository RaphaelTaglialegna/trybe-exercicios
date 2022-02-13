const fs = require('fs'); 

module.exports = (fileName, content, ) => { 
  fs.writeFile(`${__dirname}/${fileName}`, content, 'utf8', (err) => { 
    if(err) throw err; 
  });
  return 'ok'
};