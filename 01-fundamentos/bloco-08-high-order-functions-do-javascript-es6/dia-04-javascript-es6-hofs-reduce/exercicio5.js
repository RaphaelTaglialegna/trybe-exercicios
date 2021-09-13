const assert = require('assert');
const { cursorTo } = require('readline');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, ocurr) =>  acc + ocurr.split('').reduce((acumulador, current) => {
    if( current === 'a' || current === 'A') return acumulador + 1;
    return acumulador;
  }, 0), 0);
}
console.log(containsA());
assert.deepStrictEqual(containsA(), 20);