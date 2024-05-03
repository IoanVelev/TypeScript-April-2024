var FootballGroup;
(function (FootballGroup) {
    class FootballTeam {
        constructor(teamName, country, totalPlayers) {
            this.teamName = teamName;
            this.country = country;
            this.totalPlayers = totalPlayers;
            this.teamName = teamName;
            this.country = country;
            this.totalPlayers = totalPlayers;
        }
        getTeamDetails() {
            return `Football club ${this.teamName} is from ${this.country} and the squad consists of ${this.totalPlayers} players`;
        }
    }
    FootballGroup.FootballTeam = FootballTeam;
})(FootballGroup || (FootballGroup = {}));
const club1 = new FootballGroup.FootballTeam('Manchester United', 'England', 29);
console.log(club1.getTeamDetails());
