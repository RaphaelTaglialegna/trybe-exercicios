const liquid = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];

function makeErrorLiquid(unity: string) {
    throw new Error(`A unidade ${unity} não é uma unidade válida.`)
}

function convertLiquid(value: number, forUnity: string, toUnity: string): number {

    if (!liquid.includes(forUnity)) makeErrorLiquid(forUnity); // se a unidade base não for válida lançamos um erro
    if (!liquid.includes(toUnity)) makeErrorLiquid(toUnity); // se a unidade para a conversão não for válida lançamos um erro

    const forIndex = liquid.indexOf(forUnity); // pegamos o index da unidade base no array
    const toIndex = liquid.indexOf(toUnity); // pegamos o index da unidade para a conversão
    const exponent = (toIndex - forIndex); // calculamos o expoente a partir da diferença dos index

    return value * Math.pow(10, exponent);
}

console.log(convertLiquid(1, 'l', 'ml'))
console.log(convertLiquid(1000, 'ml', 'l'))
console.log(convertLiquid(100, '3', 'l'))
console.log(convertLiquid(100, 'ml', '2'))