<template>
  <button class="c-btn" :class="className" :type="type" :aria-label="ariaLabel">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BaseButton extends Vue {
  @Prop({ default: 'c-btn--primary' }) public className!: string;

  @Prop() public type!: string;

  @Prop({ required: true }) public ariaLabel!: string;
}
</script>
