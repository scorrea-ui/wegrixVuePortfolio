<template>
  <div id="app" :data-theme="theme">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Header from '@/components/global/TheHeader.vue';
import Footer from '@/components/global/TheFooter.vue';

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
