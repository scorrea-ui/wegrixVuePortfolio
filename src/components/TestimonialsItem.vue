<template>
  <div>
    <a href="https://www.linkedin.com/in/wegrix/">
      <div class="c-testimonial__card">
        <blockquote class="c-testimonial__content">
          <p>{{ quote.content }}</p>
        </blockquote>
        <div class="c-testimonial__author">
          <p class="c-testimonial__name">{{ quote.author }}</p>
          <p class="c-testimonial__company">{{ quote.company }}</p>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'TestimonialsItem',
  props: {
    quote: {
      type: Object,
      required: true,
    },
  },
};
</script>
