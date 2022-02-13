const readline = require('readline-sync');


const imcresult = (peso, altura) => { 
  return peso/Math.pow(altura, 2)
};

const peso = readline.questionFloat('Qual é o seu peso? ');
const altura = readline.questionFloat('Qual é a sua altura? ');

const imc = parseFloat(imcresult(peso, altura).toFixed(1))


switch (true) { 

  case imc < 18.5: 
  console.log(`Seu IMC é ${imc}, e você está Abaixo do peso (magreza)`);
  break;

  case imc >= 18.5 && imc <= 24.9:
    console.log(`Seu IMC é ${imc}, e você está com Peso normal `);
    break;

  case imc >= 25.0 && imc <= 29.9:
    console.log(`Seu IMC é ${imc}, e você está Acima do peso (sobrepeso) `);
    break;

  case imc >= 30.0 && imc < 34.9:
    console.log(`Seu IMC é ${imc}, e você está Obesidade grau I `);
    break;

  case imc >= 35.0 && imc < 39.9:
    console.log(`Seu IMC é ${imc}, e você está Obesidade grau II `);
    break;

  case imc >= 40.0:
    console.log(`Seu IMC é ${imc}, e você está Obesidade grau III `);
    break;
    
  default:
    console.log('Valores digitados incorretos!');

}
