import { useSearch } from '../tvmaze';
import tvMazeClient from '../../api-clients/tvmaze';

jest.mock('../../api-clients/tvmaze');

jest.useFakeTimers();

describe('tvmaze composables', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('useSearch', () => {
    it('should return the variables in their initial states', () => {
      const { isFetching, error, searchResults } = useSearch();

      expect(isFetching.value).toBe(false);
      expect(error.value).toBe(false);
      expect(searchResults.value.length).toBe(0);
    });

    it('should only call the tvmaze search api once if search is called numerous times in quick succession', () => {
      (tvMazeClient.search as jest.Mock).mockResolvedValue([]);
      const { search } = useSearch();

      search('a');
      search('ab');
      search('abc');

      jest.advanceTimersByTime(1000);

      expect(tvMazeClient.search).toBeCalledTimes(1);
    });

    it('should not make an API call if the query is empty', () => {
      (tvMazeClient.search as jest.Mock).mockResolvedValue([]);
      const { search } = useSearch();
      search('');
      jest.advanceTimersByTime(1000);
      expect(tvMazeClient.search).toBeCalledTimes(0);
    });
  });
});
