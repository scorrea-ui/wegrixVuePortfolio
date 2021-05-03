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

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class CardsItem extends Vue {
  @Prop({ required: true }) public img!: string;
  @Prop({ required: true }) public title!: string;
  @Prop({ required: true }) public copy!: string;
}
</script>
