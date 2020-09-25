import Vue from "vue";
import App from "@/App";
import router from "@/router";
import store from "@/store";

import "@/packages";

import i18n from "@/packages/vue-i18n";

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
