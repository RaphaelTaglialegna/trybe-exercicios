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
  return Math.floor(Math.random() * 10 + 1);
}

 async function callNumbers(){
//racicinio de criar um array de dos valores visto no gabarito.
  const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);
  
  try{ 
    const result = await numbers(...randomNumbers)
    console.log(result)
  }
  catch(error) {
    console.log(error);
  }


}
callNumbers();  



