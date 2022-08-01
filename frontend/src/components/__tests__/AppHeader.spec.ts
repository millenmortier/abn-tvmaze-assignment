import { render } from '@testing-library/vue';
import AppHeader from '../AppHeader.vue';

describe('AppHeader', () => {
  it("should pass the logoHref to the logo's <a> tag", () => {
    const appHeader = render(AppHeader, {
      props: { logoHref: 'someLocation' },
    });

    expect(
      appHeader.container.querySelector('routerlink')?.getAttribute('to')
    ).toBe('someLocation');
  });

  it("should pass '/' as the logo links location if no logoHref is passed", () => {
    const appHeader = render(AppHeader);

    expect(
      appHeader.container.querySelector('routerlink')?.getAttribute('to')
    ).toBe('/');
  });

  it('should render slots in the navItemContainer', () => {
    const appHeader = render(AppHeader, {
      props: { logoHref: 'someLocation' },
      slots: {
        navItems: '<span>Content</span>',
      },
    });

    appHeader.getByText('Content');
  });
});
