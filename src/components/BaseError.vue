<template>
  <div class="error" :aria-label="ariaLabel">{{ text }}</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BaseError extends Vue {
  @Prop() public ariaLabel!: string;

  @Prop({ required: true }) public text!: string;
}
</script>
