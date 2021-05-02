import { shallowMount } from '@vue/test-utils';
import Button from '@/components/shared/Button/Button.vue';

describe('Buttons.vue', () => {
  it('renders button with props passed in', () => {
    const type = 'button';
    const id = '4';

    const wrapper = shallowMount(Button, {
      propsData: { type, id },
    });
    expect(wrapper.props('type')).toMatch(type);
    expect(wrapper.props('id')).toMatch(id);
  });
});
