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