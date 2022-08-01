import { ref, onMounted, InjectionKey } from 'vue';
import type { Ref } from 'vue';
import { TvShow } from '../api-clients/tvmaze/types';
import { getFromLocalStorage, save } from '../storage/favorites';

export interface FavoritesContext {
  favorites: Ref<TvShow[]>;
  isFavorite: (show: TvShow) => boolean;
  setFavorites: (shows: TvShow[]) => void;
  toggleShow: (show: TvShow) => void;
}

// declare the provide/inject key at a single location so we don't have to
// use literal strings everywhere
export const injectionKey = Symbol() as InjectionKey<FavoritesContext>;

export function useFavorites() {
  const favorites = ref<TvShow[]>([]);

  const isFavorite = (show: TvShow) =>
    !!favorites.value.find(({ id }) => show.id === id);

  const setFavorites = (shows: TvShow[]) => {
    save(shows);
    favorites.value = shows;
  };

  const toggleShow = (show: TvShow) => {
    let newShows: TvShow[] = [];
    if (favorites.value.find(({ id }) => id === show.id)) {
      // Remove it
      newShows = favorites.value.filter(({ id }) => id !== show.id);
    } else {
      // Add it
      newShows = [...favorites.value, show];
    }
    setFavorites(newShows);
  };

  onMounted(() => {
    favorites.value = getFromLocalStorage();
  });

  return { favorites, isFavorite, setFavorites, toggleShow };
}
