<template>
    <div class="search-wrapper">
      <label for="search">
        <input
            id="search"
            type="text"
            placeholder="Нечёткий поиск..."
            :value="search"
            @input="$emit('update:search', $event.target.value)"
        />
      </label>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

defineProps<{search: string}>();
defineEmits<{(e: 'update:search', value:string): void}>();
</script>

<style scoped lang="scss">
.search-wrapper {
    color: white;
    order: 4;
    margin-right: 10px;
    & #search {
      height: 30px;
      width: 250px;
      padding: 4px 12px;
    }
  }
</style>
