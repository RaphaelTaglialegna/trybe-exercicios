let a = 10;
let b = 2;


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

let chessPiace = 'BISPO';
let chessPiaceFinal = chessPiace.toLowerCase();

switch(chessPiaceFinal){
  case 'peão':
    console.log('frete');
    break;
    case 'torre':
    console.log('reto');
    break;
    case 'cavalo':
    console.log('diago');
    break;
    case 'bispo':
    console.log('diagonals');
    break;
    case 'bispo':
    console.log('diagonals');
    break;
    case 'bispo':
    console.log('diagonals');
    break;
}