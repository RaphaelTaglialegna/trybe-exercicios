const users = [
  { id: 1, name: 'Mark' },
  { id: 2, name: 'Paul' },
];

const findUserById = (id) => new Promise((resolve, reject) => {
  const result = users.find((user) => user.id === id);

  if (result) {
    return resolve(result);
  }

  return reject(new Error(`User with ${id} not found.`));
});

const getUserName = (userId) => findUserById(userId).then((user) => user.name);


// Exercise - 2 - Test area! ;)
describe('Requisição do Exercicio 2 - Se existe o usuario', () => { 
  it('Check id 1 return Mark', () => (
      getUserName(1).then((result) => {
        expect(result).toBe('Mark');
      })
      
  ));
});
describe('Requisição do Exercicio 2 - Se returna Erro', () => { 
  it('test if catch the Error', () => {
    expect.assertions(1);
    return getUserName(3).catch((error) => (
      expect(error.message).toMatch(`User with 3 not found.`))
    );
  });
});

// Exercise - 3 - Test area! ;)
describe('Requisição do Exercicio 3 Async/Await - Se existe o usuario', () => { 
  it('Check id 1 return Mark', async () => {
      const result = await getUserName(1);
        expect(result).toBe('Mark');
  });
});
describe('Requisição do Exercicio 3 Async/Await - Se returna Erro', () => { 
  it('test if catch the Error', async () => {
    try {
      await getUserName(3);
    } catch (error) {
      expect(error).toEqual(new Error(`User with 3 not found.`));
    }
  });
});