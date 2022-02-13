const assert = require('assert');

// escreva sum abaixo  -> https://javascript.info/rest-parameters-spread
// function sum (...num) {
//   let soma = 0;
//   for (let numb of num) {
//     soma += numb;
//   }
//   return soma;
// }

// using reduce 

const sum = (...num) => num.reduce(((acc, curr) => acc + curr), 0);


assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);