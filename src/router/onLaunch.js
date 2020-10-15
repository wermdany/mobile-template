/**
 * 自定的生命周期 onLaunch 类似于小程序的 onLaunch 指的时页面第一次加载的时候执行
 * 原理是 vue-router 导航守卫 beforeEach 的 form.matched为空数组时
 * 这种情况只会是第一次加载，或者页面根目录 "/" 并且根目录没有使用任何组件跳转至其他页面
 * 但是根据实际业务不刻意去操作第二种情况不会发生。
 */
import { getLocalLanguage } from "@/utils/web";
import { languages, setLanguage } from "@/packages/vue-i18n";
import { system } from "@/config";
/**
 * 根据本机语言设置语言
 * 优先级
 * 1.url参数 ?language=
 * 2.准确匹配的语种
 * 3.前两位的母语种
 * 4.默认语言
 */
function setLanguageByLocal(to) {
  let language = getLocalLanguage();
  const i18n = languages.i18n;
  if (to.query.language) {
    language = to.query.language;
  }
  if (i18n.includes(language)) {
    setLanguage(language);
  } else {
    const motherTongue = language.substr(0, 2);
    if (i18n.includes(motherTongue)) {
      setLanguage(motherTongue);
    } else {
      setLanguage(system.defaultLanguage);
    }
  }
}

export default (to, form) => {
  console.log("onLaunch");
  setLanguageByLocal(to, form);
};
