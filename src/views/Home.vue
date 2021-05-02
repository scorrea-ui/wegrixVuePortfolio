<template>
  <div class="home">
    <Hero />
    <Cards />
    <Projects />
    <Testimonials />
  </div>
</template>

<script>
import Hero from '@/components/TheHero.vue';
import Cards from '@/components/Cards.vue';
import Projects from '@/components/Projects.vue';
import Testimonials from '@/components/Testimonials.vue';

export default {
  name: 'Home',
  components: {
    Hero,
    Cards,
    Projects,
    Testimonials,
  },
};
</script>
