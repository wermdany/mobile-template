import Vue from "vue";
import App from "@/App";
import router from "@/router";
import store from "@/store";
//引入第三方包 简单配置
import "@/packages";
//引入全局基础样式
import "@/styles/index.less";
//引入 i18n 国际化配置
import i18n from "@/packages/vue-i18n";
//引入 vant 配置
import "@/packages/vant";

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
