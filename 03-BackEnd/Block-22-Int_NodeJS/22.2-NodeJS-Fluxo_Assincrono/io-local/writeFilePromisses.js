const fs = require('fs').promises;

const nomeDoArquivo = 'meu-arquivo.txt';

fs.writeFile(nomeDoArquivo, 'Meu Textão')
  .then(() => {
    console.log('Arquivo escrito com sucesso!');
  })
  .catch((err) => {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  });