<template>
  <section>
    <div class="c-testimonial" data-aos="zoom-in">
      <h1 class="u-mb u-text-center">Public Testimonials</h1>
      <div class="o-container">
        <div class="o-grid">
          <div class="u-12/12">
            <swiper-container
              class="swiper"
              init="false"
            >
              <swiper-slide v-for="quote in testimonialQuotes" :key="quote.author">
                <TestimonialsItem :quote="quote" />
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper-container>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { onMounted } from 'vue';
import quotes from '@/data/Testimonials';
import TestimonialsItem from './TestimonialsItem.vue';

const testimonialQuotes = quotes;

onMounted(() => {
  const swiperEl = document.querySelector('swiper-container');


const swiperOptions = {
  direction: 'horizontal',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  loop: true,
  keyboard: {
    enabled: true,
  },
  spaceBetween: 20,
  breakpoints: {
    1280: {
      slidesPerView: '3',
    },
    1024: {
      slidesPerView: '2',
    },
    320: {
      slidesPerView: '1',
    },
  },
};

if (swiperEl) {
  Object.assign(swiperEl, swiperOptions);
  // and now initialize it
  swiperEl.initialize();
}
})



</script>
