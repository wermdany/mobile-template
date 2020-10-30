import router from "./index";
import store from "@/store";
import onLaunch from "@/router/onLaunch";
/**
 * 重设 navBar
 */
export function setDefaultNavBar() {
  store.dispatch("navbar/setDefaultNavBar");
  store.dispatch("tabbar/setDefaultNavBar");
}

function setCurrentPageState(meta) {
  if (meta.navBar && Object.keys(meta.navBar).length) {
    store.dispatch("navbar/setCurrentState", meta.navBar);
  }
  if (meta.tabBar && Object.keys(meta.tabBar).length) {
    store.dispatch("tabbar/setCurrentState", meta.tabBar);
  }
}
router.beforeEach((to, form, next) => {
  if (form.matched.length === 0) {
    onLaunch(to, form);
  }
  // 每次页面切换重新设置为默认值
  setDefaultNavBar();
  //设置当前页面的
  setCurrentPageState(to?.meta);
  next();
});
