const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/connections');

const MoviesModel = require('../../models/movieModel');
const MoviesService = require('../../services/movieService');

/*
  Precisamos validar se estamos recebendo todos os campos
  necessários para a operação. Como trata-se de uma regra
  de negócio, validaremos na camada de serviços.
*/
describe('Test Services - Insere um novo filme no BD', () => {
  describe('quando o payload informado não é válido', () => {
    const payloadMovie = {};

    it('retorna um boolean', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('boolean');
    });

    it('o boolean contém "false"', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.equal(false);
    });

  });

  describe(' Test Services - quando é inserido com sucesso', () => {
    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

     before(() => {
      const ID_EXAMPLE = 1;

      sinon.stub(MoviesModel, 'create')
        .resolves({ id: ID_EXAMPLE });
    });

    // Restauraremos a função `create` original após os testes.
    after(() => {
      MoviesModel.create.restore();
    });

    it('retorna um objeto', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });

  });
});


describe('Test Services -  Busca o filme pelo ID existente', () => {
  const dataBase= [{ 
      id: 3, 
      title: 'Example Movie',
      directed_by: 'Jane Dow',
      release_year: 1999,
  }];

  const ID = 3;

  before(async (id = ID) => { 
    
    sinon.stub(MoviesModel, 'findById').resolves( dataBase.find((obj) => obj.id === id))
  }); 
  // Restauramos a função 'execute' original após os testes.
after(async () => { 
  MoviesModel.findById.restore()
});

  it('retorna um objeto com um id existente', async() => { 
    const response = await MoviesService.findById(ID)

    expect(response).to.be.an('object');
  });
  it('objeto não esta vazio o com um id existente', async() => { 
    const response = await MoviesService.findById(ID)

    expect(response).to.be.an('object');
    expect(response).to.be.not.empty;
  });

  it('retorna os parâmetros do objeto com um id existente', async() => { 
    const response = await MoviesService.findById(ID)

    expect(response).to.include.all.keys('id', 'title', 'directed_by', 'release_year');
    
  });

});

describe('Test Services -  Busca o filme pelo ID inexistente', () => {

before(async () => { 
  const execute = [[]];
  sinon.stub(connection, 'execute').resolves(execute);
}); 
// Restauramos a função 'execute' original após os testes.
after(async () => { 
connection.execute.restore()
});

it('retorna null', async() => { 
  const response = await MoviesService.findById()

  expect(response).to.be.equal(null);
});

});