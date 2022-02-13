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

numbers(2, 5, 2)
  .then(result => console.log(result))
  .catch(err => console.log(err.message));