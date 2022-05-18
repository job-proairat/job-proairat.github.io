<template>
    <img
      class="img-logo"
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      @click="logoClickHandler"
      @keydown="() => {}"
    >
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

defineProps<{
    class: string,
    src: string,
    alt?: string,
    width?: number,
    height?: number,
}>();

function logoClickHandler() {
  router.push({ path: '/' });
}

</script>

<style scoped lang="scss">
.img-logo {
  order: 2;
  margin-right: 5px;
  cursor: pointer;
}
</style>
