<template>
  <router-link
    :to="{ name: view, hash: this.hash ? `#${this.hash}` : '' }"
    :class="className"
    @click.native="scrollToElement"
  >
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: 'BaseLink',
  props: {
    view: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: 'c-btn c-btn--secondary',
      required: true,
    },
    hash: {
      type: String,
    },
  },
  methods: {
    scrollToElement() {
      document.getElementById(this.hash).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    },
  },
};
</script>
