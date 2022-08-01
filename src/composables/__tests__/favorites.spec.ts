import { useFavorites } from '../favorites';

const show1 = {
  id: 1,
  url: '',
  name: 'Show 1',
  language: '',
  genres: [],
  type: '',
  status: '',
  runtime: 100,
  averageRuntime: 100,
  premiered: '',
  ended: '',
  officialSite: '',
  weight: 10,
  schedule: null,
  rating: { average: 10 },
  network: null,
  webChannel: null,
  dvdCountry: null,
  image: { medium: '', original: '' },
  externals: null,
  summary: '',
  updated: 10000,
  _links: null,
};
const show2 = { ...show1, id: 2, name: 'Show 2' };

describe('useFavorites', () => {
  afterEach(() => {
    const { setFavorites } = useFavorites();
    setFavorites([]);
  });

  test('setFavorites should update the favorites', () => {
    const { favorites, isFavorite, setFavorites } = useFavorites();

    setFavorites([show1, show2]);

    expect(favorites.value.length).toBe(2);
  });

  test('isFavorite should return whether a show is already in the list of favorites', () => {
    const { isFavorite, setFavorites } = useFavorites();

    expect(isFavorite(show1)).toBe(false);

    setFavorites([show1]);

    expect(isFavorite(show1)).toBe(true);
  });

  describe('toggleShow', () => {
    it("should remove a show if it's already in the list of favorites", () => {
      const { isFavorite, toggleShow, setFavorites } = useFavorites();

      setFavorites([show1]);
      toggleShow(show1);

      expect(isFavorite(show1)).toBe(false);
    });

    it("should add a show if it's not in the list of favorites", () => {
      const { isFavorite, toggleShow, setFavorites } = useFavorites();

      setFavorites([]);
      toggleShow(show1);

      expect(isFavorite(show1)).toBe(true);
    });
  });
});
