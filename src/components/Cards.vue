<template>
  <section>
    <div class="c-cards" data-aos="fade-up">
      <div class="o-container">
        <h2 class="c-cards__title u-text-center">What I include in websites I create</h2>
        <div class="o-grid o-grid--center o-grid--cards o-grid--equal-height">
          <CardsItem
            v-for="card in cards"
            :key="card.title"
            :title="card.title"
            :copy="card.copy"
            :img="card.image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CardData from '@/data/Cards';
import CardsItem from './CardsItem.vue';

export default {
  name: 'CardItems',
  components: {
    CardsItem,
  },
  data() {
    return {
      cards: CardData,
    };
  },
};
</script>
