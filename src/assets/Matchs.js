class Matchs {
    constructor(team1, team2, score1, score2) {
        this.team1 = team1
        this.team2 = team2
        this.score1 = score1
        this.score2 = score2
        this.winner1 = undefined
        this.winner2 = undefined
        this.getwinner()

    }
    getwinner() {
        const score1 = this.score1.split("-")
        if (score1[0] > score1[1]) {
            this.winner1 = this.team1
        } else {
            this.winner1 = this.team2
        }
        const score2 = this.score2.split("-")
        if (score2[0] > score2[1]) {
            this.winner2 = this.team1
        } else {
            this.winner2 = this.team2
        }

    }
}
export { Matchs }