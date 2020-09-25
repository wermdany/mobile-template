import { RE_IOS } from "@/utils/regexp";

const isIOS = UA => RE_IOS.test(UA);

const isAndroid = UA => UA.indexOf("Android") > -1 || UA.indexOf("Linux") > -1;
/**
 *返回原生页面
 *
 * @export void
 */

export function backToNative() {
  const UA = window.navigator.userAgent;
  if (isIOS(UA)) {
    // eslint-disable-next-line no-undef
    sysObj.backToPreActivity();
  }
  if (isAndroid(UA)) {
    // eslint-disable-next-line no-undef
    webkit.messageHandlers.backToPageUp.postMessage({});
  }
}