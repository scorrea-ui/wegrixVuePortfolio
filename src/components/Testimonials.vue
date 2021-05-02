<template>
  <section>
    <div class="c-testimonial">
      <h1 class="u-mb u-text-center">Public Testimonials</h1>
      <div class="o-container">
        <div class="o-grid">
          <div class="u-12/12">
            <swiper
              class="swiper"
              :options="swiperOption"
              :auto-update="true"
              :auto-destroy="true"
              :delete-instance-on-destroy="true"
              :cleanup-styles-on-destroy="true"
            >
              <swiper-slide v-for="quote in quotes" :key="quote.author">
                <TestimonialsItem :quote="quote" />
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import quotes from '@/data/Testimonials';
import TestimonialsItem from './TestimonialsItem.vue';

export default {
  name: 'Testimonials',
  components: {
    Swiper,
    SwiperSlide,
    TestimonialsItem,
  },
  data() {
    return {
      swiperOption: {
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
      },
      quotes,
    };
  },
};
</script>
