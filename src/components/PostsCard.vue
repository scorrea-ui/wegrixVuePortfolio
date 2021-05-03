<template>
  <div class="o-grid__col u-4/12@md">
    <div class="c-articles__card">
      <div
        class="c-articles__bg"
        :style="{
          backgroundImage: `url(${post.cover_image || post.social_image})`,
        }"
      ></div>
      <div class="c-articles__wrapper">
        <h3>{{ post.title }}</h3>
        <div class="c-articles__time">
          <span>Published on </span
          ><time :datetime="post.published_timestamp">{{
            post.readable_publish_date
          }}</time>
        </div>
        <p>
          {{ post.description }}
        </p>
        <a
          href="https://dev.to/scorreaui/accessibility-and-testing-4je3"
          target="_blank"
          rel="noreferrer"
          :aria-label="`Read more about ${post.title}`"
          >Read More</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostsCard',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>
