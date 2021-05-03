<template>
  <router-link
    :to="{ name: view, hash: this.hash ? `#${this.hash}` : '' }"
    :class="className"
    @click.native="scrollToElement"
  >
    <slot></slot>
  </router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BaseLink extends Vue {
  @Prop({ required: true }) public view!: string;

  @Prop({ required: true }) public className!: string;

  @Prop() public hash!: string;

  public scrollToElement(): void {
    document.getElementById(this.hash)!.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
</script>
