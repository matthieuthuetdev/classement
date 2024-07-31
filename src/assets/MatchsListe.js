class MatchsListe {
    constructor(json) {
        this.matchs = json
        this.teamNumber = 0
        this.getTeamNumber()
        this.numberMatchs = this.matchs.length
    }
    getTeamNumber() {
        const teams = []
        let count = 0
        this.matchs.forEach(element => {
            if (!teams.includes(element.team1)) {
                teams.push(element.team1)
                
            }

        });
        this.matchs.forEach(element => {
            if (!teams.includes(element.team2)) {
                teams.push(element.team2)
                count++

            }
            
        });
        this.teamNumber = teams.length
            console.log(teams)

    }
}
export { MatchsListe }