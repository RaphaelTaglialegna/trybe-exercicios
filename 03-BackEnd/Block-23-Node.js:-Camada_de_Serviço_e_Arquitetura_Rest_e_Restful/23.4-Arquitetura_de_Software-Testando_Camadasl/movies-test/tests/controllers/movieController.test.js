const sinon = require('sinon');
const { expect } = require('chai');

const MoviesService = require('../../services/movieService');
const MoviesController = require('../../controllers/movieController');


describe(' Test Controller -  Ao chamar o controller de create', () => {
  describe('Test Controller - quando o payload informado não é válido', () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};

      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub()
        .returns();
        
        sinon.stub(MoviesService, 'create')
        .resolves(false);
    });

    /*
        Perceba que nosso stub também simula os comportamentos do `service`,
        dessa forma, conseguimos testar o comportamento do controller de
        maneira isolada.

        Aqui, todos os testes que requisitarem o serviço, devem receber
        retorno `false`.
      */


    // Restauraremos a função `create` original após os testes.
    after(() => {
      MoviesService.create.restore();
    });

    it('é chamado o status com o código 400', async () => {
      await MoviesController.create(request, response);

      expect(response.status.calledWith(400)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Dados inválidos"', async () => {
      await MoviesController.create(request, response);

      expect(response.send.calledWith('Dados inválidos')).to.be.equal(true);
    });

  });

  describe('Test Controller - quando é inserido com sucesso', () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      };

      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub()
        .returns();

        sinon.stub(MoviesService, 'create')
        .resolves(true);
    });

     /*
        Aqui, todos os testes que requisitarem o serviço, devem receber
        retorno `true`.
      */


    // Restauraremos a função `create` original após os testes.
    after(() => {
      MoviesService.create.restore();
    });


    it('é chamado o status com o código 201', async () => {
      await MoviesController.create(request, response);

      expect(response.status.calledWith(201)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Filme criado com sucesso!"', async () => {
      await MoviesController.create(request, response);

      expect(response.send.calledWith('Filme criado com sucesso!')).to.be.equal(true);
    });

  });
});

describe('Test controller - Ao chamar o controller de findById', () => {
  describe('Test Controller quando não existem filmes no banco de dados', async () => {
    const response = {};
    const request = {};

    before (() => { 
      request.params = { 
        id: 35
      };
      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();
        sinon.stub(MoviesService, 'findById')
          .resolves(null);
    });

    after(() => { 
      MoviesService.findById.restore();
    }); 

    it('é chamado o método "status" passando 404', async () => { 
      await MoviesController.findById(request, response); 
      expect(response.status.calledWith(404)).to.be.equal(true);
    });
    it('é chamado o método "send" com a mensagem not "Not Found"', async () => { 
      await MoviesController.findById(request, response); 
      expect(response.json.calledWith({ message: 'Not Found'})).to.be.equal(true);
    });
  });
  describe('Test Controller - quando existem filmes no banco de dados', async () => {
    const response = {};
    const request = {};

    before(() => {
      request.params = {
        id: 1
      };

      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();

      sinon.stub(MoviesService, 'findById')
        .resolves({
          id: 1,
          title: 'Example Movie',
          directedBy: 'Jane Dow',
          releaseYear: 1999,
        });
    })

    after(() => {
      MoviesService.findById.restore();
    });
    it('é chamado o método "status" passando 200', async () => { 
      await MoviesController.findById(request, response); 
      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    t('é chamado o método "json" passando um objeto', async () => { 
      await MoviesController.findById(request, response); 
      expect(response.json.calledWith(sinon.match.object)).to.be.equal(true);
    });

  });
});