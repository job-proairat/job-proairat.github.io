import { createStore } from 'vuex';
import {
  URL_ROOT,
  URL_STARSHIPS,
} from '@/API';
import { IStarship } from '@/TSTypes';
import {
  UPDATE_SEARCH,
  GET_STARSHIPS,
  FILL_STARSHIPS,
  CONSTRUCTION_URL_PARAMS,
  DATABASE_FILL,
  DATABASE_CLEAN,
} from './storeTypes';

export default createStore({
  state: {
    search: '',
    starships: {} as any,
    urlParams: '',
    database: <Array<IStarship>>[],
  },
  getters: {
  },
  mutations: {
    [UPDATE_SEARCH](state, { targetValue }) {
      state.search = targetValue;
    },
    [FILL_STARSHIPS](state, { starships }) {
      state.starships = starships;
    },
    [CONSTRUCTION_URL_PARAMS](state, { params }) {
      let paramLine = '?';

      params.forEach((elem:{[key: string]: string}) => {
        paramLine += `${Object.keys(elem)}=${Object.values(elem)}&`;
      });

      state.urlParams = paramLine.slice(0, -1);
    },
    async [DATABASE_FILL](state) {
      const { getURLPathNameDigit } = await import('@/utils/CommonFunctions');

      for (let i = 0; i < state.starships?.results.length; i += 1) {
        state.database.push({
          ...{ id: getURLPathNameDigit(state.starships?.results[i].url) },
          ...state.starships?.results[i],
          ...{ imgSrc: 'https://www.ferra.ru/imgs/2019/10/26/10/3628622/fbd1529ff5c345a96cdb788d127bd9c198527866.jpg', imgAlt: 'Starship' },
        });
      }
    },
    [DATABASE_CLEAN](state) {
      state.database.length = 0;
    },
  },
  actions: {
    async [GET_STARSHIPS]({ state, commit }, { params }) {
      try {
        const { FulfillRequests } = await import('@/utils/CommonFunctions');
        commit(CONSTRUCTION_URL_PARAMS, { params });
        const starships = await FulfillRequests(`${URL_ROOT}${URL_STARSHIPS}${state.urlParams}`);
        commit(FILL_STARSHIPS, { starships });
      } catch (e) {
        console.log(`Ошибка в actions ${GET_STARSHIPS}`, e);
      }
    },
  },
  modules: {
  },
});
