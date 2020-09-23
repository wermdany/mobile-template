import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import { store } from "@/config";
import getters from "./getters";

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
  getters,
  modules,
  plugins: [
    createPersistedState({
      key: store.STORAGE_KEY
    })
  ]
});
