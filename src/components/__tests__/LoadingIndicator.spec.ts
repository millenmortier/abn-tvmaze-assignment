import { render } from '@testing-library/vue';
import LoadingIndicator from '../LoadingIndicator.vue';

describe('LoadingIndicator', () => {
  it('renders correctly', () => {
    const component = render(LoadingIndicator);

    component.getByText('⏳ Loading...');
  });
});
