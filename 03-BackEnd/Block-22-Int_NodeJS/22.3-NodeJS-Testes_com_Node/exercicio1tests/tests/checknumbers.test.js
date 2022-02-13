const { expect } = require('chai');

const checkNumber = require('../checkNumber');

describe('Exercício 1: checa a função se o numero passado é "positivo", "negativo" ou "neutro".', () => { 
  describe('1 - Retorna se o numero é positivo se o numero for maior que 0.', () => { 
    it('Retorna uma string.', () => { 
      const answer = checkNumber(5); 
      expect(answer).to.be.a('string');
    });

    it('1 - Retorna "positivo"', () => { 
      const answer = checkNumber(5); 
      expect(answer).to.be.equals('positivo');
    });

  });

  describe('2 - Retorna se o numero é negativo se o numero for menor que 0.', () => { 
    it('Retorna uma string.', () => { 
      const answer = checkNumber(-5); 
      expect(answer).to.be.a('string');
    });
    it('2 - Retorna "negativo".', () => { 
      const answer = checkNumber(-5); 
      expect(answer).to.be.equals('negativo');
    });

  });

  describe('3 - Retorna se o numero é neutro se o número for igual a 0.', () => { 
    it('Retorna uma string.', () => { 
      const answer = checkNumber(0); 
      expect(answer).to.be.a('string');
    });
    it('3 - Retorna "neutro".', () => { 
      const answer = checkNumber(0); 
      expect(answer).to.be.equals('neutro');
    });
  });
});
