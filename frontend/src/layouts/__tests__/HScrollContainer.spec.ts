import { render } from '@testing-library/vue';
import HScrollContainer from '../HScrollContainer.vue';

describe('HScrollContainer', () => {
  it('should render its slot contents', () => {
    const container = render(HScrollContainer, {
      slots: { default: 'Content' },
    });

    container.getByText('Content');
  });
});
