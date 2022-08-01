import { getByText, render } from '@testing-library/vue';
import TvShowRatingTile from '../TvShowRatingTile.vue';

const tvShow = {
  name: 'A TV Show',
  rating: { average: 7.0 },
  genres: ['Comedy', 'Action'],
};

describe('TvShowRatingTile', () => {
  it('should render the rank, name, rating, and genres of the tv show', () => {
    const card = render(TvShowRatingTile, {
      props: { tvShow, rank: 1 },
    });

    card.getByText('1');
    card.getByText(tvShow.name);
    card.getByText(`${tvShow.rating.average}`);
    card.getByText('Comedy, Action');
  });
});
