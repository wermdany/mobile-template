import Vue from "vue";
import VueRouter from "vue-router";

import { isVueRoutes } from "@/utils/validator";

import { isDev } from "@/utils/env";

Vue.use(VueRouter);

const readFile = require.context("@/views", true, /^\.\/\w+\/router\.js$/);

const routes = readFile.keys().reduce((modules, path) => {
  const item = readFile(path).default;

  if (isDev) {
    let filePath = path.substr(1);
    isVueRoutes(item, "@/views" + filePath);
  }

  return modules.concat(item);
}, []);

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;
