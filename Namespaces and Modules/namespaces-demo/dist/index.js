"use strict";
// namespace FootballGroup {
//     interface FootballTeamType {
//         teamName: string;
//         country: string;
//         totalPlayers: number
//     }
Object.defineProperty(exports, "__esModule", { value: true });
//     export class FootballTeam implements FootballTeamType {
//         teamName: string;
//         country: string;
//         totalPlayers: number;
//         constructor(teamName: string, country: string, totalPlayers: number) {
//             this.teamName = teamName;
//             this.country = country;
//             this.totalPlayers = totalPlayers;
//         }
//         getTeamDetails(): string{
//             return `Football club ${this.teamName} is from ${this.country} and the squad consists of ${this.totalPlayers} players`;
//         }
//     }
// }
// const club1 = new FootballGroup.FootballTeam('Manchester United', 'England', 29);
// console.log(club1.getTeamDetails());
/// <reference path="tvShows.ts"/>
const tvShows_1 = require("./tvShows");
const tvShow1 = new tvShows_1.TvShowsGroup.TvShows('The Bing Bang Theory', ['Sheldon Cooper', 'Leonard Hipersfald', 'Howard Wolowitz', 'Penny']);
console.log(tvShow1.getTvShowDetails());
