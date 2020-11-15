/**
 * 获取本机语言
 */
export function getLocalLanguage() {
  return window.navigator.language;
}
/**
 * 获取本机语言列表
 */
export function getLocalLanguages() {
  return window.navigator.languages;
}
/**
 * 查找 el 标签
 *
 * @export
 * @param {*} parent 父节点
 * @param {*} type 标签名
 * @returns
 */
export function findEle(parent, type) {
  return parent.tagName.toLowerCase() === type
    ? parent
    : parent.querySelector(type);
}
/**
 * 手动触发一个事件
 *
 * @export
 * @param {Element} el 节点
 * @param {String} type 事件名
 * @returns
 */
export function triggerEvent(el, type) {
  const e = document.createEvent("HTMLEvents");
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}
