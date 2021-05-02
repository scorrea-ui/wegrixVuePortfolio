<template>
  <div class="c-articles">
    <h1>Posts written on dev.to</h1>
    <div class="o-container">
      <div class="o-grid">
        <PostItem v-for="post in articles" :key="post.id" :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import PostItem from './PostItem.vue';

export default {
  name: 'Posts',
  components: {
    PostItem,
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
