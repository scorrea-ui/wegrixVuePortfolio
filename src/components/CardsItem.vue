<template>
  <div class="o-grid__col u-3/12@md">
    <div class="c-cards__box">
      <img
        class="c-cards__img"
        :src="require('@/assets/icons/' + img)"
        :alt="title"
      />
      <h3 class="c-cards__subtitle">{{ title }}</h3>
      <p class="c-cards__copy">{{ copy }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardsItem',
  props: {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    copy: {
      type: String,
      required: true,
    },
  },
};
</script>
