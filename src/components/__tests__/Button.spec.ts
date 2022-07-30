import { render } from '@testing-library/vue';
import Button from '../Button.vue';

describe('Button', () => {
  it(`should render the title props as it's title prop`, () => {
    const title = 'Hello';

    const button = render(Button, {
      props: { title },
    });

    button.getByText(title);
  });
});
