import { layout } from "@/config";

const state = {
  use: true,
  name: ""
};

const mutations = {
  TOGGLE_USE(state, payload) {
    state.use = payload;
  },
  SET_NAME(state, payload) {
    state.name = payload;
  }
};

const actions = {
  toggleUse({ commit }, payload) {
    commit("TOGGLE_USE", payload);
  },
  setName({ commit }, payload) {
    commit("SET_NAME", payload);
  },
  setDefaultNavBar({ commit }) {
    commit("TOGGLE_USE", layout.TabBarDefaultUse);
  },
  setCurrentState({ commit }, payload) {
    // eslint-disable-next-line no-prototype-builtins
    if (payload.hasOwnProperty("use")) {
      commit("TOGGLE_USE", payload.use);
    }
    if (payload.name) {
      commit("SET_NAME", payload.name);
    }
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
