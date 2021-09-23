const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

// Exercise - 4 - Test area! ;)
describe('Requisição do Exercicio 4 Async/Await - Se Existe os Repositórios', () => { 
  it('Check the repositories 2', async () => {
      const result = await getRepos('https://api.github.com/orgs/tryber/repos');
        expect(result).toContain('sd-01-week4-5-project-todo-list');
  });
  it('Check the repositories 2', async () => {
    const result = await getRepos('https://api.github.com/orgs/tryber/repos');
      expect(result).toContain('sd-01-week4-5-project-meme-generator');
});
});
