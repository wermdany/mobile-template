import router from "./index";
import store from "@/store";
/**
 * 重设 navBar
 */
export function setDefaultNavBar() {
  store.dispatch("navbar/setDefaultNavBar");
}
router.beforeEach((to, form, next) => {
  setDefaultNavBar();
  next();
});
