import { render } from '@testing-library/vue';
import SearchResultCard from '../SearchResultCard.vue';

const tvShow = {
  image: {
    medium: 'https://linktoanimage.example.com/image.jpg',
  },
  name: 'Show Name',
  summary: '<p>Summary of the show</p>',
};

describe('SearchResultCard', () => {
  it('renders the image, name, and summary of the tv show', () => {
    const card = render(SearchResultCard, {
      props: { tvShow },
    });

    expect(card.container.querySelector('img')?.getAttribute('src')).toBe(
      tvShow.image.medium
    );

    card.getByText(tvShow.name);
    card.getByText('Summary of the show', { exact: false });
  });
});
