import { render } from '@testing-library/vue';
import HScrollContainerPadding from '../HScrollContainerPadding.vue';

describe('HScrollContainer', () => {
  it('should render correctly', () => {
    const component = render(HScrollContainerPadding);

    expect(component.container.querySelector('.root')).toBeTruthy();
  });
});
