namespace FootballGroup {
    interface FootballTeamType {
        teamName: string;
        country: string;
        totalPlayers: number
    }

    export class FootballTeam implements FootballTeamType {
        teamName: string;
        country: string;
        totalPlayers: number;

        constructor(teamName: string, country: string, totalPlayers: number) {
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
