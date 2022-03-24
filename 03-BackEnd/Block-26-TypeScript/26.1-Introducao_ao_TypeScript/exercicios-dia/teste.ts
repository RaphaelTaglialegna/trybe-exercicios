import readline from 'readline-sync'

const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
function exec() { 
    const value = readline.questionFloat('Digite o valor a ser convertido: \n');
    
    console.log(value)
}

exec();