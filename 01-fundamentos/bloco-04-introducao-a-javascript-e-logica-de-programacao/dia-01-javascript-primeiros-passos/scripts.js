const a = 10;
const b = 2;


//programa 1
let c = a + b;
console.log(c);

//programa 2
let d = a - b;
console.log(d);

//programa 3
let e = a * b;
console.log(e);

//programa 4
let f = a / b;
console.log(f);

//programa 5
let g = a % b;
console.log(g);

//programa 6 

if(a > b){
  console.info(a,'é o maior'); 
}
  else{
    console.log(b, 'é o maior');
  }

//programa 7
let x = 15;
if(a > b && a > x){
  console.info(a,'é o maior'); 
}
  else if(b > a && b > x){
    console.log(b, 'é o maior');
  }
    else{
      console.log(x, 'é o maior');
    }

//programa 8 

let y = 0;
if( y > 0){
  console.info('positive'); 
}
  else if(y < 0){
    console.log('negative');
  }
    else{
      console.log('zero');
    }

//programa 9  
let a1 = 45;
let b1 = 45;
let c1 = 90;

let tri = a1 + b1 + c1; 
let angPositive = a1 > 0 && b1 > 0 && c1 > 0;

if(angPositive){
if( tri === 180){
  console.info(true); 
}
  else{
    console.log(false);
  };
}
    else{
      console.log('Erro: angulo inválido');
    }

    //programa 10 

let chessPiace = 'tOrre';
let chessPiaceFinal = chessPiace.toLowerCase();

switch(chessPiaceFinal){
  case 'peão':
    console.log('frete');
    break;
    case 'torre':
    console.log('reto');
    break;
    case 'cavalo':
    console.log('em L');
    break;
    case 'bispo':
    console.log('diagonals');
    break;
    case 'rei':
    console.log('uma casa qualquer lado');
    break;
    case 'rainha':
    console.log('livre');
    break;
}

// Programa 11 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
let nota = 0; 
if(nota >= 90 && nota <= 100){
  console.log('A nota do aluno é A!');
} 
  else if(nota >= 80 && nota < 90){
    console.log('A nota do aluno é B!');
  }
      else if(nota >= 70 && nota < 80){
        console.log('A nota do aluno é C!');
     }  
        else if(nota >= 60 && nota < 70){
          console.log('A nota do aluno é D!');
        }
          else if(nota >= 50 && nota < 60){
            console.log('A nota do aluno é E!');
          } 
            else if(nota < 50 && nota >= 0){
              console.log('A nota do aluno é F!');
            }
              else{
                console.log('ERRO no valor da nota.');
              }   
        
//Programa 12

const numb1 = 3;
const numb2 = 9;
const numb3 = 1;

let check = false;
if ((numb1 % 2 === 0|| numb2 % 2 === 0|| numb3 % 2 === 0 )){
  check = true; 
}
console.log(check);
//Programa 13

console.log();

let check2 = false;
if ((numb1 % 2 === 1|| numb2 % 2 === 1|| numb3 % 2 === 1 )){
  check2 = true; 
}
console.log(check2);

// Program 14 - Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

const cost = 100;
const finaSell = 180;

if(cost >= 0 && finaSell >= 0){
const  costBrut = cost * 1.2;
const finalProfit = (finaSell - costBrut)* 1000;

console.log(finalProfit);

}else{
  console.log('Erro nos valores');
}
 

//Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

const salary = 6000.00;
let salaryINSS = 0; 
let salaryIR = 0;
if(salary >= 0 ){
  if (salary <= 1556.94) {
    salaryINSS = salary * 0.08;    
  } 
    else if (salary >= 1556.95 && salary <= 2594.92) {
    salaryINSS = salary * 0.09;    
  } 
      else if (salary >= 2594.93 && salary <= 5189.82) {
      salaryINSS = salary * 0.11; 
    } 
        else if (salary > 5189.83) {
        salaryINSS = 570,88; 
        }
}
      let salarryLessInss = salary - salaryINSS;

  if (salary <= 1903.98){
      salaryIR = salarryLessInss;

  }else if (salarryLessInss >= 1903.99 && salarryLessInss <= 2826.65) {
      salaryIR = (salarryLessInss * 0.075) - 142.80;
    } 
      else if (salarryLessInss >= 2826.66 && salarryLessInss <= 3751.05) {
        salaryIR = (salarryLessInss * 0.15) - 354.80;
      }
        else if (salarryLessInss >= 3751.06 && salarryLessInss <= 4664.68) {
          salaryIR = (salarryLessInss * 0.225) - 636,13;
    }  
        else if (salarryLessInss > 4664.69) {
          salaryIR = (salarryLessInss * 0.225) - 636,13;
        } 
    
        let finalSalary = salarryLessInss - salaryIR

        console.log(finalSalary);

