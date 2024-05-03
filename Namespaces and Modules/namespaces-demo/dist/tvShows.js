"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TvShowsGroup = void 0;
var TvShowsGroup;
(function (TvShowsGroup) {
    class TvShows {
        constructor(name, cast) {
            this.name = name;
            this.cast = cast;
            this.name = name;
            this.cast = cast;
        }
        getTvShowDetails() {
            return `TVShow name: ${this.name}, Cast: ${this.cast.join(", ")}`;
        }
    }
    TvShowsGroup.TvShows = TvShows;
})(TvShowsGroup || (exports.TvShowsGroup = TvShowsGroup = {}));
