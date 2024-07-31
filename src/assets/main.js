import { Matchs } from "./Matchs.js";
import { MatchsListe } from "./MatchsListe.js";
import { createTable, createline, loadJson, displayInfo } from "./function.js";
const appFootball = document.getElementById('appFootball');
const json = await loadJson()
const liste = new MatchsListe(json)
displayInfo(liste)
console.log(liste.matchs)
createTable(liste.matchs)

console.log(appFootball)