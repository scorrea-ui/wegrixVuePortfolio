<template>
  <input
    :name="name"
    :type="type"
    :aria-label="ariaLabel"
    :class="className"
    @input="handleInput"
    @blur="handleBlur"
  />
</template>

<script>
/* eslint-disable no-unused-vars */
export default {
  name: 'BaseInput',
  props: {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    ariaLabel: {
      type: String,
    },
    className: {
      type: String,
    },
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e);
    },
    handleBlur(e) {
      this.$emit('blur', e);
    },
  },
};
</script>
