<template>
  <div class="error" :aria-label="ariaLabel">{{ text }}</div>
</template>

<script>
export default {
  name: 'BaseError',
  props: {
    ariaLabel: {
      type: String,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
