<template>
  <button class="c-btn" :class="className" :type="type" :aria-label="ariaLabel" :disabled="disabled">
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
    type: {
      type: String,
    },
    ariaLabel: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
