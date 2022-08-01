import { render } from '@testing-library/vue';
import Button from '../Button.vue';

describe('Button', () => {
  it(`should render its slots`, () => {
    const button = render(Button, {
      slots: { default: 'Hello' },
    });

    button.getByText('Hello');
  });
});
