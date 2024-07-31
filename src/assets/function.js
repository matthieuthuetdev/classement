import { Matchs } from "./Matchs.js";
import { MatchsListe } from "./MatchsListe.js";
function createTable(json) {
    const table = document.getElementById("matchs")
    json.forEach(element => {
        createline(element, table)
        console.log(element.score[0])
    });
}
function createcell(content, line) {
    const cases = line.insertCell()
    cases.textContent = content

}
function createline(element, table) {
    const match = new Matchs(element.team1, element.team2, element.score[0], element.score[1])
    const line = table.insertRow()
    createcell(match.team1, line)
    createcell(match.team2, line)
    createcell(match.score1, line)
        createcell(match.winner1, line)
    createcell(match.score2, line)
    createcell(match.winner2, line)
}
async function loadJson() {
    const response = await fetch("./tournoi/football.json")
    const json = response.json()
    return json
}
function displayInfo(liste) {
    const pNumberTeam = document.getElementById("pNumberTeam")
    pNumberTeam.textContent = liste.teamNumber + " équipes"
    const pNumberMatch = document.getElementById("pNumberMatch")
    pNumberMatch.textContent = liste.numberMatchs + " matche"
}
export { createTable, createline, loadJson, displayInfo }