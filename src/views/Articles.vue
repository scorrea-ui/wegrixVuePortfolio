<template>
  <div class="c-articles">
    <div class="o-container">
      <h1>Posts written on dev.to</h1>
      <Posts :posts="articles" />
    </div>
  </div>
</template>

<script>
import Posts from '@/components/Posts.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Articles',
  components: {
    Posts,
  },
  methods: {
    ...mapActions({
      getArticles: 'articles/getArticles',
    }),
  },
  mounted() {
    this.getArticles();
  },
  computed: {
    ...mapGetters({
      articles: 'articles/articles',
    }),
  },
};
</script>
