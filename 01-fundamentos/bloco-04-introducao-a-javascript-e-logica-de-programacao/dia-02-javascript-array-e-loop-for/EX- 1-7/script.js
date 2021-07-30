let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

for(let number of numbers){

  console.log(number);
}
console.log();
let soma = 0;
//Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
for(index = 0; index < numbers.length; index += 1){
  soma = numbers[index]+ soma;    
}
console.log('A soma total do arry é',soma,'.');
console.log();

//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let media = soma / numbers.length;
console.log('A media do arry é',media,'.');

//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
console.log();
if(media > 20){
  console.log('A média valor maior que 20'); 
}
  else{
    console.log('A média valor menor que 20');  
}
console.log();
//Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let maior = 0;
for(let indexBigest = 0; indexBigest < numbers.length; indexBigest += 1){
  if(numbers[indexBigest] > maior){
    maior = numbers[indexBigest];
  }
}
console.log(maior, 'é o maior numero do Array!');

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
console.log();

let impar = 0;
for(let indexImpar = 0; indexImpar < numbers.length; indexImpar += 1){
  if(numbers[indexImpar] % 2 === 1){
    impar = numbers[indexImpar];
      console.log(impar);
    }
}
if (impar === 0 ){
  console.log('nenhum valor ímpar encontrado');
}

//Utilizando for , descubra qual o menor valor contido no array e imprima-o;
console.log();
let menor = numbers[0];
for(let indexBigest = 0; indexBigest < numbers.length; indexBigest += 1){
  if(numbers[indexBigest] < menor){
    menor = numbers[indexBigest];
  }
}
console.log(menor, 'é o menor numero do Array!');

//Part - Bonus - Ordene o array numbers em ordem crescente e imprima seus valores;


// for (let index = 1; index < numbers.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (numbers[index] < numbers[secondIndex]) {
//       let position = numbers[index];
//       numbers[index] = numbers[secondIndex];
//       numbers[secondIndex] = position;
//     }
//   }
// }
// console.log(numbers)

//Part - Bonus - Ordene o array numbers em ordem decrescente e imprima seus valores;


// for (let index = 1; index < numbers.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (numbers[index] > numbers[secondIndex]) {
//       let position = numbers[index];
//       numbers[index] = numbers[secondIndex];
//       numbers[secondIndex] = position;
//     }
//   }
// }
// console.log(numbers);

// Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:

let numeberMult = [];
for (let index = 1; index <= numbers.length; index += 1) {
    
      if (index < numbers.length) {
        numeberMult.push(numbers[index] * numbers[index - 1] )
      }else {
        numeberMult.push(numbers[index - 1] * 2 );
      }
}
  console.log(numeberMult);
  console.log();