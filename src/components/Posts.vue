<template>
  <div class="o-grid">
    <PostsCard v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import PostsCard from "./PostsCard.vue";
@Component({
  components: {
    PostsCard,
  },
})
export default class Posts extends Vue {
  @Prop({ required: true }) public posts!: Array<Object>;
}
</script>
