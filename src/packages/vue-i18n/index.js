// https://github.com/kazupon/vue-i18n/
// Documentation see http://kazupon.github.io/vue-i18n/zh/
import { warn } from "@/utils/error";
import Vue from "vue";
import i18n from "vue-i18n";
import { Locale } from "vant";

const messages = {
  "zh-CN": require("@/assets/lang/zh-CN.json"),
  "en-US": require("@/assets/lang/en.json"),
  "zh-MO": require("@/assets/lang/zh-MO.json"),
  "ja-JP": require("@/assets/lang/ja-JP.json")
};

const vantI18n = {
  "zh-CN": require("vant/lib/locale/lang/zh-CN").default,
  "en-US": require("vant/lib/locale/lang/en-US").default,
  "zh-MO": require("vant/lib/locale/lang/zh-HK").default,
  "ja-JP": require("vant/lib/locale/lang/ja-JP").default
};

Vue.use(i18n);
Locale.use("en-US", vantI18n["en-US"]);

const vueI18n = new i18n({
  locale: "en-US",
  messages,
  silentFallbackWarn: true
});

export default vueI18n;
/**
 * 获取支持的语言列表
 */
export const languages = {
  i18n: Object.keys(messages),
  vant: Object.keys(vantI18n)
};

/**
 * 设置国际化语言
 *
 * @export void
 * @param {string} lang
 */
export function setLanguage(lang) {
  if (languages.i18n.indexOf(lang) == -1) {
    warn(
      "[国际化设置]",
      `i18n 设置语言 '${lang}' 失败，仅支持 ${languages.i18n}`
    );
  }
  if (languages.vant.indexOf(lang) == -1) {
    warn(
      "[国际化设置]",
      `vant 设置语言 '${lang}' 失败，仅支持 ${languages.vant}`
    );
  }
  vueI18n.locale = lang;
  document.documentElement.lang = lang;
  Locale.use(lang, vantI18n[lang]);
}
/**
 * 获取当前的语言
 *
 * @return {string} 当前的语言
 */
export function getLanguage() {
  return vueI18n.locale;
}
