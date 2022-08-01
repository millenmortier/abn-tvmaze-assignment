import { render, fireEvent } from '@testing-library/vue';
import FavoriteButton from '../FavoriteButton.vue';
import { injectionKey } from '../../composables/favorites';

const tvShow = {
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

const toggleShow = jest.fn();

let isFavorite = true;
const renderConfig = {
  global: {
    provide: {
      [injectionKey as symbol]: {
        isFavorite: () => isFavorite,
        toggleShow,
      },
    },
  },
  props: { tvShow },
};

describe('FavoriteButton', () => {
  beforeEach(() => {
    isFavorite = false;
  });

  it('should display "add to favorites" if it is not a favorite', () => {
    const button = render(FavoriteButton, renderConfig);

    button.getByText('Add to favorites');
  });

  it('should display "remove from favorites" if it is already a favorite', () => {
    isFavorite = true;
    const button = render(FavoriteButton, renderConfig);

    button.getByText('Remove from favorites');
  });

  it('should call toggleShow when clicked', async () => {
    const button = render(FavoriteButton, renderConfig);

    const buttonElement = button.getByText('Add to favorites');
    await fireEvent.click(buttonElement);
    expect(toggleShow).toBeCalled();
  });
});
