import readline from 'readline-sync'

const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

function makeError(unity: string) {
    throw new Error(`A unidade ${unity} não é uma unidade válida.`)
}

function convert(value: number, forUnity: string, toUnity: string): number {

    if (!units.includes(forUnity)) makeError(forUnity); // se a unidade base não for válida lançamos um erro
    if (!units.includes(toUnity)) makeError(toUnity); // se a unidade para a conversão não for válida lançamos um erro

    const forIndex = units.indexOf(forUnity); // pegamos o index da unidade base no array
    const toIndex = units.indexOf(toUnity); // pegamos o index da unidade para a conversão
    const exponent = (toIndex - forIndex); // calculamos o expoente a partir da diferença dos index

    return value * Math.pow(10, exponent);
}

console.log(convert(100, 'km', 'm'))
console.log(convert(100, '3', 'm'))
console.log(convert(100, 'km', '2'))