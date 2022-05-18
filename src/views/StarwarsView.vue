<template>
  <SiteNavbarVue :isDisabled="false" />
  <Suspense>
    <OffsetPagination />
    <template #fallback>
      Загрузка данных...
    </template>
  </Suspense>
  <ListCard>
    <OneCard
      v-for="card in filteredList"
      :key="card.id"
      :card="card"
      @click="getOneCard(card)" />
  </ListCard>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import { FuzzySearch } from '@/utils/CommonFunctions';
import SiteNavbarVue from '@/components/SiteNavbar.vue';
import ListCard from '@/components/ListCard.vue';
import OneCard from '@/components/OneCard.vue';
import OffsetPagination from '@/components/OffsetPagination.vue';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();
const search = computed(() => store.state.search);
const database = computed(() => store.state.database);
const filteredList = computed(() => FuzzySearch(search.value, database.value, 'name'));

function getOneCard(card) {
  router.push({ path: `${card.id}` });
}

</script>

<script lang="ts">
export default {
  name: 'StarWarsView',
};
</script>
