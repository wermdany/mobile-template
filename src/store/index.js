import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const requireModule = require.context("./modules", false, /\.js$/);

const modules = requireModule.keys().reduce((module, path) => {
  // ./app.js => app
  const name = path.replace(/^\.\/(.*)\.\w+$/, "$1");
  // 如果文件是空的则，下面这句取不出来结果
  const value = requireModule(path);
  module[name] = value.default;
  return module;
}, {});

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules,
  plugins: [
    createPersistedState({
      key: "vue_store"
    })
  ]
});
