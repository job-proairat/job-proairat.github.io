<template>
  <nav class="navbar">
    <div class="navbar-toggler-icon" @click="OpenModal" @keydown="OpenModal"></div>
    <img class="img-logo" src="https://meshok.net/nuxt/logo.svg" alt="" width="100" height="29">
    <span class="magnifying-glass">&#128269;</span>
    <div class="search-wrapper">
      <label for="search">
        <input id="search" type="text" v-model="search" placeholder="Нечёткий поиск по заголовкам..." />
      </label>
    </div>
  </nav>
  <div class="cards">
    <MyCard v-for="(post, index) in filteredList" :key="index" v-bind="post"></MyCard>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue';
import { useStore } from 'vuex';
import { FuzzySearch } from '@/assets/scripts/CommonFunctions';
import MyCard from '@/components/MyCard.vue';
import CreateCards from '@/assets/scripts/CreateCards';

const store = useStore();
const search = ref('');
const cards = reactive(CreateCards());
const filteredList = computed(() => FuzzySearch(search.value, cards, 'title'));

function OpenModal() {
  store.commit('ChangeStatusModal', {
    value: true,
  });
}
</script>

<style scoped lang="less">
@navbar-bg-color: #004b8e;

.navbar {
  background-color: @navbar-bg-color;
  display: flex;
  align-items: center;
  padding: 10px;
}

.navbar-toggler-icon {
  width: 30px;
  height: 30px;
  background-position: center;
  background-image: url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgb%28255, 255, 255%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  padding: 4px 12px;
  // border: 1px solid white;
  margin-right: 20px;
  order: 1;
  cursor: pointer;
}

.img-logo {
  order: 2;
  margin-right: 5px;
}

.magnifying-glass {
  order: 3;
  margin-left: auto;
  margin-right: 5px;
}

.search-wrapper {
  color: white;
  order: 4;
  & #search {
    height: 30px;
    width: 250px;
    padding: 4px 12px;
  }
}

@media screen and (max-width: 436px) {
  .navbar {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas:
      "navbar-toggler-icon"
      "img-logo"
      "magnifying-glass"
      "search-wrapper";
    justify-items: center;
  }

  .navbar-toggler-icon {
    grid-area: navbar-toggler-icon;
  }

  .img-logo {
    grid-area: img-logo;
  }

  .magnifying-glass {
    grid-area: magnifying-glass;
    margin-left: 0;
  }

  .search-wrapper {
    grid-area: search-wrapper;
  }
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  max-width: 800px;
  margin: 1em auto;
}

</style>
