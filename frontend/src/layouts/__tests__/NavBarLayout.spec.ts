import { render } from '@testing-library/vue';
import NavbarLayout from '../NavbarLayout.vue';

describe('NavBarLayout', () => {
  it('should render its header slot contents in the headerContainer, its content slot contents in the contentContainer', () => {
    const layout = render(NavbarLayout, {
      slots: {
        header: 'Header content',
        content: 'More content',
      },
    });

    expect(
      layout.container.querySelector('.headerContainer')?.textContent
    ).toBe('Header content');
    expect(
      layout.container.querySelector('.contentContainer')?.textContent
    ).toBe('More content');
  });
});
