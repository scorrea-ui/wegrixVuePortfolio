<template>
  <textarea
    :class="className"
    :name="name"
    :aria-label="ariaLabel"
    @input="handleInput"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BaseTextArea extends Vue {
  @Prop({ required: true }) public name!: string;

  @Prop({ required: true }) public ariaLabel!: string;

  @Prop() public className!: string;

  public handleInput(e: Event) {
    this.$emit('input', e);
  }
}
</script>
