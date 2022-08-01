import { render } from '@testing-library/vue';
import Logo from '../Logo.vue';

describe('Logo', () => {
  it('renders correctly', () => {
    const component = render(Logo);

    component.getByText('ABN AMRO', { exact: false });
    component.getByText('TVmaze', { exact: false });
  });
});
