<template>
  <label :for="htmlFor">{{ text }}</label>
</template>

<script>
export default {
  name: 'BaseLabel',
  props: {
    htmlFor: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
