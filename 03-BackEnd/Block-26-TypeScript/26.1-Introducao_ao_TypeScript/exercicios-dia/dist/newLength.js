"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
function exec() {
    const value = readline_sync_1.default.questionFloat('Digite o valor a ser convertido: \n');
    const forUnityChoice = readline_sync_1.default.keyInSelect(units, 'Escolha um numero para a unidade base:', { cancel: 'SAIR' });
    if (forUnityChoice === -1) {
        return console.log('Fui!');
    }
    const toUnityChoice = readline_sync_1.default.keyInSelect(units, 'Escolha um numero para a conversão:', { cancel: 'SAIR' });
    if (toUnityChoice === -1) {
        return console.log('Meu Marido tem dois empregos eu não preciso disso!');
    }
    const forIndex = forUnityChoice; // pegamos o index da unidade base no array
    const toIndex = toUnityChoice; // pegamos o index da unidade para a conversão
    const exponent = (toIndex - forIndex); // calculamos o expoente a partir da diferença dos index
    const result = value * Math.pow(10, exponent);
    const message = `${value}${units[forUnityChoice]} é igual a ${result}${units[toUnityChoice]}`;
    console.log(message);
}
exec();
