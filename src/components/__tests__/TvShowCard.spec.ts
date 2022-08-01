import { render } from '@testing-library/vue';
import TvShowCard from '../TvShowCard.vue';

const tvShow = {
  image: {
    medium: 'https://linktoanimage.example.com/image.jpg',
  },
};

describe('TvShowCard', () => {
  it('should render the image the tv show', () => {
    const card = render(TvShowCard, {
      props: { tvShow },
    });

    expect(card.container.querySelector('img')?.getAttribute('src')).toBe(
      tvShow.image.medium
    );
  });
});
