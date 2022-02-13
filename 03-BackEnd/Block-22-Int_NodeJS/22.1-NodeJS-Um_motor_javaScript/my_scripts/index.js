const readline = require('readline-sync');

console.log("1 - APP IMC");
console.log("2 - APP Metros por segundo");
console.log("3 - APP Minha sorte /n");
console.log("");

const userApp = readline.questionFloat('Digite o numer do App que você quer acessar: ');
switch (userApp) {
  case 1:
    require('./imc.js');
    break;
  case 2:
    require('./velocidade.js');
    break;
  case 3:
    require('./sorteio.js');
    break;    
  default:
  console.log("Você digitou um numero errado!")
    break;
}
