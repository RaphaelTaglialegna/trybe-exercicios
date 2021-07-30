//Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let numbers25 =[];

for(let index = 1; numbers25.length < 25; index += 1){
  numbers25.push(index);
}
console.log(numbers25);

//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
console.log();
let div = 0;
for(let indexDiv = 1; indexDiv < numbers25.length; indexDiv += 1){
    div = numbers25[indexDiv] / 2;
    console.log(div);
    console.log();
  }
  

  
