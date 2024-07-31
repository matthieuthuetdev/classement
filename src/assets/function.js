import { Matchs } from "./Matchs.js";
function createTable(json) {
    const table = document.getElementById("matchs")
    json.forEach(element => {
        createline(element,table)
        console.log(element.score[0])
    });
}
function createline(element, table) {
    const match = new Matchs(element.team1, element.team2, element.score[0], element.score[1])
    const line = table.insertRow()
    const team1 = line.insertCell()
    team1.textContent = match.team1
    const team2 = line.insertCell()
    team2.textContent = match.team2
    const score1 = line.insertCell()
    score1.textContent = match.score1
    const score2 = line.insertCell()
    score2.textContent = match.score2
}
async function loadJson() {
    const response = await fetch("./tournoi/football.json")
    const json = response.json()
    return json
}
export { createTable, createline, loadJson  }