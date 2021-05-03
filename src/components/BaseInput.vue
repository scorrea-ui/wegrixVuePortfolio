<template>
  <input
    :name="name"
    :type="type"
    :aria-label="ariaLabel"
    :class="className"
    @input="handleInput"
    @blur="handleBlur"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BaseInput extends Vue {
  @Prop({ required: true }) public name!: string;

  @Prop({ required: true }) public type!: string;

  @Prop() public ariaLabel!: string;

  @Prop() public className!: string;

  public handleInput(e: Event) {
    this.$emit('input', e);
  }

  public handleBlur(e: Event) {
    this.$emit('blur', e);
  }
}
</script>
