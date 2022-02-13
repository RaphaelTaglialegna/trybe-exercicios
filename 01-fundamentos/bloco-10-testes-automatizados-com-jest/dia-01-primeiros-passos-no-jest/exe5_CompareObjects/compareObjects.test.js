const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui
test('Comparando os Objetos 1 e 2', () => {
  expect((obj1)).toEqual(obj2);
});
test('Comparando os Objetos 1 e 3', () => {
  expect((obj1)).not.toEqual(obj3);
});
test('Comparando os Objetos 2 e 3', () => {
  expect((obj2)).not.toEqual(obj3);
});