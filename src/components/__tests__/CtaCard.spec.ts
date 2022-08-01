import { render } from '@testing-library/vue';
import CtaCard from '../CtaCard.vue';

describe('CtaCard', () => {
  it(`should render its slots`, () => {
    const contents = '<span>Hello world!</span>';

    const button = render(CtaCard, {
      slots: { default: contents },
    });

    button.getByText('Hello world!');
  });
});
