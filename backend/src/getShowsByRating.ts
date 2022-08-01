import { readFile } from "fs/promises";
import { TvShow } from "./types";
import { dataLocation } from "./config";

let sortedShows: TvShow[] | null = null;

const responseLimit = 100;

function sortShows(allShows: TvShow[]) {
  return allShows.sort((show1, show2) =>
    show1.rating.average > show2.rating.average
      ? -1
      : show1.rating.average < show2.rating.average
      ? 1
      : 0
  );
}

export default async function getShowsByRating() {
  if (sortedShows) {
    return sortedShows.slice(0, responseLimit);
  } else {
    const allShows = JSON.parse(await readFile(dataLocation, "utf-8"));
    sortedShows = sortShows(allShows);
    return sortedShows?.slice(0, responseLimit);
  }
}
