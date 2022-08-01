import { render } from '@testing-library/vue';
import NavItem from '../NavItem.vue';

describe('NavItem', () => {
  it('correctly handles the active prop', () => {
    const navItem = render(NavItem, { props: { href: '/' } });
    const navItem2 = render(NavItem, {
      props: { active: true, href: '/' },
    });

    expect(navItem.container.querySelector('.active')).toBeNull();
    expect(navItem2.container.querySelector('.active')).not.toBeNull();
  });

  it('correctly handles the href prop', () => {
    const navItem = render(NavItem, { props: { href: '/location' } });

    expect(navItem.container.querySelector('a')?.getAttribute('href')).toBe(
      '/location'
    );
  });
});
