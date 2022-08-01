import { ref, onMounted } from 'vue';
import { useApiCall } from './useApiCall';
import tvMazeClient from '../api-clients/tvmaze';
import {
  SearchResult,
  TvShow,
  Season,
  Episode,
} from '../api-clients/tvmaze/types';
import debounce from 'debounce';

export function useShowInfo(showId: number) {
  const { isFetching, error, value } = useApiCall<TvShow>(() =>
    tvMazeClient.getShowInfo(showId)
  );

  return { isFetching, error, tvShow: value };
}

export function useSeasons(showId: number) {
  const { isFetching, error, value } = useApiCall<Season[]>(() =>
    tvMazeClient.getShowSeasons(showId)
  );

  return { isFetching, error, seasons: value };
}

export function useEpisodes(showId: number) {
  const { isFetching, error, value } = useApiCall<Episode[]>(() =>
    tvMazeClient.getShowEpisodes(showId)
  );

  return { isFetching, error, episodes: value };
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
