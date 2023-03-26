<template>
  <div id="app" :data-theme="theme">
    <TheHeader />
    <router-view />
    <TheFooter />
  </div>
</template>

<script>
import AOS from 'aos';
import { mapGetters } from 'vuex';
import TheHeader from '@/components/global/TheHeader.vue';
import TheFooter from '@/components/global/TheFooter.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
  },
  mounted() {
    AOS.init({
      // Global settings:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
  },
  computed: {
    ...mapGetters({
      theme: 'themes/getTheme',
    }),
  },
};
</script>

<style lang="scss">
@import '@/styles/app.scss';
</style>
