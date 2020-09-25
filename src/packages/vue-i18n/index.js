import { warn } from "@/utils/error";
import Vue from "vue";
import i18n from "vue-i18n";

Vue.use(i18n);

const messages = {
  "zh-CN": require("@/assets/lang/zh-CN.json"),
  en: require("@/assets/lang/en.json"),
  "zh-MO": require("@/assets/lang/zh-MO.json"),
  "ja-JP": require("@/assets/lang/ja-JP.json")
};

const vueI18n = new i18n({
  locale: "en",
  messages,
  silentFallbackWarn: true
});

export default vueI18n;
/**
 * 获取支持的语言列表
 */
export const languages = Object.keys(messages);

/**
 * 设置国际化语言
 *
 * @export void
 * @param {string} lang
 */
export function setLanguage(lang) {
  if (languages.indexOf(lang) == -1) {
    warn("[国际化设置错误]", `设置语言 '${lang}' 失败，仅支持 ${languages}`);
  }
  vueI18n.locale = lang;
  document.documentElement.lang = lang;
}
/**
 * 获取当前的语言
 *
 * @return {string} 当前的语言
 */
export function getLanguage() {
  return vueI18n.locale;
}
