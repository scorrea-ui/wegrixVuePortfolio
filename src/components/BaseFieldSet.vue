<template>
  <fieldset>
    <slot></slot>
  </fieldset>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class BaseFieldSet extends Vue {}
</script>
