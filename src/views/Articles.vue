<template>
  <div class="c-articles">
    <div class="o-container">
      <h1>Posts written on dev.to</h1>
      <div class="c-loading" v-if="loading">
        <img src="../assets/icons/loading.svg" alt="Loading..." />
      </div>
      <Posts v-else :posts="articles" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Posts from '@/components/Posts.vue';

export default {
  name: 'ArticlesView',
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
      loading: 'articles/loading',
    }),
  },
};
</script>
