<template>
    <img class="img-logo" :src="src" :alt="alt" :width="width" :height="height">
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
    class: string,
    src: string,
    alt?: string,
    width?: number,
    height?: number,
}>();
</script>

<style scoped lang="scss">
.img-logo {
  order: 2;
  margin-right: 5px;
}
</style>
