<template>
  <div class="home">
    <Hero />
    <Cards />
    <ProjectItems />
    <TestimonialsItems />
  </div>
</template>

<script>
import Hero from '@/components/TheHero.vue';
import Cards from '@/components/Cards.vue';
import ProjectItems from '@/components/ProjectItems.vue';
import TestimonialsItems from '@/components/TestimonialsItems.vue';

export default {
  name: 'HomeView',
  components: {
    Hero,
    Cards,
    ProjectItems,
    TestimonialsItems,
  },
};
</script>
