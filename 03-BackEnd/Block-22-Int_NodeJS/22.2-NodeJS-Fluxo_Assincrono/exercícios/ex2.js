function numbers(a, b, c) {
 
  const promise = new Promise((res, rej) => {
    
    if(isNaN(a) || isNaN(b) || isNaN(c)) {
      rej(new Error("Os valores devem ser numeros"));
    }
    const result = (a + b) * c; 
    if(result < 50) {
     rej(new Error("Valor muito baixo"));
    }
    res(result);
  });
  return(promise);
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

function callNumbers(){
//racicinio de criar um array de dos valores visto no gabarito.
  const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);
  
  numbers(...randomNumbers)
    .then(result => console.log(result))
    .catch(err => console.log(err.message));


}
callNumbers();  

// const a = Math.floor(Math.random() * 100 + 1);
// const b = Math.floor(Math.random() * 100 + 1);
// const c = Math.floor(Math.random() * 100 + 1);

