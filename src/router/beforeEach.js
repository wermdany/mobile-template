import router from "./index";
import store from "@/store";
import onLaunch from "@/router/onLaunch";
/**
 * 重设 navBar
 */
export function setDefaultNavBar() {
  store.dispatch("navbar/setDefaultNavBar");
}
router.beforeEach((to, form, next) => {
  if (form.matched.length === 0) {
    onLaunch(to, form);
  }
  // 每次页面切换重新设置为默认值
  setDefaultNavBar();
  next();
});
