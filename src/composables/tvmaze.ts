import { ref, onMounted } from 'vue';
import tvMazeClient from '../api-clients/tvmaze';
import {
  SearchResult,
  TvShow,
  Season,
  Episode,
} from '../api-clients/tvmaze/types';
import debounce from 'debounce';

export function useShowInfo(showId: number) {
  const isFetching = ref(false);
  const error = ref(false);
  const tvShow = ref<TvShow | null>(null);

  onMounted(async () => {
    isFetching.value = true;
    try {
      tvShow.value = await tvMazeClient.getShowInfo(showId);
      error.value = false;
    } catch {
      error.value = true;
    } finally {
      isFetching.value = false;
    }
  });

  return { isFetching, error, tvShow };
}

export function useSeasons(showId: number) {
  const isFetching = ref(false);
  const error = ref(false);
  const seasons = ref(<Season[]>[]);

  onMounted(async () => {
    isFetching.value = true;
    try {
      seasons.value = await tvMazeClient.getShowSeasons(showId);
      error.value = false;
    } catch {
      error.value = true;
    } finally {
      isFetching.value = false;
    }
  });

  return { isFetching, error, seasons };
}

export function useEpisodes(showId: number) {
  const isFetching = ref(false);
  const error = ref(false);
  const episodes = ref(<Episode[]>[]);

  onMounted(async () => {
    isFetching.value = true;
    try {
      episodes.value = await tvMazeClient.getShowEpisodes(showId);
      error.value = false;
    } catch {
      error.value = true;
    } finally {
      isFetching.value = false;
    }
  });

  return { isFetching, error, episodes };
}

export function useSearch() {
  const isFetching = ref(false);
  const error = ref(false);
  const searchResults = ref<SearchResult[]>([]);

  const debouncedSearch = debounce(async (query: string) => {
    if (!query) {
      searchResults.value = [];
      isFetching.value = false;
      return;
    }

    try {
      searchResults.value = await tvMazeClient.search(query);
      error.value = false;
    } catch {
      error.value = true;
    } finally {
      isFetching.value = false;
    }
  }, 500);

  const search = (query: string) => {
    isFetching.value = true;
    debouncedSearch(query);
  };

  return { isFetching, error, searchResults, search };
}
