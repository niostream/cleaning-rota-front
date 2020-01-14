import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import { UPDATE_USER } from "./mutation-types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: []
  },
  getters: {
    getUser(state) {
      return state.user;
    }
  },
  mutations: {
    [UPDATE_USER](state, payload) {
      state.user = payload;
    }
  },
  actions: {
    [UPDATE_USER]({ commit }, payload) {
      commit(UPDATE_USER, payload);
    }
  },
  modules: {},
  plugins: [createPersistedState()]
});
