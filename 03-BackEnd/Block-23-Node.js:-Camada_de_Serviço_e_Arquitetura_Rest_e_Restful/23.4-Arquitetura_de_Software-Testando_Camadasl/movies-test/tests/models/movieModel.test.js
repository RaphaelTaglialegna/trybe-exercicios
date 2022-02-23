const sinon = require('sinon');
const { expect } = require('chai');

/*
  Como ainda não temos a implementação, vamos fixar
  um objeto simulando os métodos que iremos desenvolver,
  porém, eles não terão nenhum comportamento
*/
const conection = require('../../models/connections');
const MoviesModel = require('../../models/movieModel');

describe('Test Model - Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  }
  before(async () => { 
    const execute = [{ insertId: 1}]; // retorno esperado do text.
    sinon.stub(conection, 'execute').resolves(execute);
  }); 
  // Restauramos a função 'execute' original após os testes.
after(async () => { 
  conection.execute.restore()
});


  describe('quando é inserido com sucesso', () => {
    
    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object')
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id')
    });

  });
});

describe('Test Model - Busca o filme pelo ID existente', () => {
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
      const response = await MoviesModel.findById(ID)

      expect(response).to.be.an('object');
    });
    it('objeto não esta vazio o com um id existente', async() => { 
      const response = await MoviesModel.findById(ID)

      expect(response).to.be.an('object');
      expect(response).to.be.not.empty;
    });

    it('retorna os parâmetros do objeto com um id existente', async() => { 
      const response = await MoviesModel.findById(ID)

      expect(response).to.include.all.keys('id', 'title', 'directed_by', 'release_year');
      
    });

});

describe('Test Model -  Busca o filme pelo ID inexistente', () => {
 
  before(async () => { 
    const execute = [[]];
    sinon.stub(conection, 'execute').resolves(execute);
  }); 
  // Restauramos a função 'execute' original após os testes.
after(async () => { 
 conection.execute.restore()
});

  it('retorna null', async() => { 
    const response = await MoviesModel.findById()

    expect(response).to.be.equal(null);
  });

});