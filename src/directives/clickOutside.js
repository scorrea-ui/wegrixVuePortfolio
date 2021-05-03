/* eslint-disable no-param-reassign */
import Vue from 'vue';

const clickOutside = {
  bind(el, binding, vnode) {
    el.eventOnClick = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };
    document.addEventListener('click', el.eventOnClick);
  },
  unbind(el) {
    document.removeEventListener('click', el.eventOnClick);
  },
};

Vue.directive('click-outside', clickOutside);

export default clickOutside;
