import { render } from '@testing-library/vue';
import AppFooter from '../AppFooter.vue';

describe('AppFooter', () => {
  it('renders correctly', () => {
    const appFooter = render(AppFooter);

    appFooter.getByText('Made with 💜 by Millen Mortier');
  });
});
