import { ref, onMounted } from 'vue';
import { GenreOverview } from '../api-clients/abn-tvmaze-proxy/types';
import abnTvmazeProxy from '../api-clients/abn-tvmaze-proxy';
import { TvShow } from '../api-clients/tvmaze/types';

export function useGenreOverview() {
  const isFetching = ref(false);
  const error = ref(false);
  const genreOverview = ref<GenreOverview>([]);

  onMounted(async () => {
    isFetching.value = true;
    try {
      genreOverview.value = await abnTvmazeProxy.getGenreOverview();
      error.value = false;
    } catch {
      error.value = true;
    } finally {
      isFetching.value = false;
    }
  });

  return { isFetching, error, genreOverview };
}

export function useShowsByRating() {
  const isFetching = ref(false);
  const error = ref(false);
  const shows = ref<TvShow[]>([]);

  onMounted(async () => {
    isFetching.value = true;
    try {
      shows.value = await abnTvmazeProxy.getShowsByRating();
      error.value = false;
    } catch {
      error.value = true;
    } finally {
      isFetching.value = false;
    }
  });

  return { isFetching, error, shows };
}
