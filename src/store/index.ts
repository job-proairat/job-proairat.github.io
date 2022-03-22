import { createStore } from 'vuex';

export default createStore({
  state: {
    statusModal: false,
  },
  getters: {
  },
  mutations: {
    ChangeStatusModal(state, { value }) {
      state.statusModal = value;
    },
  },
  actions: {
  },
  modules: {
  },
});
