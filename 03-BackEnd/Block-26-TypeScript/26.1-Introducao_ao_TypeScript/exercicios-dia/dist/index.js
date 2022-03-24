"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = require("process");
const readline_sync_1 = __importDefault(require("readline-sync"));
const months_1 = require("./months");
const seasons_1 = require("./seasons");
const monthsNames = Object.values(months_1.Months).map(item => item);
const choiceMonth = readline_sync_1.default.keyInSelect(monthsNames, 'Escolha um mês do ano', { cancel: 'SAIR' });
if (choiceMonth === -1) {
    console.log("Saindo!");
    (0, process_1.exit)();
}
const seasonsSouth = {
    [seasons_1.Seasons.OUTONO]: [months_1.Months.MARCO, months_1.Months.ABRIL, months_1.Months.MAIO, months_1.Months.JUNHO],
    [seasons_1.Seasons.INVERNO]: [months_1.Months.JUNHO, months_1.Months.JULHO, months_1.Months.AGOSTO, months_1.Months.SETEMBRO],
    [seasons_1.Seasons.PRIMAVERA]: [months_1.Months.SETEMBRO, months_1.Months.OUTUBRO, months_1.Months.NOVEMBRO, months_1.Months.DEZEMBRO],
    [seasons_1.Seasons.VERAO]: [months_1.Months.DEZEMBRO, months_1.Months.JANEIRO, months_1.Months.FEVEREIRO, months_1.Months.MARCO],
};
const seasonsNorth = {
    [seasons_1.Seasons.PRIMAVERA]: seasonsSouth[seasons_1.Seasons.OUTONO],
    [seasons_1.Seasons.VERAO]: seasonsSouth[seasons_1.Seasons.INVERNO],
    [seasons_1.Seasons.OUTONO]: seasonsSouth[seasons_1.Seasons.PRIMAVERA],
    [seasons_1.Seasons.INVERNO]: seasonsSouth[seasons_1.Seasons.VERAO],
};
const hemispheres = {
    "Norte": seasonsNorth,
    "Sul": seasonsSouth
};
const choiceHemisphere = readline_sync_1.default.keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério", { cancel: "SAIR" });
if (choiceHemisphere === -1) {
    console.log("Saindo!");
    (0, process_1.exit)();
}
const month = Object.values(months_1.Months)[choiceMonth];
const hemisphere = Object.keys(hemispheres)[choiceHemisphere];
console.log(`Mês: ${month}`);
console.log(`Hemisfério: ${hemisphere}`);
const chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemisphere];
Object.entries(chosenHemisphereSeasons).map((entry) => {
    const seasons = entry[0];
    const months = entry[1];
    if (months.includes(month))
        console.log(seasons);
});
console.log(`Estações: ${chosenHemisphereSeasons}`);
