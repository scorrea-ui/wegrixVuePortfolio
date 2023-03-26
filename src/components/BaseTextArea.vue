<template>
  <textarea
    :class="className"
    :name="name"
    :aria-label="ariaLabel"
    @input="handleInput"
    @blur="handleBlur"
  />
</template>

<script>
export default {
  name: 'BaseTextArea',
  props: {
    name: {
      type: String,
      required: true,
    },
    ariaLabel: {
      type: String,
      required: true,
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
