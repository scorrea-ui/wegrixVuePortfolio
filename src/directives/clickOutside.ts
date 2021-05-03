
import Vue from "vue";

const clickOutside = {
  bind(el: any, binding: any, vnode: any) {
    el.eventOnClick = (event: Event) => {
      if (!(el === event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };
    document.addEventListener("click", el.eventOnClick);
  },
  unbind(el: any) {
    document.removeEventListener("click", el.eventOnClick);
  },
};

Vue.directive("click-outside", clickOutside);

export default clickOutside;
