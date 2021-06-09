<template>
  <div id="app" :data-theme="theme">
    <Header />
    <transition name="fade">
      <router-view />
    </transition>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/global/TheHeader.vue';
import Footer from '@/components/global/TheFooter.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
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
