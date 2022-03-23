const mass = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];

function makeErrorMass(unity: string) {
    throw new Error(`A unidade ${unity} não é uma unidade válida.`)
}

function convertMass(value: number, forUnity: string, toUnity: string): number {

    if (!mass.includes(forUnity)) makeErrorMass(forUnity); // se a unidade base não for válida lançamos um erro
    if (!mass.includes(toUnity)) makeErrorMass(toUnity); // se a unidade para a conversão não for válida lançamos um erro

    const forIndex = mass.indexOf(forUnity); // pegamos o index da unidade base no array
    const toIndex = mass.indexOf(toUnity); // pegamos o index da unidade para a conversão
    const exponent = (toIndex - forIndex); // calculamos o expoente a partir da diferença dos index

    return value * Math.pow(10, exponent);
}

console.log(convertMass(1, 'kg', 'g'))
console.log(convertMass(1000, 'g', 'Kg'))
console.log(convertMass(100, '3', 'm'))
console.log(convertMass(100, 'km', '2'))