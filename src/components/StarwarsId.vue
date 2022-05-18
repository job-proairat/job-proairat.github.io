<template>
  <SiteNavbarVue :isDisabled="true" />
  <h2>{{starshipName}}</h2>
  <table class="table table-warning table-striped table-bordered">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Параметр</th>
        <th scope="col">Значение</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(value, key, index) in card" :key="key">
        <th scope="row">{{index + 1}}</th>
        <td>{{key}}</td>
        <td>{{value}}</td>
      </tr>
     </tbody>
    </table>
</template>

<script setup lang="ts">
import SiteNavbarVue from '@/components/SiteNavbar.vue';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

const route = useRoute();
const store = useStore();
const database = computed(() => store.state.database);
const card = ref(null);
card.value = database.value.filter((elem) => elem.id === route.params.id);
([card.value] = card.value);
const starshipName = card.value.name;

</script>

<style scoped lang="scss">
h2 {
    color: black;
    margin: 16px 0;
}
table {
    max-width: 900px;
    margin: 0 auto 16px;
}
</style>
