import { render } from '@testing-library/vue';
import Container from '../Container.vue';

describe('Container', () => {
  it('should render its slot contents', () => {
    const container = render(Container, {
      slots: { default: 'Content' },
    });

    container.getByText('Content');
  });
});
