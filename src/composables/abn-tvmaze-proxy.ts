import { GenreOverview } from '../api-clients/abn-tvmaze-proxy/types';
import abnTvmazeProxy from '../api-clients/abn-tvmaze-proxy';
import { TvShow } from '../api-clients/tvmaze/types';
import { useApiCall } from './useApiCall';

export function useGenreOverview() {
  const { isFetching, error, value } = useApiCall<GenreOverview>(() =>
    abnTvmazeProxy.getGenreOverview()
  );

  return { isFetching, error, genreOverview: value };
}

export function useShowsByRating() {
  const { isFetching, error, value } = useApiCall<TvShow[]>(() =>
    abnTvmazeProxy.getShowsByRating()
  );

  return { isFetching, error, shows: value };
}
