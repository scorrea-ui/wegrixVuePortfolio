<template>
  <p class="c-about__copy">
    <slot></slot>
  </p>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class BaseCopy extends Vue {}
</script>
