const readline = require('readline-sync');

console.log('Você está concorrendo a varios PRÊMIOS tente acertar um numero de 0 a 10');

const userNumber = readline.questionFloat('Digite um numero entre 0 a 10 e boa sorte! ');

const numeroSorteado = Math.floor(Math.random() * (10 - 0 )) + 0;
if (userNumber === numeroSorteado) { 
  console.log('Parabens você ganhou!')
} else {
  console.log(`Não foi dessa vez o numero sorteado foi ${numeroSorteado} :(`)
}
