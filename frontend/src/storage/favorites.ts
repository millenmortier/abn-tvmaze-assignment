import { TvShow } from '../api-clients/tvmaze/types';

const LOCALSTORAGE_KEY = 'favoriteShows';

export function getFromLocalStorage(): TvShow[] {
  const lsItem = window.localStorage.getItem(LOCALSTORAGE_KEY);
  return lsItem ? JSON.parse(lsItem) : [];
}

export function save(shows: TvShow[]) {
  window.localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(shows));
}
