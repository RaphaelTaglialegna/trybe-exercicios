//Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .
let n = 5; 


for(let i = 1; i <= n; i += 1){
  let print ='';
  for(let p = 1; p <= n; p += 1){
    print += '*';      
  }
  console.log(print);  
}
//Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. 
let m = n;
console.log();  
for(let i2 = 1; i2 <= n; i2 += 1){
  let print2 ='';
  for(let p2 = m; p2 <= n; p2 += 1){
    print2 += '*';    
      
  }  
  m -= 1; 
  console.log(print2);  
}

// 3- Agora inverta o lado do triângulo.

let print2 ='';
console.log();  
for(let i2 = 1; i2 <= n; i2 += 1){
  print2 += '*'; 
  let space ='';
  
    for(let p2 = n - i2; p2 > 0; p2 -= 1){
      space +=' ';
      
  }  
  console.log(space + print2);
}

// //4- Depois, faça uma pirâmide com n asteriscos de base.
// console.log(); 

// let n1 = 5;
// let symbol ='*';
// let printLine ='';

// //The first '*' is in the center of the tryangle. 
// let midle = (n1 + 1) / 2;

// //We have to use a ' ' (empty space) in bouth sides to control, which is using the midle position to control += and -=;
// let empleft = midle;
// let empright = midle;

//  for(let i3 = 0; i3 < midle; i3 += 1){
//   for(let c3 = 0; c3 <= n1; c3 += 1){
//     if(c3 >= empleft && c3 <= empright){
//       printLine = printLine + symbol;
//     }else{
//     printLine = printLine + ' ';
//      }
  
//   }
//   console.log(printLine);
//   printLine = '';
//   empleft -= 1;
//   empright += 1; 
// }

//5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
console.log(); 

let n1 = 7;
let symbol ='*';
let printLine ='';

//The first '*' is in the center of the tryangle. 
let midle = (n1 + 1) / 2;

//We have to use a ' ' (empty space) in bouth sides to control, which is using the midle position to control += and -=;
let empleft = midle;
let empright = midle;

 for(let i3 = 1; i3 <= midle; i3 += 1){
  for(let c3 = 1; c3 <= n1; c3 += 1){
    if(c3 == empleft || c3 == empright || i3 == midle){ // compare one case to print the symbol. 
      printLine +=symbol;
    }else{
    printLine += ' ';
     }
  
  }
  console.log(printLine);
  printLine = '';
  empleft -= 1;
  empright += 1; 
}


// 6- Faça um programa que diz se um número definido numa variável é primo ou não.
//Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
//Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.

let numberP = 7;
let countP =[];
let primo = 0
for( let index = 2; index < numberP; index += 1){
  let difference = numberP % index; 
  countP.push(difference);
}

for (let check = 0; check < countP.length; check += 1 ){
  if (countP[check] === 0){
    primo += 1; 
  } 
}  

if( primo === 0){
  console.log('O numero '+ numberP + ' é primo');
}else {
  console.log('O numero '+ numberP +' não é primo');
}
  