const fatorial = (n) => {
  if (n <= 0) {
    return 'Numero nao Fatorial'; 
  } 
  let result = n;
  let number = n;
  for (let index = 1; index < n; index += 1) {
  result *= --number;
  }
  return result;
} 
console.log(fatorial(4));


const longestWord = (text) => {
  let wordArray = text.split(' ');
  let maxLength = 0;
  let result = '';
  
  for (const word of wordArray) {
    if (word.length > maxLength) {
    maxLength = wordArray.length;
    result = word;
    }
  }
  return result;
}
console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));


// Excercise 4  

const array = ["HTML", "CSS", "JavaScript", "Git", "Soft Skills"];
array.sort();
function buildSkillsPhrase (name) {
    const fun1 = name => (
      `Tryber ${name} aqui!

      Tudo bem?`
    );

    let result = `${fun1(name)}

    Minhas cinco principais habilidades são:`;
      
    array.forEach((skill) =>
    result = `${result}

    - ${skill}`);

    result = `
  ${result}

    #goTrybe
    `;

    return result;
}

console.log(buildSkillsPhrase("Raphael"));
