<template>
  <div class="home">
    <TheHero />
    <Cards />
    <Projects />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TheHero from '@/components/TheHero.vue';
import Cards from '@/components/Cards.vue';
import Projects from '@/components/Projects.vue';
import Testimonials from '@/components/Testimonials.vue';

@Component({
  components: {
    TheHero,
    Cards,
    Projects,
    Testimonials,
  },
})
export default class Home extends Vue {}
</script>
