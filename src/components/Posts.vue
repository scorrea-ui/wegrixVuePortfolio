<template>
  <div class="o-grid">
    <PostsCard v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import PostsCard from './PostsCard.vue';

export default {
  name: 'Posts',
  components: {
    PostsCard,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>
