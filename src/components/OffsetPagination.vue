<template>
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li
          class="page-item"
          :class="{disabled: isFirstPage}"
          @click="prev"
          @keydown="() => {}"
      ><a class="page-link" href="#" @click.prevent>Назад</a>
      </li>
      <li
          class="page-item"
          v-for="item in pageCount"
          :key="item"
          :class="{active: currentPage === item }"
          @click="currentPage = item"
          @keydown="() => {}"
      ><a class="page-link" href="#" @click.prevent>{{ item }}</a>
      </li>
      <li
          class="page-item"
          :class="{disabled: isLastPage}"
          @click="next"
          @keydown="() => {}"
      ><a class="page-link" href="#" @click.prevent>Вперёд</a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useOffsetPagination } from '@vueuse/core';
import {
  GET_STARSHIPS,
  DATABASE_FILL,
  DATABASE_CLEAN,
} from '@/store/storeTypes';

const store = useStore();
const starships = computed(() => store.state.starships);

async function fetchData({ currentPage } : { currentPage: number; }) {
  await store.dispatch(GET_STARSHIPS, { params: [{ page: currentPage }] });
  store.commit(DATABASE_CLEAN);
  store.commit(DATABASE_FILL);
}

await fetchData({ currentPage: 1 });

const {
  currentPage,
  pageCount,
  isFirstPage,
  isLastPage,
  prev,
  next,
} = useOffsetPagination({
  total: starships.value.count,
  page: 1,
  pageSize: starships.value.results.length,
  onPageChange: fetchData,
  onPageSizeChange: fetchData,
});

</script>

<style scoped lang="scss">
ul.pagination {
    user-select: none;
    justify-content: center;
    margin-top: 16px;
}
</style>
