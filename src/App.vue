<template>
  <div id="app">
    <Header />
    <transition name="fade">
      <router-view />
    </transition>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/global/TheHeader.vue";
import Footer from "@/components/global/TheFooter.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
@import "@/styles/app.scss";
</style>
