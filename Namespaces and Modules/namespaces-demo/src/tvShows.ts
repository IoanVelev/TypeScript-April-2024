export namespace TvShowsGroup {
    export class TvShows {

        constructor(public name: string, public cast: string[]){
            this.name = name;
            this.cast = cast;
        }

        getTvShowDetails(): string {
            return `TVShow name: ${this.name}, Cast: ${this.cast.join(", ")}`;
        }
    }
}