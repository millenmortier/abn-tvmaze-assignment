import { render } from '@testing-library/vue';
import { Episode } from '../../api-clients/tvmaze/types';
import EpisodeTile from '../EpisodeTile.vue';

const episode: Omit<
  Episode,
  'airtime' | 'runtime' | 'rating' | 'image' | '_links'
> = {
  id: 100,
  url: '',
  name: 'Some Episode Name',
  season: 1,
  number: 10,
  type: '',
  airdate: '2020-01-01',
  airstamp: '',
  summary: '<p>The summary <span>is in HTML</span><p>',
};

describe('EpisodeTile', () => {
  it(`should render the name, season number, episode number, and airdate of an episode`, () => {
    const tile = render(EpisodeTile, {
      props: { episode },
    });

    tile.getByText(episode.name);
    tile.getByText(`Season ${episode.season}`, { exact: false });
    tile.getByText(`Episode ${episode.number}`, { exact: false });
    tile.getByText(`${episode.airdate}`, { exact: false });
  });

  it(`should render the HTML of the summary`, () => {
    const tile = render(EpisodeTile, {
      props: { episode },
    });

    tile.getByText('is in HTML');
    tile.getByText('The summary');
  });
});
