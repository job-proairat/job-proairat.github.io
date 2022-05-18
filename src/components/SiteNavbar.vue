<template>
  <UINavbar>
    <NTogglerIcon/>
    <NLogo
      class='img-logo'
      src='https://pipedream.com/s.v0/app_mE7hlb/logo/orig'
      alt='logo'
      :height='50'
     />
    <NMagnifyingGlass :class="{active: isDisabled}"/>
    <NSearch :search="search" @update:search="updateSearch" :class="{ active: isDisabled }"/>
  </UINavbar>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';
import { useStore } from 'vuex';
import UINavbar from '@/components/UI/Navbar/UINavbar.vue';
import NTogglerIcon from '@/components/UI/Navbar/NTogglerIcon.vue';
import NLogo from '@/components/UI/Navbar/NLogo.vue';
import NMagnifyingGlass from '@/components/UI/Navbar/NMagnifyingGlass.vue';
import NSearch from '@/components/UI/Navbar/NSearch.vue';
import {
  UPDATE_SEARCH,
} from '@/store/storeTypes';

const store = useStore();
const search = computed(() => store.state.search);

function updateSearch(value:string) {
  store.commit(UPDATE_SEARCH, { targetValue: value });
}

defineProps({
  isDisabled: {
    type: Boolean,
  },
});

</script>

<style scoped lang="scss">
@media screen and (max-width: 436px) {
  .navbar {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas:
      "toggler-icon"
      "img-logo"
      "magnifying-glass"
      "search-wrapper";
    justify-items: center;
  }
  .toggler-icon {
    grid-area: toggler-icon;
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

.active {
  visibility: hidden;
}
</style>
