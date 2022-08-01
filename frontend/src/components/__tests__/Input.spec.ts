import { render, fireEvent, getByPlaceholderText } from '@testing-library/vue';
import Input from '../Input.vue';

describe('Input', () => {
  it('properly handles v-model', async () => {
    const placeholder = 'placeholder';

    const component = render(Input, {
      props: { modelValue: 'Foo', placeholder },
    });

    const input = component.getByPlaceholderText(placeholder);
    await fireEvent.update(input, 'Bar');

    component.getByDisplayValue('Bar');
  });

  it('passes attributes to the underlying input', () => {
    const placeholder = 'placeholder';
    const component = render(Input, {
      props: { modelValue: 'Foo', placeholder, type: 'text' },
    });

    const input = component.getByPlaceholderText(placeholder);

    expect(input.getAttribute('placeholder')).toBe(placeholder);
    expect(input.getAttribute('type')).toBe('text');
  });

  it('sets the "large" class when the large prop is passed', () => {
    const placeholder = 'placeholder';
    const component = render(Input, {
      props: { modelValue: 'Foo', placeholder, large: true },
    });
    const input = component.getByPlaceholderText(placeholder);
    expect(input.className).toContain('large');
  });
});
