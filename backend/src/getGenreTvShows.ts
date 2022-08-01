import { readFile } from "fs/promises";
import { TvShow } from "./types";
import { dataLocation } from "./config";

interface GenreMap {
  [genre: string]: TvShow[];
}

interface GenreTvShows {
  genre: string;
  tvShows: TvShow[];
}

let genreTvShows: GenreTvShows[] | null = null;

function mapShowsToGenre(shows: TvShow[]) {
  return shows.reduce((genreMap, show) => {
    show.genres.forEach((genre) => {
      if (genreMap[genre]) {
        genreMap[genre].push(show);
      } else {
        genreMap[genre] = [show];
      }
    });
    return genreMap;
  }, {} as GenreMap);
}

export default async function getGenreTvShows() {
  if (genreTvShows) {
    return genreTvShows;
  } else {
    const allShows = JSON.parse(await readFile(dataLocation, "utf-8"));
    const genreMap = mapShowsToGenre(allShows);
    genreTvShows = Object.keys(genreMap).map((genre) => ({
      genre,
      tvShows: genreMap[genre],
    }));
    return genreTvShows;
  }
}
