<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    className: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    observer: null,
  }),
  mounted() {
    const options = {};
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        this.$emit('intersect');
      }
    }, options);

    this.observer.observe(this.$el);
  },
  destroyed() {
    this.observer.disconnect();
  },
};
</script>
