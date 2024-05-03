namespace FootballGroup {
    export class FootballTeam {

        constructor(private teamName: string, private country: string, private totalPlayers: number) {
            this.teamName = teamName;
            this.country = country;
            this.totalPlayers = totalPlayers;
        }


        getTeamDetails(): string{
            return `Football club ${this.teamName} is from ${this.country} and the squad consists of ${this.totalPlayers} players`;
        }
    }
}


const club1 = new FootballGroup.FootballTeam('Manchester United', 'England', 29);
console.log(club1.getTeamDetails());
