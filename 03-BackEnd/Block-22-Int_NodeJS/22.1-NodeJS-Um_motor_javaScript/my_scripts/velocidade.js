const readline = require('readline-sync');

function velocidade (){
  const distancia = readline.questionFloat('Qual é distancia em metros? ');
  const tempo = readline.questionFloat('Qual é o tempo em segundos? ');

  const ms = distancia/tempo;

  return console.log(`Sua velcidade foi de ${ms} metros por segundos.`)

}
velocidade();