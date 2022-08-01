import { render } from '@testing-library/vue';
import SeasonTile from '../SeasonTile.vue';

const season = {
  number: 1,
  premiereDate: '2021-01-01',
  endDate: '2021-02-01',
  episodeOrder: 20,
};

describe('SeasonTile', () => {
  it('renders the season number, premiere and end dates, and episode counts', () => {
    const card = render(SeasonTile, {
      props: { season },
    });

    card.getByText(`Season ${season.number}`);
    card.getByText(season.premiereDate, { exact: false });
    card.getByText(season.endDate, { exact: false });
    card.getByText(`${season.episodeOrder} episodes`, { exact: false });
  });
});
