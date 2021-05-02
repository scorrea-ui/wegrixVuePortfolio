<template>
  <button class="c-btn" :class="className">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      default: 'c-btn--primary',
    },
  },
};
</script>
