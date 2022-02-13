const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');

const createFileText = require('../createFileText');

describe('Exercício 4 ao 5: Crie testes para uma função que escreverá um conteúdo em um arquivo específico. ', () => { 
  describe('Executa a função escrevaArquivo', () => {
    before(() => {
      sinon.stub(fs, 'writeFile');
    });
  
    after(() => {
      fs.writeFile.restore();
    });

    describe('1 - Essa função deverá receber dois parâmetros: o nome do arquivo e o conteúdo desse arquivo', () => { 
      it('Retorna uma string.', () => { 
        const returncreateFileText = createFileText('text.txt', 'New content!'); 
        expect(returncreateFileText).to.be.a('string');
      });

      it('Retorna um "ok"', () => { 
        const returncreateFileText = createFileText('text.txt', 'New content!'); 
        expect(returncreateFileText).to.be.equals('ok');
      });

    }); 
  }); 
});
