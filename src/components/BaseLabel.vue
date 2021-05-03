<template>
  <label :for="htmlFor">{{ text }}</label>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BaseLabel extends Vue {
  @Prop({ required: true }) public htmlFor!: string;

  @Prop({ required: true }) public text!: string;
}
</script>
